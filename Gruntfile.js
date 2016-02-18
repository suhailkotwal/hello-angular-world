// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // all of our configuration will go here
    });
};