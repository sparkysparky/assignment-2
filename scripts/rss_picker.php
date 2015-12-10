<?php
	header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
	header("Cache-Control: max-age=0");
	header("Content-Type: text/xml");
?>
<?php
	function get_url_contents($url){
	  $crl = curl_init();
	  $timeout = 5;
	  curl_setopt ($crl, CURLOPT_URL,$url);
	  curl_setopt ($crl, CURLOPT_RETURNTRANSFER, 1);
	  curl_setopt ($crl, CURLOPT_CONNECTTIMEOUT, $timeout);
	  $ret = curl_exec($crl);
	  curl_close($crl);
	  return $ret;
}

$urlpicker = array('http://feeds.bbci.co.uk/news/rss.xml',
					'http://feeds.bbci.co.uk/news/world/rss.xml',
					'http://feeds.bbci.co.uk/news/politics/rss.xml',
					'http://feeds.bbci.co.uk/news/technology/rss.xml',
					'http://feeds.bbci.co.uk/news/science_and_environment/rss.xml',
					'http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml',
					'http://feeds.bbci.co.uk/news/uk/rss.xml',
					'http://www.theguardian.com/tone/news/rss',
					'http://www.theguardian.com/world/rss',
					'http://www.theguardian.com/politics/rss',
					'http://www.theguardian.com/uk/technology/rss',
					'http://www.theguardian.com/uk/environment/rss',
					'http://www.theguardian.com/uk/culture/rss',
					'http://www.theguardian.com/uk/rss',				
				   ); // array of rss feeds
				   
$urlvalue = $_GET["rssfeed"]; //the rssfeed is sent with the ajax get request and used to select the rss feed
$url = $urlpicker[$urlvalue]; //used to select the correct rss feed 
$str = file_get_contents($url);
echo $str;
?>