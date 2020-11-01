const path = require("path")

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
