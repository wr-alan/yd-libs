module.exports = {
  stories: [
    "../packages/components/**/*.stories.mdx",
    "../packages/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-swc",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    disableTelemetry: true,
    builder: {
      name: "webpack5",
      options: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
};
