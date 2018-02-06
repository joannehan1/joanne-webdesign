function SpotLight(element) {
        this.element = element;
        this.x = element.width() / 2;
        this.y = element.height() / 2;
        this.show = function() {
          element.hide();
          element.removeClass("hide");
          return element.fadeIn('fast');
        };
        this.hide = function(callback) {
          element.fadeOut('fast', function() {
            if (callback) {
              return callback();
            }
          });
          return element.addClass("hide");
        };
        this.move = function(opts) {
          var endX, endY, obj;
          obj = $.extend({}, {
            start_x: this.x,
            start_y: this.y,
            x: this.x,
            y: this.y,
            aperture: "40%",
            duration: 1000,
            done: function() {}
          }, opts);
          endX = obj.x;
          endY = obj.y;
          obj.x = obj.start_x;
          obj.y = obj.start_y;
          return jQuery(obj).animate({
            x: endX,
            y: endY
          }, {
            duration: obj.duration,
            step: function() {
              var style, _i, _len, _ref;
              _ref = ["-moz-radial-gradient(" + this.x + "px " + this.y + "px, ellipse cover,  rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) " + this.aperture + ", rgba(0,0,0,0.4) 100%)", "-webkit-gradient(radial, " + this.x + "px " + this.y + "px, 0px, " + this.x + "px " + this.y + "px, 100%, color-stop(0%,rgba(0,0,0,0)), color-stop(" + this.aperture + ",rgba(0,0,0,0.4)), color-stop(100%,rgba(0,0,0,0.4)))", "-webkit-radial-gradient(" + this.x + "px " + this.y + "px, ellipse cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) " + this.aperture + ",rgba(0,0,0,0.4) 100%)", "-o-radial-gradient(" + this.x + "px " + this.y + "px, ellipse cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) " + this.aperture + ",rgba(0,0,0,0.4) 100%)", "-ms-radial-gradient(" + this.x + "px " + this.y + "px, ellipse cover,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) " + this.aperture + ",rgba(0,0,0,0.4) 100%)", "radial-gradient(ellipse at " + this.x + "px " + this.y + "px,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.4) " + this.aperture + ",rgba(0,0,0,0.4) 100%)"];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                style = _ref[_i];
                element.css({
                  "background": style
                });
              }
              return true;
            },
            done: obj.done
          });
        };
        this;

      }
var spotLight = new SpotLight($("#spotLight"))
spotLight.show();
spotLight.move({ x: 750, y: 500 });