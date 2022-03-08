const gateway = require('fast-gateway');
const hooks = require('fast-gateway/lib/default-hooks');

const httpOnResponse = hooks['http'].onResponse;

const server = gateway({
  routes: [
    {
      prefix: '/todo',
      proxyType: 'http',
      target: 'http://127.0.0.1:3000',
      //   hooks: {
      //     async onRequest(req, res) {
      //       console.log('Forward request to ' + req.path);
      //     },
      //     onResponse(req, res, stream) {
      //       console.log('Receive response from ' + req.path);

      //       httpOnResponse(req, res, stream);
      //     },
      //   },
    },
  ],
});

server.start(8000);
