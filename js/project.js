$(function () {
    var txt = document.querySelector('.scrolling_text');
    var img = document.querySelector('.rotate_img img');


    var i = 0;
    var bln = false;

    window.addEventListener('mousewheel',textMove);
    function textMove(e) {
        if(bln) return;

        if(e.wheelDelta > 0){
            //up
            if(i >= 0) {
                txt.style.transform = "translateX(300px)";
                return;
            }
            i++;
            a = 300 + (i * 60);
            b = i * 1;
            txt.style.transform = "translateX(" + a + "px)";
            img.style.transform = "rotate(" + b + "deg)";
        }else if (e.wheelDelta < 0){
            //down
            if ( i <= -5){
                return;
            }
            i--;
            a = 300 + (i * 60);
            b = i * 1;
            txt.style.transform = "translateX(" + a + "px)";
            img.style.transform = "rotate(" + b + "deg)";
        }
        bln = true;
        setTimeout(function(){bln=false},500);
    }
});