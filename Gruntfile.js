module.exports = function(grunt) {
// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				manage: false,  
				/* preserveComments: 'all', */
				banner: '/* Updated <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'javascripts/main.js'
				],
				dest: 'js/main.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					/* style: 'compressed' */
				},
				files: {
					'stylesheets/style.css' : 'stylesheets/style.scss'
				}
			}
		},

		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'stylesheets/',	
					src: ['*.css', '!*.min.css'], 
					dest: 'css/',  
					ext: '.min.css' 
				}]
			}
		}, 

		watch: {
			sass: {
				// If anything in these files changes, run the tasks
				files: ['stylesheets/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['watch']);
};