

	// Functions for twitter feeds -->
		!function(d,s,id)
		{var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))
		{js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}
		(document,"script","twitter-wjs");

		
	  $(document).ready(function()
      {
        $.ajax({
          type: "GET",
          url: "rss_proxy_bbc.php",
          dataType: "xml",
          cache: false,
          success: parse_rss
        });
      });

      function parse_rss(rss_feed)
      {
      	console.log(rss_feed);
        $('#output').append('<select>');
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