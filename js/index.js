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
                removeClass(content_ul_li[j], "li-color");

            }
            content_img[this.index].style.display = "block";
            addClass(this, "li-color");
        }, false);
    }

    // alert(getDefaultStyle(content_ul_li[0], "height"));

    //原生js访问外部css文件
    function getDefaultStyle(obj, attribute) {
        return obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj, false)[attribute];
    }


    function hasClass(elem, cls) {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false   
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
    }
    // 原生js给元素添加类
    function addClass(elem, cls) {
        if (!hasClass(elem, cls)) {
            elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
        }
    }

    // 原生js删除元素上的类
    function removeClass(elem, cls) {
        if (hasClass(elem, cls)) {
            var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
            while (newClass.indexOf(' ' + cls + ' ') >= 0) { newClass = newClass.replace(' ' + cls + ' ', ' '); }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
    }

};