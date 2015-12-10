

	// Functions for twitter feeds -->
		!function(d,s,id)
		{var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
		{js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}
		(document,"script","twitter-wjs");
		
		
	// rss feed for bbc news -->	
	  $(document).ready(function() 
      {
        $("#guardiantwitter").hide(); 				//hides the guardian twitter feed initially
		$("#Search").hide(); 						//hides the search div
		$("#helpbutton").click(function(){		 	//if the help button is clicked shows the search div and hides the searchresult paragraph 
			$("#Search").show();					//if it is open and shows the information paragraph with help info
			$("#searchresult").hide();
			$("#information").show();
		});
		
		$("#searchbar").keypress(function(event) {	// on clicking enter in the search bar shows the search div, hides information paragraph 
			if(event.keyCode == 13 ){				//shows the search result value in search div and resets the search bar value and places the mouse focus back for a new search
			searchResults($("#searchbar").val());   // 13 is the 'Enter' or 'Return' key
		    $("#Search").show();
		    $("#information").hide();
			$("#searchresult").show();
			$("#searchbar").focus();
			$("#searchbar").val("");
			}			
		});

        $('#searchbutton').click(function() { 		//when the search button is clicked does the same as the pressing enter shown above
          searchResults($("#searchbar").val());
		    $("#Search").show();
			$("#information").hide();
			$("#searchresult").show();
			$("#searchbar").focus();
			$("#searchbar").val("");
        });
		
		$('#resetsearchbutton').click(function() {	//hides the search div and resets the search bar value and runs the getrss 
			getrss();								//function which gets the rss feed relating to current open tabs
			$("#Search").hide();
			$("#searchbar").val("");
        });
		
		
		getrss();									//once the document is ready gets the rss feed relating to the tabs and nav items currently open
    });
	
	 $(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function(e) 		// adds the getrss function to all items which is the navs and tabs with data-toggle="tab" 
		{
			getrss(); 								
        });
		
		$(document).on( 'shown.bs.tab', 'a[href = "BBCnews"]', function(e)		//when the bbc news nav item is clicked shows the bbc twitter and hides the guardian twitter
		{
			$("#bbctwitter").show();
			$("#guardiantwitter").hide();
        });
		
		$(document).on( 'shown.bs.tab', 'a[href = "GuardianNews"]', function(e)	//when the guardian news nav item is clicked shows the guardian twitter and hides the bbc twitter
		{
			$("#bbctwitter").hide();
			$("#guardiantwitter").show();
        });
		

		
		
		
     
	   
	   
	   

	   
