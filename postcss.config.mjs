import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scopePluginPath = resolve(process.cwd(), 'postcss.scope-design-system-css.cjs');

const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    [scopePluginPath]: {},
  },
};

export default config;
