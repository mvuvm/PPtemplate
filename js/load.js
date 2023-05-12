
var progressCounter = setInterval(function () {
    if (document.images.length === 0) return false;

    var loaded = 0;
    for (var i = 0; i < document.images.length; i++) {
        if (document.images[i].complete) loaded++;
    }

    var percentage = Math.round(100 * loaded / document.images.length);
    document.querySelector('.loader').style.width = `calc( 100% - ${percentage}% )`;
    document.querySelector('.prg_txt').innerHTML = `${percentage}%`;

    if (percentage == 100) clearInterval(progressCounter);
}, 10);

window.onload = function(){
    document.querySelector('.load_page').style.transform = 'translateY(-100%)';
    document.querySelector('.load_page').style.opacity = '0';
    //console.log('도큐먼트 레디 완료!');
 };