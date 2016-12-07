Package.describe({
  name: "stijndepestel:http-interceptor",
  summary: "Intercepts HTTP calls and allows fake implementations to take over domains. Used for testing.",
  version: "0.5.0",
  git: "https://github.com/stijndepestel/meteor-http-interceptor.git",
  debugOnly: true
});

Npm.depends({
  'body-parser': '1.10.1'
});

Package.on_use(function (api) {
  api.use([
    'http@1.2.10',
    'templating@1.1.1',
    'mongo@1.1.0',
    'underscore@1.0.3',
    'momentjs:moment@2.10.3',
    'practicalmeteor:loglevel@1.2.0_1'
  ], ['server', 'client']);

  api.use(['meteorhacks:picker@1.0.3'], ['server']);


  api.add_files('client.css', 'client');
  api.add_files('client.html', 'client');

  api.add_files('collection.js', ['server', 'client']);
  api.add_files('server.js', 'server');
  api.add_files('client.js', 'client');

  api.export('HttpInterceptor', ['server', 'client']);
});