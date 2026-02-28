const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // Enable YAML data files
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
  // Pass static assets straight to _site/
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Don't process the old HTML backup folder
  eleventyConfig.ignores.add("_old/**");

  return {
    dir: {
      output:   "_site",
      includes: "_includes",
      data:     "_data"
    },
    templateFormats: ["njk"]
  };
};
