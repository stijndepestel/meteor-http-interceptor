var URL = Npm.require('url'),
  _interceptors = {},
  _originalCallFunction = {},
  log = loglevel.createPackageLogger('http-interceptor', defaultLevel = 'info');

_init();

HttpInterceptor = HttpInterceptor || {};

_.extend(HttpInterceptor, {
  registerInterceptor: function (originalHost, newHost) {
    log.debug('Intercepting all calls to', originalHost, 'and redirecting to', newHost);
    _interceptors[ originalHost ] = newHost;
  },
  restore: function () {
    Package.http.HTTP.call = _originalCallFunction;
  }
});

function _init() {
  _originalCallFunction = Package.http.HTTP.call;
  Package.http.HTTP.call =
    function (method, url, options, callback) {
      if ( !callback && typeof options === "function" ) {
        callback = options;
        options = null;
      }
      options = options || {};
      log.debug('HTTP.call', method,
        url, JSON.stringify(options));
      var oldUrl = url;
      // apply any interceptors that have been registered for this call
      _.each(_interceptors, function (newHost, originalHost) {
        url =
          url.replace(originalHost, newHost);
      });
      log.debug('Rerouting', oldUrl, '->', url);
      // do the HTTP call and get the response
      return _originalCallFunction.call(this, method, url,
        options, callback);
    };
}
