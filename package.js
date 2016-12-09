Package.describe({
  name: "stijndepestel:http-interceptor",
  summary: "Intercepts HTTP calls and allows fake implementations to take over domains. Used for testing.",
  version: "0.7.0",
  git: "https://github.com/stijndepestel/meteor-http-interceptor.git",
  debugOnly: true
});

Npm.depends({
  'url': '0.11.0'
});

Package.on_use(function (api) {
  api.use([
    'http@1.2.10',
    'underscore@1.0.10',
    'practicalmeteor:loglevel@1.2.0_2'
  ], ['server', 'client']);
  api.use(['meteorhacks:picker@1.0.3'], ['server']);
  api.add_files('server.js', 'server');

  api.export('HttpInterceptor', ['server', 'client']);
});