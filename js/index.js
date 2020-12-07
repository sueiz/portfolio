$(function () {
    var body = document.querySelector('body');
    var clickBtn = document.querySelector('.click_btn');
    var cursor = document.getElementById('cursor');

    if (document.addEventListener) {
        document.addEventListener('mousemove', cursorFun);
    };

    function cursorFun(e){
        var positionLeft = e.clientX;
        var positionTop = e.clientY;
        cursor.style.left = positionLeft - 20 + "px";
        cursor.style.top = positionTop - 20 + "px";
    }

    clickBtn.addEventListener('mouseover',mouseEnter);
    clickBtn.addEventListener('mouseleave',mouseLeave);

    function mouseEnter(){
        body.classList.add('active');
        cursor.classList.add('active');
    }
    function mouseLeave(){
        body.classList.remove('active');
        cursor.classList.remove('active');
    }

    var body = document.querySelector('body');

    setTimeout(function() {
        body.classList.add('active');
    }, 10);

    clickBtn.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.add('page');

        setTimeout(function() {
            location.href = clickBtn.href;
        }, 500);
    });
});