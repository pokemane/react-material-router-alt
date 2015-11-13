var dest = './build',
  src = './src/',
  mui = './node_modules/material-ui/src';

module.exports = {
 markup:{
  src: src + '/www/**',
  dest: dest
 },
 browserSync: {
  proxy: "http://localhost:3000",
  port: 4000,
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
   entries: src + '/app/app.js',
   dest: dest,
   outputName: 'app.js'
  }]
 },
 nodemon: {
  app: 'server.js'
 }
};
