	  var activeRssFeed;//the active rss feed is used for the search function
	  
	  function parse_rss(rss_feed)
      {
			activeRssFeed = rss_feed; 	// sets the currently active rss feed which is used by search to look through the articles for matches then display the results
			$('#news-content').empty(); // clears the news-content div to make way for the new content
			$(rss_feed).find("item").each(function() // gets each item from the rss feed and applies the append below
			{	
				$('#news-content').append(
				  '<div class="col-md-12"> <div class = "news-text">' // creates two divs in the news-conent div
				+ '<p class = "title_large">' + $(this).find('title').text() + '</p>'  //adds a larger title 
				+ '<p>' + $(this).find('description').first().text() + '<br>' + $(this).find('pubDate').text() + ' </p>' //adds the first description item found, sometimes multiple description tags were included in the rss feed
				+ '<p>' + '<a href="'+  $(this).find('guid').text() + '">' + $(this).find('guid').text() +' </p>' //adds the link to the article as a clickable link
				+ '</div></div>' // closes the two divs from above
				); 		
			});
		   }