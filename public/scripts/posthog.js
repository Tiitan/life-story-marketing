!(function (o, i) {
  if (i.__SV) return;
  (window.posthog = i)._i = [];
  i.init = function (e, t, s) {
    var p = o.createElement('script');
    p.type = 'text/javascript';
    p.crossOrigin = 'anonymous';
    p.async = true;
    p.src = t.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js';
    var c = o.getElementsByTagName('script')[0];
    c.parentNode.insertBefore(p, c);
    var r = s ? (i[s] = []) : i;
    var methods = 'capture identify alias people.set people.set_once register register_once unregister opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing reset isFeatureEnabled onFeatureFlags'.split(' ');
    methods.forEach(function (method) {
      var target = r;
      var key = method;
      if (method.indexOf('.') > -1) {
        var parts = method.split('.');
        target = r[parts[0]] = r[parts[0]] || [];
        key = parts[1];
      }
      target[key] = function () {
        target.push([key].concat(Array.prototype.slice.call(arguments, 0)));
      };
    });
    i._i.push([e, t, s]);
  };
  i.__SV = 1;
})(document, window.posthog || []);

window.posthog.init('phc_hTwlJvwNssfcpIWYFMgWqzoGgM4FEB3CTn30psywFmH', {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2025-05-24',
  person_profiles: 'identified_only',
});
