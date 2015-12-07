

	// Functions for twitter feeds -->
		!function(d,s,id)
		{var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
		{js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}
		(document,"script","twitter-wjs");

	  /*
		var news_item_number = 1;
      	console.log(rss_feed);
        $('#news-content').append('<div class ="col-sm-9 offset-3 text-left" id= "description_div' + news_item_number + '"');
	  */
		
		
		
	// rss feed for bbc news -->	
	  $(document).ready(function() 
      {
        $.ajax({
          type: "GET",
          url: "scripts/rss_bbc.php",
          dataType: "xml",
          cache: false,
          success: parse_rss
        });
      });

      function parse_rss(rss_feed)
      {
      	console.log(rss_feed);
		
		$(rss_feed).find("item").each(function()
		{	
			$('#news-content').append('<div class="col-md-12"><div class="news-image"> ' +
			'<img src= "' + $(this).find("thumbnail").next().attr("url") + '"></div>' 
			+ '<div class = "news-text"><p class = "title_large">' + $(this).find('title').text() + '</p>'
			+ '<p>' + $(this).find('description').text() + '<br>' + $(this).find('pubDate').text() + ' </p>'
			+ '<p>' + '<a href="'+  $(this).find('guid').text() + '">' + $(this).find('guid').text() +' </p>'
			+ '</div></div>'
			); 
		});
	   }
	   
	   //tabs functionality
	   
	   
	   
		
   