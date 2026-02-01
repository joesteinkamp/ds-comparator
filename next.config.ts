import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    '@mui/material',
    '@mui/system',
    '@mui/icons-material',
    '@emotion/react',
    '@emotion/styled',
    '@primer/react',
    '@carbon/react',
    '@fluentui/react-components',
    '@atlaskit/button',
    '@atlaskit/textfield',
    '@atlaskit/tokens',
    '@atlaskit/form',
    '@atlaskit/textarea',
    '@atlaskit/radio',
    '@atlaskit/select',
    '@atlaskit/checkbox',
    '@atlaskit/tooltip',
    '@atlaskit/skeleton',
    '@atlaskit/dropdown-menu',
    '@atlaskit/section-message',
    '@atlaskit/breadcrumbs',
    '@atlaskit/tabs',
    '@atlaskit/progress-bar',
    '@shopify/polaris',
  ],

  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
};

export default nextConfig;
