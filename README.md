Goalie UI
=====

A to-do list application written in JavaScript, for practice. This is the front end code.

1) /react
* Facebook's React framework is used
* Flux used for architecture
* npm used to manage external packages
* Use "grunt" command to build.
* Resulting code is browserify-ed and minified, then must be copied to the public location it's to be served from
* All relevant files are included in the 'dist' folder, even though only a single JavaScript file is generated by the build.

NOTES:

Other frameworks may additionally be used and added in this project in the future. For example, Angular2 might be added once it's stable.

As of writing, Angular2 was stil in development and proved to be unusable. The artifacts from my playing with it are included but are not at all complete (or even, anything, really).

After building the UI, you will need to manually copy the contents of the 'dist/public' folder into the appropriate folder ("public") in the node.js project. The .map file is not needed to run the app.

Authored by Boris Dzevel