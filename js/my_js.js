




// Search Button Toggle

	jQuery(".menu-search-button").click(function(){
		if(style_toggle == "closed"){
			
			jQuery(".menu-search-form").stop(true, true).animate({width : "179px",padding : "1px 10px",opacity : "10"}, 200, "linear", function(){
				style_toggle = "open";
			});
			
		};
		if(style_toggle == "open"){
			jQuery(".menu-search-field").stop(true, true).animate({width : "0%",padding : "1px 0px",opacity : "0"}, 200, "linear", function(){
				style_toggle = "closed";
			});
		};
		return false;
	});








































