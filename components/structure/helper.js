'use strict';

(function () {
  module.exports = {
    getRainbowColor: function getRainbowColor(i) {
      var colors, colorsLen;
      colors = ['red', 'orange', 'blue', 'cyan', 'purple'];
      colorsLen = colors.length;
      if (i !== void 0) {
        return colors[i % colorsLen];
      } else {
        this.i = 0;
        return function () {
          if (i >= 5) {
            i = 0;
          }
          return colors[i++ % colorsLen];
        };
      }
    }
  };
}).call(undefined);
