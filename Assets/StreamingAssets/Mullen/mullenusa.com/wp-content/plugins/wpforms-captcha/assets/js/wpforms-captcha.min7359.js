var WPFormsCaptcha=window.WPFormsCaptcha||function(a,t,m){"use strict";var o={init:function(){m(a).ready(o.ready)},ready:function(){m(".wpforms-captcha-equation").each(function(){var a=m(this).parent(),t=wpforms_captcha.cal[Math.floor(Math.random()*wpforms_captcha.cal.length)],n=o.randomNumber(wpforms_captcha.min,wpforms_captcha.max),r=o.randomNumber(wpforms_captcha.min,wpforms_captcha.max);a.find("span.n1").text(n),a.find("input.n1").val(n),a.find("span.n2").text(r),a.find("input.n2").val(r),a.find("span.cal").text(t),a.find("input.cal").val(t),a.find("input.a").attr({"data-cal":t,"data-n1":n,"data-n2":r})}),m(a).on("OptinMonsterAfterInject",function(){o.ready()}),o.loadValidation()},loadValidation:function(){void 0!==m.fn.validate&&m.validator.addMethod("wpf-captcha",function(a,t,n){var r,o,i=m(t);if("math"===n){var c=Number(i.attr("data-n1")),e=Number(i.attr("data-n2")),d=i.attr("data-cal");switch(r=Number(a),o=!1,d){case"-":o=c-e;break;case"+":o=c+e;break;case"*":o=c*e}}else r=m.trim(a.toString().toLowerCase()),o=m.trim(i.attr("data-a").toString().toLowerCase());return this.optional(t)||r===o},m.validator.format(wpforms_captcha.errorMsg))},randomNumber:function(a,t){return Math.floor(Math.random()*(Number(t)-Number(a)+1))+Number(a)}};return o}(document,window,jQuery);WPFormsCaptcha.init();