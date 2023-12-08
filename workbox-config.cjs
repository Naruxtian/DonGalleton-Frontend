module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,js,css,json,html,webmanifest,svg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};