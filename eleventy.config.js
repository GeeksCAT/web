export default function (eleventyConfig) {
	// Output directory: _site

	// Copy static files
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("images");

	// Copy redirections
	eleventyConfig.addPassthroughCopy("qr");

	eleventyConfig.addPassthroughCopy("browserconfig.xml");
	eleventyConfig.addPassthroughCopy("manifest.json");
};
