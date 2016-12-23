window.onload = function() {
    var next = document.querySelector(".next");
    var pre = document.querySelector(".pre");
    var content = document.querySelector("#content");
    var arrImg = document.querySelectorAll("#content img");
    var arrLi = document.querySelectorAll(".mask ul li");
    var arrP = document.querySelectorAll(".mask-p");
    // alert(arrLi.length);
    (function() {
        var content_height = getDefaultStyle(content, "height").substring(0, getDefaultStyle(content, "height").indexOf("p"));
        var next_height = getDefaultStyle(next, "height").substring(0, getDefaultStyle(next, "height").indexOf("p"));
        next.style.top = (content_height - next_height) / 2 + "px";
        pre.style.top = next.style.top;
    })();

    content.addEventListener("mouseover", function() {
        next.style.width = "37px";
        pre.style.width = "37px";
    }, false);
    content.addEventListener("mouseout", function() {
        next.style.width = "0px";
        pre.style.width = "0px";
    }, false);

    var n = 0;
    var p = 0;

    for (var x = 0; x < arrLi.length; x++) {
        arrLi[x].index = x;
        arrLi[x].addEventListener("mouseover", function() {
            for (var r = 0; r < arrLi.length; r++) {
                removeClass(arrImg[p], "img-active");
                removeClass(arrLi[p], "li-active");
                removeClass(arrP[p], "p-active");
            }
            addClass(arrImg[this.index], "img-active");
            addClass(arrLi[this.index], "li-active");
            addClass(arrP[this.index], "p-active");
            p = n = this.index;
        }, false);
    }

    next.addEventListener("click", function() {
        if ((n++) < arrImg.length - 1) {
            // alert(n);
            removeClass(arrImg[p], "img-active");
            addClass(arrImg[n], "img-active");

            removeClass(arrLi[p], "li-active");
            addClass(arrLi[n], "li-active");

            removeClass(arrP[p], "p-active");
            addClass(arrP[n], "p-active");

            p = n;
        } else {
            // alert();
            n = 0;
            p = 2;
            removeClass(arrImg[p], "img-active");
            addClass(arrImg[n], "img-active");

            removeClass(arrLi[p], "li-active");
            addClass(arrLi[n], "li-active");

            removeClass(arrP[p], "p-active");
            addClass(arrP[n], "p-active");
            p = n;
        }

    }, false);
    pre.addEventListener("click", function() {
        if ((n--) > 0) {
            // alert(n);
            removeClass(arrImg[p], "img-active");
            addClass(arrImg[n], "img-active");

            removeClass(arrLi[p], "li-active");
            addClass(arrLi[n], "li-active");

            removeClass(arrP[p], "p-active");
            addClass(arrP[n], "p-active");
            p = n;
        } else {
            // alert();
            n = arrImg.length - 1;
            p = 0;
            removeClass(arrImg[p], "img-active");
            addClass(arrImg[n], "img-active");

            removeClass(arrLi[p], "li-active");
            addClass(arrLi[n], "li-active");

            removeClass(arrP[p], "p-active");
            addClass(arrP[n], "p-active");
            p = n;
        }
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