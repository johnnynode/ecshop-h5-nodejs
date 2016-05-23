void function (w) {
  "use strict";

  requirejs.config({
    baseUrl: 'js/lib',
    paths: {
      "index": "../app/index",
      "zepto": 'zepto.min.js',
      "swiper": 'swiper.jquery.min.js'
    },
    shim: {
      'zepto.min': { exports: '$' },
      'swiper.jquery.min': { exports: 'Swiper' }
    }
  });
  require(['js/app/index.js']);
}(window);

//# sourceMappingURL=app-compiled.js.map