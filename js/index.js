window.addEventListener('DOMContentLoaded', function () {
    var projectMove = document.querySelector('.img_wrap');
    var txtMove = document.querySelector('.page p');
    var labelMove = document.querySelector('.label_wrap');
    var titMove = document.querySelector('.title_wrap');


    var i = 0;
    var bln = false;

    
    window.addEventListener('mousewheel',swift);

    function swift(e) {
        if(bln) return;
        console.log(e.wheelDelta)
        if(e.wheelDelta > 0){
            console.log(i)
            if (i >= 0){
                projectMove.style.transform = "translateY(0%)";
                txtMove.style.transform = "translateY(0)"
                titMove.style.transform = "translateY(0)"
                labelMove.style.transform = "translateY(0)"
                return;
            }
            i++;
            var a = i * 100;
            var b = i * 15;
            var c = i * 200;
            var d = i * 39;
            projectMove.style.transform = "translateY(" + a + "%)";
            txtMove.style.transform = "translateY("+ b +"px)";
            titMove.style.transform = "translateY("+ c +"%)";
            labelMove.style.transform = "translateY("+ d +"px)";

        }else if(e.wheelDelta < 0){
            if( i <= -2 ){
                return;
            }
            i--;
            var a = i * 100;
            var b = i * 15;
            var c = (i * 100)+100 ;
            var d = i * 39;
            projectMove.style.transform = "translateY(" + a + "%)";
            txtMove.style.transform = "translateY("+ b +"px)";
            titMove.style.transform = "translateY("+ c +"%)";
            labelMove.style.transform = "translateY("+ d +"px)";

        }
        bln = true;
        setTimeout(function(){bln=false},500);
    }
});
