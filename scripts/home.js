var images = [
    'files/jv_NEW-site-1440x520.jpg',
    'files/sale-2022-01-1440x520.jpg', 
    'files/драгоценности-01-1440x520.jpg',
    'files/обручалка_new-03-1440x520.jpg',
    'files/часы-09-1440x520.jpg'
];
var imagesSources = [
    'Page-1.html',
    'Page-2.html'
];
var num = 0;
setInterval("next();", 7000);

function prev() {
    var slider = document.getElementById('slider');
    var sliderSource = document.getElementById('slider-source');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
    sliderSource.href = imagesSources[num];
}

function next() {
    var slider = document.getElementById('slider');
    var sliderSource = document.getElementById('slider-source');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
    sliderSource.href = imagesSources[num];
}




