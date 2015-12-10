	  var activeRssFeed;//the active rss feed is used for the search function
	  
	  function parse_rss_bbc(rss_feed)
      {
			activeRssFeed = rss_feed;
			$('#news-content').empty();
			$(rss_feed).find("item").each(function()
			{	
				$('#news-content').append('<div class="col-md-12">' 
				+ '<div class = "news-text"><p class = "title_large">' + $(this).find('title').text() + '</p>'
				+ '<p>' + $(this).find('description').first().text() + '<br>' + $(this).find('pubDate').text() + ' </p>'
				+ '<p>' + '<a href="'+  $(this).find('guid').text() + '">' + $(this).find('guid').text() +' </p>'
				+ '</div></div>'
				); 		
			});
		   }