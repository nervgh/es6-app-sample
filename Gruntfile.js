'use strict';


module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // Read configuration from package.json
        pkg: grunt.file.readJSON('package.json'),

        // https://github.com/gruntjs/grunt-contrib-clean
        clean: {
            client: ['dist/*', '!dist/*.txt']
        },

        // https://github.com/gruntjs/grunt-contrib-copy
        copy: {
            postinstall: {
                src: './node_modules/babel/browser-polyfill.js',
                dest: './dist/browser-polyfill.js'
            }
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            client: {
                files: ['src/js/**/*.js'],
                tasks: ['default'],
                options: {
                    interrupt: true,
                    spawn: false
                }
            }
        },

        // webpack
        // http://babeljs.io/docs/using-babel/#webpack
        // https://github.com/webpack/grunt-webpack
        webpack: {
            // common
            options: {
                entry: {
                    client: './src/js/client.js'
                },
                output: {
                    path: './dist/',
                    filename: '[name].js'
                },
                module: {
                    loaders: [
                        // https://github.com/babel/babel-loader
                        {test: /\.js$/, loader: 'babel'}
                    ]
                }
            },
            build: {
                devtool: 'source-map',
                debug: true
            }
        }

    });

    grunt.registerTask('default', ['clean', 'copy:postinstall', 'webpack:build']);
};
