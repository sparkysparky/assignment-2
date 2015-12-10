

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
		$("#helpbutton").click(function(){
			$("#helper").toggle();
		});
		ajax(0, parse_rss_bbc);//once the document is ready gets the home bbc feed 
    });
	
	 $(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function(e)
		{
			getrss(); // adds the getrss function to all items with data-toggle="tab" 
        });
		
		function getrss()// checks the current open tabs and uses the information to select the correct rss feed to show
		{
			var newssource = 	$('#news-source').find("li.active").find("a").attr('href'); //gets the href of current active news source nav
			var newsscategory = $('#news-subsource').find("li.active").find("a").attr('href'); // gets the href of the current active new category tab tab
			switch (newssource){ //takes the current active nav bbc or guardian 
				case "BBCnews" :
					switch (newsscategory){//selects which rss feed to run based on the  which news 
						case "GeneralNews":						
						ajax(0, parse_rss_bbc);
						break;
						case "World":
						ajax(1, parse_rss_bbc);
						break;
						case "Politics":
						ajax(2, parse_rss_bbc);
						break;
						case "Technology":
						ajax(3, parse_rss_bbc);
						break;
						case "Science":
						ajax(4, parse_rss_bbc);
						break;
						case "Entertainment":
						ajax(5, parse_rss_bbc);
						break;
						case "MostPopular":
						ajax(6, parse_rss_bbc);
						break;
					}						
					break;
				case "GuardianNews":
				newsitem = 1;
					switch (newsscategory){
						case "GeneralNews":			
						ajax(7, parse_rss_guardian);
						break;
						case "World":
						ajax(8, parse_rss_guardian);
						break;
						case "Politics":
						ajax(9, parse_rss_guardian);
						break;
						case "Technology":
						ajax(10, parse_rss_guardian);
						break;
						case "Science":
						ajax(11, parse_rss_guardian);
						break;
						case "Entertainment":
						ajax(12, parse_rss_guardian);
						break;
						case "MostPopular":
						ajax(13, parse_rss_guardian);
						break;
					}
					break;
			}
			
		}
		

		function ajax(newsitem, parser){
			$.ajax({
			type: "GET",
			url: "scripts/rss_picker.php",
			data: {rssfeed : newsitem},
			dataType: "xml",
			cache: false,
			success: parser
        });	
		}
		
		
      function parse_rss_bbc(rss_feed)
      {
		$("#bbctwitter").show();
		$("#guardiantwitter").hide();
      	console.log(rss_feed);
		$('#news-content').empty();
		$(rss_feed).find("item").each(function()
		{	
			$('#news-content').append('<div class="col-md-12">' 
			+ '<div class = "news-text"><p class = "title_large">' + $(this).find('title').text() + '</p>'
			+ '<p>' + $(this).find('description').text() + '<br>' + $(this).find('pubDate').text() + ' </p>'
			+ '<p>' + '<a href="'+  $(this).find('guid').text() + '">' + $(this).find('guid').text() +' </p>'
			+ '</div></div>'
			); 		
		});
	   }
	   
	  function parse_rss_guardian(rss_feed)
      {
		$("#bbctwitter").hide();
		$("#guardiantwitter").show();
      	console.log(rss_feed);
		$('#news-content').empty();
		$(rss_feed).find("item").each(function()
		{	
			$('#news-content').append('<div class="col-md-12">' 
			+ '<div class = "news-text"><p class = "title_large">' + $(this).find('title').text() + '</p>'
			+ $(this).find('description').first().text() + '</p><p>' + $(this).find('pubDate').text() 
			+ '</p></div></div>'
			);
		});
	   }
	   

	   
	   

	   
