(function () {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('utm_source')) {
    let utmSource = 'Direct';
    if (document.referrer) {
      try {
        utmSource = new URL(document.referrer).hostname;
      } catch {
      }
    } else if (params.has('ref')) {
      utmSource = params.get('ref') || utmSource;
    }
    params.set('utm_source', encodeURIComponent(utmSource));
    const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }

  const propagatedParams = ['gclid', 'ttclid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const values = {};
  propagatedParams.forEach((key) => {
    const value = params.get(key);
    if (value) values[key] = value;
  });

  if (!Object.keys(values).length) {
    return;
  }

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    try {
      const url = new URL(href, window.location.origin);
      if (url.hostname !== 'app.life-story.ai') return;
      Object.entries(values).forEach(([key, value]) => url.searchParams.set(key, value));
      link.setAttribute('href', url.origin === window.location.origin ? `${url.pathname}${url.search}${url.hash}` : url.toString());
    } catch {
    }
  });
})();
