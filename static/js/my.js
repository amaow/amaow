function weixinTip(ele){
    var ua = navigator.userAgent;
    var Browser = /Safari/.test(ua) && !/Chrome/.test(ua);
    if(Browser == 0){
        ele.onclick=function(e){
            window.event? window.event.returnValue = false : e.preventDefault();
            document.getElementById('uaTip').style.display='block';
        }
    } else {
        $("#uaApp").click(function () {
            $("#uaApp").attr("style","display:none;");
            $("#ul").attr("style","display:none;");
            $("#id").attr("style","display:block;");
        });
    }
}
var btn1 = document.getElementById('uaApp');
weixinTip(btn1);
$("#refresh").click(function () {
     location.reload();
});