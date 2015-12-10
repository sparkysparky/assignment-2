function getrss()// checks the current open tabs and uses the information to select the correct rss feed to show
		{
			var newssource = 	$('#news-source').find("li.active").find("a").attr('href'); //gets the href of current active news source nav
			var newsscategory = $('#news-subsource').find("li.active").find("a").attr('href'); // gets the href of the current active new category tab tab
			switch (newssource){ //takes the current active nav bbc or guardian 
				case "BBCnews" :
					switch (newsscategory){//selects which rss feed to run based on the  which news sourde tab and news category tabs are active 
						case "GeneralNews":						
						ajax(0);
						break;
						case "World":
						ajax(1);
						break;
						case "Politics":
						ajax(2);
						break;
						case "Technology":
						ajax(3);
						break;
						case "Science":
						ajax(4);
						break;
						case "Entertainment":
						ajax(5);
						break;
						case "MostPopular":
						ajax(6);
						break;
					}						
					break;
				case "GuardianNews":
				newsitem = 1;
					switch (newsscategory){
						case "GeneralNews":			
						ajax(7);
						break;
						case "World":
						ajax(8);
						break;
						case "Politics":
						ajax(9);
						break;
						case "Technology":
						ajax(10);
						break;
						case "Science":
						ajax(11);
						break;
						case "Entertainment":
						ajax(12);
						break;
						case "MostPopular":
						ajax(13);
						break;
					}
					break;
			}			
		}
		

		function ajax(newsitem){
			$.ajax({
			type: "GET",
			url: "scripts/rss_picker.php",
			data: {rssfeed : newsitem},
			dataType: "xml",
			cache: false,
			success: parse_rss_bbc
        });	
		}