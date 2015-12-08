

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
<<<<<<< HEAD
<<<<<<< HEAD
        $('#news-content').append('<select>');
        $(rss_feed).find("item").each(function()
        {
          $('select').append('<option value="' + 
          $(this).find('title').text() + '">' + 
          $(this).find('title').text() + '</option>');
        });
        line_record(0,rss_feed);
        $("select").on("change", function(evt) 
        {
          line_record( $("select option:selected").index(),rss_feed)
        });   
      } 

     function line_record(sel_index,rss_feed) 
     {
       var local_index = sel_index;
       var image_url;                                               
       var item_title;
       var item_description;
       var item_pubDate;
       image_url = $(rss_feed).find("item").eq(local_index).find("thumbnail").last().attr("url");
       item_title = $(rss_feed).find("item").eq(local_index).find("title").text();                               
       item_description = $(rss_feed).find("item").eq(local_index).find("description").text();
       item_pubDate = $(rss_feed).find("item").eq(local_index).find("pubDate").text();
       $("#image_div").empty();
       $("#text_div").empty();
       $("#image_div").append("<img src='" + image_url + "'>");
       $("#text_div").append("<span class='title_large'>" + item_title + "</span>");
       $("#text_div").append("<p>" + item_description + "</p>");
       $("#text_div").append("<p>" + item_pubDate + "</p>");
     }  
=======
=======
>>>>>>> parent of d159955... Revert "finished for tonight"
		
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
	   
	   
	   
		
   
>>>>>>> parent of d159955... Revert "finished for tonight"
