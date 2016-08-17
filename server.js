var Hapi = require('hapi');
var path = require('path');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'dist')
      }
    }
  }
});

server.connection({
  host: 'localhost',
  address: '0.0.0.0',
  port: 3000
});

server.register(require('inert'), (err) => {
  if (err) throw err;
  /* Routes are handled from most-specific to least specific */
  
  /* Serving fonts */
  server.route({
    method: 'GET',
    path:'/fonts/{fontFile}',
    handler: function (request, reply) {
      var file = `./fonts/${encodeURIComponent(request.params.fontFile)}`;
      console.log(file);
      reply.file(file);
    }
  });
  
  /* Serving css files */
  server.route({
    method: 'GET',
    path:'/css/{cssFile}.css',
    handler: function (request, reply) {
      var file = `./css/${encodeURIComponent(request.params.cssFile)}.css`;
      console.log(file);
      reply.file(file);
    }
  });

  /* Serving js source maps */
  server.route({
    method: 'GET',
    path:'/js/{jsFile}.js.map',
    handler: function (request, reply) {
      var file = `./js/${encodeURIComponent(request.params.jsFile)}.js.map`;
      console.log(file);
      reply.file(file);
    }
  });

  /* Serving static js files */
  server.route({
    method: 'GET',
    path:'/js/{jsFile}.js',
    handler: function (request, reply) {
      var file = `./js/${encodeURIComponent(request.params.jsFile)}.js`;
      console.log(file);
      reply.file(file);
    }
  });

  /* Catch-all route that will return our React SPA */
  server.route({
    method: 'GET',
    path:'/{path*}',
    handler: function (request, reply) {
      var file = './index.html';
      console.log(`${request.params.path || '/'}\n\t>> ${file}\n`);
      reply.file(file);
    }
  });

  /* Start the server */
  server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
  });
});