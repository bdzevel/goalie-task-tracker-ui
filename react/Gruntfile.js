"use strict";

module.exports = function(grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		bower:
		{
			install:
			{
				options:
				{
					targetDir: "dist/public/lib",
					layout: 'byComponent',
					cleanTargetDir: true,
					cleanBowerDir: true
				}
			}
		},
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

	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-browserify");
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask("default", ["bower", "browserify", "uglify"]);
};