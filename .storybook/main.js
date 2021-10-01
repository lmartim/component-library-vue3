module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config) {
    config.css = {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import './tokens/build/_variables.scss';
            @import './src/assets/styles/styles.scss';
          `
        }
      }
    }
    
    return config
  }
}