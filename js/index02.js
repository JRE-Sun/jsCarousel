window.onload = function() {
    var scroll_nav_img = document.querySelectorAll(".scroll-nav-img");
    var content_img = document.querySelectorAll(".content-img");
    var arrSpan = document.querySelectorAll(".scroll-div span");
    var mask = document.querySelector(".mask");
    var pre = document.querySelector(".pre");
    var next = document.querySelector(".next");
    var scroll_nav_ul = document.querySelector(".scroll-nav-ul");
    // alert(content_img.length);

    var a = [];

    for (var x = 0; x < scroll_nav_img.length; x++) {
        scroll_nav_img[x].index = x;
        a[x] = scroll_nav_img[x].addEventListener("mouseover", b, false);
    }

    var timer = setInterval(b, 3000);
    var p = 0;

    function b() {
        for (var r = 0; r < scroll_nav_img.length; r++) {
            removeClass(scroll_nav_img[r], "scroll-nav-img-active");
            removeClass(content_img[r], "content-img-active");
            removeClass(arrSpan[r], "span-active");
            removeClass(arrSpan[r], "span-active");

            // removeClass(arrP[p], "p-active");
        }
        // this.getAttribute("uid");
        addClass(scroll_nav_img[p], "scroll-nav-img-active");
        addClass(content_img[p], "content-img-active");
        addClass(arrSpan[p], "span-active");
        // addClass(mask, "mask-change");

        // addClass(arrP[this.index], "p-active");
        // p = n = this.index;
        preMove();
        p++;
    }
    b();
    var scroll_nav_img_width = getDefaultStyle(scroll_nav_img[0], "width").substring(0, getDefaultStyle(scroll_nav_img[0], "width").indexOf("p"));



    pre.addEventListener("click", function() {
        preMove();
    }, false);

    function preMove() {
        var cscroll_nav_ul_left = getDefaultStyle(scroll_nav_ul, "left").substring(0, getDefaultStyle(scroll_nav_ul, "left").indexOf("p"));
        if (cscroll_nav_ul_left == -880) {
            scroll_nav_ul.style.left = "0px";
            // alert();
        } else {
            scroll_nav_ul.style.left = (cscroll_nav_ul_left - scroll_nav_img_width - 14) + "px";
        }
    }
    next.addEventListener("click", function() {
        timer = null;
        p++;
        if (c == 0) {
            c = 1;
            var cscroll_nav_ul_left = getDefaultStyle(scroll_nav_ul, "left").substring(0, getDefaultStyle(scroll_nav_ul, "left").indexOf("p"));
            if (cscroll_nav_ul_left == 0) {
                scroll_nav_ul.style.left = "-880px";
                // alert();
            } else {
                scroll_nav_ul.style.left = parseInt(cscroll_nav_ul_left - (-scroll_nav_img_width) - (-14)) + "px";
                // alert(parseInt(cscroll_nav_ul_left - (-scroll_nav_img_width) - (-14)));
            }
            c = 0;
        }
        timer = setInterval(b, 3000);
    }, false);








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

}