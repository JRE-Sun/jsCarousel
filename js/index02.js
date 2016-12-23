window.onload = function() {
    var scroll_nav_img = document.querySelectorAll(".scroll-nav-img");
    var content_img = document.querySelectorAll(".content-img");
    var arrSpan = document.querySelectorAll(".scroll-div span");
    var mask = document.querySelector(".mask");
    // alert(content_img.length);

    for (var x = 0; x < scroll_nav_img.length; x++) {
        scroll_nav_img[x].index = x;
        scroll_nav_img[x].addEventListener("mouseover", function() {
            for (var r = 0; r < scroll_nav_img.length; r++) {
                removeClass(scroll_nav_img[r], "scroll-nav-img-active");
                removeClass(content_img[r], "content-img-active");
                removeClass(arrSpan[r], "span-active");
                removeClass(arrSpan[r], "span-active");

                // removeClass(arrP[p], "p-active");
            }
            addClass(scroll_nav_img[this.index], "scroll-nav-img-active");
            addClass(content_img[this.index], "content-img-active");
            addClass(arrSpan[this.index], "span-active");
            addClass(mask, "mask-change");

            // addClass(arrP[this.index], "p-active");
            // p = n = this.index;
        }, false);
    }
    // for (var x = 0; x < scroll_nav_img.length; x++) {
    //     scroll_nav_img[x].addEventListener("mouseout", function() {

    //         removeClass(mask, "mask-change");

    //         // addClass(arrP[this.index], "p-active");
    //         // p = n = this.index;
    //     }, false);
    // }



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