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

    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" animateRight", "");
        x[i].className = x[i].className.replace(" animateLeft", "");
    }

    x[slideIndex-1].style.display = "block";
    cnt[slideIndex-1].className += " btnActive";

    console.log(slideIndex-1);
    //x[slideIndex-1].className += " animateLeft";
}

function autoImg() {
    var z;
    var y = document.getElementsByClassName("sliderBox");
    var ind = document.getElementsByClassName("samp");

    for (z = 0; z < y.length; z++){
        y[z].style.display = "none";
    }

    autoIndex++;

    for (z = 0; z < y.length; z++) {
        y[z].className = y[z].className.replace(" animateRight", "");
        y[z].className = y[z].className.replace(" animateLeft", "");
    }

    for (z = 0; z < ind.length; z++) {
        ind[z].className = ind[z].className.replace(" btnActive", "");
    }

    if (autoIndex > y.length) {
        autoIndex = 1;
    }

    y[autoIndex-1].style.display = "block";
    ind[autoIndex-1].className += " btnActive";
    y[autoIndex-1].className += " animateRight";

    setTimeout(autoImg, 2000);
}