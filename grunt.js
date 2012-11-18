module.exports = function(grunt) {

    grunt.initConfig({
        min: {
            dist: {
                src: ['client/js/lib/jquery-ui.dtpicker.js'],
                dest: 'client/js/lib/jquery-ui.dtpicker.min.js'
            }
        }, 
		watch: {
			files: ['<config:min.dist.src>'],
			tasks: 'min'
		}
    });
    
    grunt.registerTask('default', 'min');

};
