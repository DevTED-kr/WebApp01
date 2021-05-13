/**
 * Particleground demo
 * @author DevTED-kr
 *
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
	console.log("addEventlistener");
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



//(function($){
//	
//	document.addEventListener('DOMContentLoaded',function(){
//		console.log("demo2.js");	
//	});
//
//	console.log("demo.js");	
//	 
//	$('.btn').click(function(){
//		// javascript
//		console.log(this);
//		 
//		// jQuery
//		console.log($(this));
//	});
//	
//
//}(jQuery));

