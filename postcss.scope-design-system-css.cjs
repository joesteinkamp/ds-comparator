const selectorParser = require('postcss-selector-parser');

const scopedCssFiles = [
  {
    match: /node_modules\/@shopify\/polaris\/build\/esm\/styles\.css$/,
    prefix: '[data-ds="polaris"]',
  },
  {
    match: /node_modules\/antd\/dist\/reset\.css$/,
    prefix: '[data-ds="antd"]',
  },
  {
    match: /node_modules\/@carbon\/styles\/css\/styles\.css$/,
    prefix: '[data-ds="carbon"]',
  },
];

const rootLikeTags = new Set(['html', 'body']);
const rootLikePseudos = new Set([':root', ':host']);

const scopeDesignSystemCss = () => ({
  postcssPlugin: 'scope-design-system-css',
  Once(root) {
    const filePath = root.source?.input.file ?? '';
    const scopedConfig = scopedCssFiles.find(({ match }) => match.test(filePath));
    if (!scopedConfig) return;

    const prefixSelector = selectorParser().astSync(scopedConfig.prefix).nodes[0];

    root.walkRules((rule) => {
      if (!rule.selector) return;
      if (rule.parent?.type === 'atrule' && rule.parent.name === 'keyframes') {
        return;
      }

      const nextSelector = selectorParser((selectors) => {
        selectors.each((selector) => {
          // Strip leading :root/html/body so we can replace them with the prefix.
          let first = selector.nodes[0];
          while (first) {
            const isRootLikeTag =
              first.type === 'tag' && rootLikeTags.has(first.value);
            const isRootLikePseudo =
              first.type === 'pseudo' && rootLikePseudos.has(first.value);
            if (!isRootLikeTag && !isRootLikePseudo) break;

            first.remove();
            const next = selector.nodes[0];
            if (next?.type === 'combinator') {
              next.remove();
            }
            first = selector.nodes[0];
          }

          if (selector.nodes.length === 0) {
            selector.append(prefixSelector.clone());
            return;
          }

          const scoped = selectorParser.selector();
          scoped.append(prefixSelector.clone());
          scoped.append(selectorParser.combinator({ value: ' ' }));
          selector.nodes.forEach((node) => scoped.append(node.clone()));
          selector.replaceWith(scoped);
        });
      }).processSync(rule.selector);

      rule.selector = nextSelector;
    });
  },
});
scopeDesignSystemCss.postcss = true;

module.exports = scopeDesignSystemCss;
