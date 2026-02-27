module.exports = function (eleventyConfig) {
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
