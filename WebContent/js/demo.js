/**
 * Particleground demo
 * @author DevTED-kr
 *
 */


(function($){
	
	document.addEventListener('DOMContentLoaded',function(){
		console.log("demo2.js");	
	});

	console.log("demo.js");	
	 
	$('.btn').click(function(){
		// javascript
		console.log(this);
		 
		// jQuery
		console.log($(this));
	});
	

}(jQuery));

