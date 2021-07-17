module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      // uglify: {
      //   options: {
      //     banner: '/* this should work */',
      //     compress: false,
      //     mangle: false,
      //     beautify: true
      //   },
      //   files: {
      //       expand: true,     // Enable dynamic expansion.
      //       cwd: 'src/',      // Src matches are relative to this path.
      //       src: ['**/index.js'],
      //       dest: 'dist/',   // Destination path prefix.
      //       ext: '.js',   // Dest filepaths will have this extension.
      //       extDot: 'first'   // Extensions in filenames begin after the first dot
      //   },
      // },
      add_comment: {
        options: {
          comments: [
            'tslint:disable',
            'eslint-disable'
          ],
          carriageReturn: '\n',
          prepend: true,
          syntaxes: {
            '.js': ['/*', '*/']
          }
        },
        files: {
          expand: true,
          cwd: 'src/',
          src: ['**/index.js'],
          dest: 'dist'
        }
      }
    })
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-add-comment')
    grunt.registerTask('default', ['add_comment']);
}