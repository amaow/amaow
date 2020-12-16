// lei=1   规则
// lei=2   脚本
// lei=3   应用
// lei=4   其他
var color = 105;
function co_sj() {
    if (color == 112) {
        color = 101;
    } else {
        color++;
    }
}
var data_index = [
{ "title": "免费应用", "image": "static/images/AppStore.jpg", "rq": "暂未更新", "details": "经常更新一些免费旧版应用和绝版应用", "url": "yy.html" },

 { "title": "手机工具", "image": "static/images/gongju.jpg", "rq": "暂未更新", "details": "暂未更新", "url": "gj.html" },

 { "title": "安装教程", "image": "static/images/jiaocheng.png", "rq": "安装教程", "details": "不会登录id、安装闪退等教程点击这里查看", "url": "jc/index.html" },

 { "title": "淘宝店铺", "image": "static/images/taobao.png", "rq": "联系店主定制旧版应用", "details": "收费定制所有AppStore内上架的旧版应用，下架应用也可询问店主", "url": "tb.html" }, 

{ "title": "关注公众号", "image": "static/images/weixin.png", "rq": "获取免费应用", "details": "免费下载收费应用或旧版应用，关注公众号", "url": "gzh.html" },





]
function kap_cj(data){
    var txt1 = "";
    for (var i = 0; i < data.length; i++) {
        co_sj()
        var arr = data[i]
        txt1 = txt1 + `<div class="col-md-4" onclick="window.open('${arr.url}')">
        <div class="kap s${color}">
            <img src="./${arr.image}">
            <div class="title">
                <h4>${arr.title}</h4>
                <p class="ri">${arr.rq}</p>
            </div>
            <div class="sm">
                <p>${arr.details}</p>
            </div>
        </div>
        </div>`
    }
    return txt1;
}
$("#index").html(kap_cj(data_index));

