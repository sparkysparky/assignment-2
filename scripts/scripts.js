

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
		ajaxbbc(0);
    });
	
	 $(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function(e)
		{
			var newssource = 	$('#news-source').find("li.active").find("a").attr('href');
			var newssubsource = $('#news-subsource').find("li.active").find("a").attr('href');
			switch (newssource){
				case "Newscontent1" :
					switch (newssubsource){
						case "newssubcontent1":						
						ajaxbbc(0);
						break;
						case "newssubcontent2":
						ajaxbbc(1);
						break;
						case "newssubcontent3":
						ajaxbbc(2);
						break;
						case "newssubcontent4":
						ajaxbbc(3);
						break;
						case "newssubcontent5":
						ajaxbbc(4);
						break;
						case "newssubcontent6":
						ajaxbbc(5);
						break;
						case "newssubcontent7":
						ajaxbbc(6);
						break;
					}						
					break;
				case "Newscontent2":
				newsitem = 1;
					switch (newssubsource){
						case "newssubcontent1":			
						ajaxguardian(7);
						break;
						case "newssubcontent2":
						ajaxguardian(8);
						break;
						case "newssubcontent3":
						ajaxguardian(9);
						break;
						case "newssubcontent4":
						ajaxguardian(10);
						break;
						case "newssubcontent5":
						ajaxguardian(11);
						break;
						case "newssubcontent6":
						ajaxguardian(12);
						break;
						case "newssubcontent7":
						ajaxguardian(13);
						break;
					}
					break;
			}
        });
		
		function ajaxbbc(newsitem1){
			$("#bbctwitter").show();
			$("#guardiantwitter").hide();
			$.ajax({
			type: "GET",
			url: "scripts/rss_picker.php",
			data: {item : newsitem1},
			dataType: "xml",
			cache: false,
			success: parse_rss_bbc	
        });	
		}
		
		function ajaxguardian(newsitem1){
			$("#bbctwitter").hide();
			$("#guardiantwitter").show();
			$.ajax({
			type: "GET",
			url: "scripts/rss_picker.php",
			data: {item : newsitem1},
			dataType: "xml",
			cache: false,
			success: parse_rss_guardian	
        });	
		}

		
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
			+ '<p></p></div></div>'
			);
		});
	   }
	   

	   
	   

	   
