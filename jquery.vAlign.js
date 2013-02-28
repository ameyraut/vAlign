/*global jQuery */
/**
  * This jQuery plugin to display HTMl element vercally center align.
	* Amey Raut	
	* vAlign.js 1.0
	* Date: Thu Feb 28 14:23:00 2013  
 */


(function($){ 
		  	// Extend jQuery 
			$.fn.extend({  
				vAlign: function() { 
					
					//variable to calulate height of child container
					var eleHeight; 
					
					//Iterate over the current set of matched elements 
					return this.each(function() {
											  
							 // Store the object
							 var $this = $(this); 
							 
							 // Resizer() realignt element based on the element height divided by 2			
							 var Resizer = function (){								 
								  
								 eleHeight = $this.innerHeight()/2;
								 
								 // Add CSS properties to element 
								 $this.css({
										top : '50%',
										position:'relative',
										marginTop:'-'+eleHeight+"px"
								 });
							 }
							 
							 // Call once to set.
							 Resizer();
							 
							 // Call on window resize.				 
							 $(window).on('resize', Resizer);
					});
				}
			});
		 
		})(jQuery) 
