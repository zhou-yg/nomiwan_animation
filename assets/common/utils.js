(function() {
  module.exports = {

    /*
    #option = {
     *   container,容器
     *   customStyle,自定义的黑色透明层样式
    #}
     */
    backBg: function(option) {
      var blackBg, container, customStyle, defaultStyle, finalStyle;
      container = option.container || $('body');
      customStyle = option.customStyle;
      blackBg = $('<div></div>');
      defaultStyle = {
        backgroundColor: '#000',
        opacity: 0.5,
        position: fixed,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      };
      finalStyle = $.extend(defaultStyle, customStyle);
      container.append(blackBg.css(finalStyle));
      return blackBg;
    },

    /*
     * 链接跳转的控制方法,
     *     外部链接一律新窗口
     *
     * url,要跳转的方法
     * isNew,是否新开窗口,默认true
     */
    href: function(url, isNew) {
      var isOut, origin;
      if (isNew == null) {
        isNew = true;
      }
      url = encodeURI(url);
      origin = location.origin;
      isOut = -1 !== url.indexOf(origin);
      if (isOut) {
        return window.open(url);
      } else {
        if (isNew) {
          return window.open(url);
        } else {
          return location.href = url;
        }
      }
    }
  };

}).call(this);
