var slideIndex = 1;
var autoIndex = 0;

showImg(slideIndex);
autoImg();

function moveImg(n) {
    showImg(slideIndex += n);
}

function currentImg(n) {
    showImg(slideIndex = n);
}

function showImg(n) {
    var i;
    var x = document.getElementsByClassName("sliderBox");
    var cnt = document.getElementsByClassName("samp");

    if (n > x.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    for (i = 0; i < cnt.length; i++) {
        cnt[i].className = cnt[i].className.replace(" btnActive", "");
    }

    x[slideIndex-1].style.display = "block";
    cnt[slideIndex-1].className += " btnActive";
}

function autoImg() {
    var z;
    var y = document.getElementsByClassName("sliderBox");
    var ind = document.getElementsByClassName("samp");

    for (z = 0; z < y.length; z++){
        y[z].style.display = "none";
    }

    autoIndex++;

    for (i = 0; i < ind.length; i++) {
        ind[i].className = ind[i].className.replace(" btnActive", "");
    }

    if (autoIndex > y.length) {
        autoIndex = 1;
    }

    y[autoIndex-1].style.display = "block";
    ind[autoIndex-1].className += " btnActive";

    setTimeout(autoImg, 3000);
}