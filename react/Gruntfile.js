"use strict";

module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		browserify:
		{
			app:
			{
				src: "src/app.jsx",
				dest: "dist/goalie-ui-react.js",
				options: { transform: ["reactify"] }
			}
		},
		uglify:
		{
			app:
			{
				files: { 'dist/goalie-ui-react.js': 'dist/goalie-ui-react.js' }
			},
			options:
			{
				compress: true,
				mangle: true,
				sourceMap: true,
				sourceMapName: "dist/goalie-ui-react.map"
			}
		}
	});

	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", ['browserify', 'uglify']);
};