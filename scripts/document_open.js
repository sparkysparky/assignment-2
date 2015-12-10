

	// Functions for twitter feeds -->
		!function(d,s,id)
		{var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
		{js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}
		(document,"script","twitter-wjs");
		
	// rss feed for bbc news -->	
	  $(document).ready(function() 
      {
        $("#guardiantwitter").hide();
		$("#helper").hide();
		$("#information").hide();
		$("#helpbutton").click(function(){
			$("#helper").show();
			$("#searchresult").hide();
			$("#information").show();
		});
		
		$("#searchbar").keypress(function(event) {
			if(event.keyCode == 13 ){
			searchResults($("#searchbar").val());      // 13 is the 'Enter' or 'Return' key
		    $("#helper").show();
		    $("#information").hide();
			$("#searchresult").show();
			$("#searchbar").focus();
			$("#searchbar").val("");
			}			
		});

        $('#searchbutton').click(function() {
          searchResults($("#searchbar").val());
		    $("#helper").show();
			$("#information").hide();
			$("#searchresult").show();
			$("#searchbar").focus();
			$("#searchbar").val("");
        });
		
		$('#resetsearchbutton').click(function() {
			getrss();
			$("#helper").hide();
			$("#searchbar").val("");
        });
		ajax(0, parse_rss_bbc);//once the document is ready gets the home bbc feed 
    });
	
	 $(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function(e)
		{
			getrss(); // adds the getrss function to all items with data-toggle="tab" 
        });
		
		$(document).on( 'shown.bs.tab', 'a[href = "BBCnews"]', function(e)
		{
			$("#bbctwitter").show();
			$("#guardiantwitter").hide();
        });
		
		$(document).on( 'shown.bs.tab', 'a[href = "GuardianNews"]', function(e)
		{
			$("#bbctwitter").hide();
			$("#guardiantwitter").show();
        });
		

		
		
		
     
	   
	   
	   

	   
