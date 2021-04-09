/**
 * Particleground demo
 * @author DevTED-kr
 *
 */


(function($){
	

	console.log("demo.js");	
	
	$('.btn').click(function(){
		// javascript
		console.log(this);
		 
		// jQuery
		console.log($(this));
	});
	
	
	/**
	 * Import below open source. 
	 * @auth: DevTED-kr
	 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	 * @license: MIT license
	 */
 	var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
	
}(jQuery));

