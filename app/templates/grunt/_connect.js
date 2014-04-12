// The actual grunt server settings
module.exports =  {
    options: {
        port: grunt.option('port') || 1337,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
    },
    livereload: {
        options: {
            open: true,
            base: [
                    '.tmp',
                    '<%= config.app %>'
                ]
            }
        },
    dist: {
        options: {
            open: true,
            base: '<%= config.dist %>',
            livereload: false
        }
    }
};