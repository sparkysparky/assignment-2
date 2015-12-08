

	// Functions for twitter feeds -->
		!function(d,s,id)
		{var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
		{js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}
		(document,"script","twitter-wjs");
		
	// rss feed for bbc news -->	
	  $(document).ready(function() 
      {
        $("#guardiantwitter").hide();
        $.ajax({
          type: "GET",
          url: "scripts/rss_picker.php",
		  data:  {item : 0},
          dataType: "xml",
          cache: false,
          success: parse_rss_bbc
        });
    });
	
	//function ajax

	$(document).on( 'shown.bs.tab', 'a[href="News-content1"]', function(e)
		{
			$("#bbctwitter").show();
			$("#guardiantwitter").hide();
			var newsitem = 0;
			$.ajax({
			type: "GET",
			url: "scripts/rss_picker.php",
			data: {item : newsitem},
			dataType: "xml",
			cache: false,
			success: parse_rss_bbc
        });			
        });

	$(document).on( 'shown.bs.tab', 'a[href="News-content2"]', function(e)
		{
			$("#bbctwitter").hide();
			$("#guardiantwitter").show();
			var newsitem = 6;
			$.ajax({
			type: "GET",
			url: "scripts/rss_picker.php",
			data: {item : newsitem},
			dataType: "xml",
			cache: false,
			success: parse_rss_guardian
			
        });			
        });

	
      function parse_rss_bbc(rss_feed)
      {
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
      	console.log(rss_feed);
		$('#news-content').empty();
		$(rss_feed).find("item").each(function()
		{	
			$('#news-content').append('<div class="col-md-12">' 
			+ '<div class = "news-text"><p class = "title_large">' + $(this).find('title').text() + '</p>'
			+ $(this).find('description').text() + '<br>' + $(this).find('pubDate').text() 
			+ '</div></div>'
			); 		
		});
	   }
