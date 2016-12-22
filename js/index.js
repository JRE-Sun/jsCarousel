window.onload = function() {
    var content_ul_li = document.querySelectorAll(".content-ul li");
    var content_img = document.querySelectorAll(".content-img");
    var content_ul = document.querySelector(".content-ul");

    //这个闭包函数定义完成后立即执行。为了避免变量污染 
    (function() {
        var img_height = getDefaultStyle(content_img[0], "height").substring(0, getDefaultStyle(content_img[0], "height").indexOf("p"));
        var ul_height = getDefaultStyle(content_ul, "height").substring(0, getDefaultStyle(content_ul, "height").indexOf("p"));
        content_ul.style.top = (img_height - ul_height) / 2 + "px";
        // alert(content_ul.style.top);
    })();

    window.scroll = function() {
        var img_height = getDefaultStyle(content_img[0], "height").substring(0, getDefaultStyle(content_img[0], "height").indexOf("p"));
        var ul_height = getDefaultStyle(content_ul, "height").substring(0, getDefaultStyle(content_ul, "height").indexOf("p"));
        content_ul.style.top = (img_height - ul_height) / 2 + "px";
        // alert(content_ul.style.top);
    }


    //关联图片和li
    for (var i = 0; i < content_ul_li.length; i++) {
        content_ul_li[i].index = i;
        content_ul_li[i].addEventListener("mouseover", function() {
            for (var j = 0; j < content_ul_li.length; j++) {
                content_img[j].style.display = "none";
                content_ul_li[j].style.backgroundColor = "rgb(255, 255, 255)";

            }
            content_img[this.index].style.display = "block";
            this.style.background = "#FF920B";
        }, false);
    }

    // alert(getDefaultStyle(content_ul_li[0], "height"));

    //原生js访问外部css文件
    function getDefaultStyle(obj, attribute) {
        return obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute];
    }
};