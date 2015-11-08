var dest = './build',
  src = './src/client',
  mui = './node_modules/material-ui/src';

module.exports = {
 markup:{
  src: src + '/www/**',
  dest: dest
 },
 browserSync: {
  server: {
   // We're serving the src folder as well
   // for sass sourcemap linking
   baseDir: [dest, src]
  },
  files: [
   dest + '/**'
  ]
 },
 browserify: {
   // Enable source maps
  debug: true,
  // A separate bundle will be generated for each
  // bundle config in the list below
  bundleConfigs: [{
   entries: src + '/app/app.jsx',
   dest: dest,
   outputName: 'app.js'
  }]
 },
 nodemon: {
  app: 'server.js'
 }
};
