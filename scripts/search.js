		
		function searchResults(query)
		{              // This function uses Regular Expressions - excellent for pattern matching
			var temp = "\\b" + query + "\\b";         // \\b notation means a match is only made on a full word
			var regex_query = new RegExp(temp,"gi");  // construct regular expression object
			var currentitem;
			var num_matching_articles = 0;
			 $("#news-content").empty();
			 
			 
			$(activeRssFeed).find("item").each(function() // takes the active rss feed which is set each time a parse rss call is made
			{	
				currentitem = $(this).text();	//sets the current rss string to current item			 		
				if ( currentitem.search(regex_query) > 0 ){ // if the current item has any matching values to the search string increments the matching articles
					num_matching_articles++
					$('#news-content').append('<div class="col-md-12">' 
					+ '<div class = "news-text"><p class = "title_large">' + $(this).find('title').text() + '</p>'
					+ $(this).find('description').first().text() + '</p><p>' + $(this).find('pubDate').text() 
					+ '</p></div></div>'
					); // if the search matchs anything in the rss feed outputs it using the append function
				}  
			});
			$("#searchresult").empty(); // clears the search result paragraph
			$("#searchresult").append("<strong> Search results for ' " + query + " '. Found " + num_matching_articles + " articles which contain this value</strong>");	
										// takes the empty search result paragraph and adds
										//in the number of articles matched
	   }

