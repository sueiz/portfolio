$(function () {
    //start  
    //project_json.js
    
    $.ajax({
        url: '/project.json',
        type: 'get',
        success: function (data) {
            localStorage.page = 'list';

            var num, tit, des, topTitle, topImg, url, bodyTitle, description, period, role, sitemap, responsive, language, solution, vdo, mockupImg = '';
            var number = '',
                label = '',
                title = '',
                image = '';
            var tag = '';
            var topText= '',
                bodyText = '',
                site = '',
                resp = '',
                lang = '',
                solu = '',
                mockImg = '',
                pageNum = localStorage.pageNum,
                backColor = ['#e9e9eb', '#ffe081', '#e1dfd6'];

            function fun() {
                data.work.forEach(function (value, key) {
                    num = value.num;
                    tit = value.tit;
                    des = value.des;
                    topTitle = value.topTitle;
                    topImg = value.topImg;
                    url = value.url;
                    bodyTitle = value.bodyTitle;
                    description = value.description;
                    period = value.period;
                    role = value.role;
                    sitemap = value.sitemap;
                    responsive = value.responsive;
                    language = value.language;
                    solution = value.solution;
                    vdo = value.vdo;
                    mockupImg = value.mockupImg;

                    /* 프로젝트 리스트*/
                    tag = "<a href='#' data-num="+ key +"><h2 class="+ bodyTitle +">"+topTitle +"";
                    tag += "<img src='"+topImg+"' alt="+bodyTitle+">"
                    tag += "</h2></a>"
                    $('.project_title').append(tag);

                    var idx;
                    $('.project_title a').on('click', function(e){
                        e.preventDefault();
                        idx = $(this).index();
                        localStorage.pageNum = $(this).attr('data-num');
                        location.href = 'project.php';
                    });
    
                    /* work.php */
                    if (window.location.pathname == '/work.php'){
                        number += "<mark>" + num + "</mark>";

                        label += "<div>";
                        label += "<div><p class='label_number'>0" + num + "</p><p class='label_tit'>" + tit + "</p></div>";
                        label += "<p>" + des + "</p></div>";
                        
                        title += "<p>" + tit + "</p>";
    
                        image += "<div><a href='#' data-num="+ key +"' target='_black'>"
                        image += "<img src='" + topImg + "' alt='image'></a></div></div>";

                        $('body').css('background','#fff');
                        
                    }

                    /* project.php */
                    if(key == pageNum && location.pathname == '/project.php'){
                        localStorage.page = 'detail';

                         /* 배열 */
                        var siteArr = sitemap.split(",");
                        var resArr = responsive.split(",");
                        var langArr = language.split(",");
                        for(var i=0; i<siteArr.length; i++){
                            site += "<li>"+ siteArr[i] +"</li>"
                        }
                        for(var i=0; i<resArr.length; i++){
                            resp += "<li>"+ resArr[i] +"</li>"
                        }
                        for(var i=0; i<langArr.length; i++){
                            lang += "<li>"+ langArr[i] +"</li>"
                        }
                        solution.forEach(function(value, key){
                            solu += "<dt>"+ value[0] +"</dt><dd>"+ value[1] +"</dd>"
                        });

                        mockupImg.forEach(function(value, key){
                            mockImg += "<img src='"+ value +"' alt='mockup'>"
                        });
                        
                        topText = "<div class='scrolling_text'>"
                        topText += "<h1>"+ topTitle +"</h1></div>";
                        topText += "<a href='"+ url +"' class='rotate_img' target='_blank'>"
                        topText += "<img src='"+ topImg +"' alt='titleImg'></img></a>";

                        bodyText = "<div class='content'>";
                        bodyText += "<div class='title'><h2>"+ bodyTitle +"</h2>";
                        bodyText += "<a href='"+ url + "' target='_blank'>Visit website</a></div>";
                        bodyText += "<div class='project'><h3>PROJECT</h3><p>"+ description +"</p></div>"
                        bodyText += "<div class='period'><h3>PERIOD</h3><p>"+ period +"</p></div>"
                        bodyText += "<div class='role'><h3>ROLE</h3><p>"+ role +"</p></div>"
                        bodyText += "<div class='sitemap'><h3>SITE MAP</h3><ul>"+ site +"</ul></div>"
                        bodyText += "<div class='responsive'><h3>RESPONSIVE WEB</h3><ul>"+ resp +"</ul></div>"
                        bodyText += "<div class='language'><h3>LANGUAGE</h3><ul>"+ lang +"</ul></div>"
                        bodyText += "<div class='solution'><h3>SOLUTION</h3><dl>"+ solu +"</dl></div>"
                        bodyText += "<div class='vdo'><video loop autoplay muted><source src='"+ vdo +"' type='video/mp4'></video></div>"
                        bodyText += "<div class='mockup'>"+ mockImg +"</div>"
                        bodyText += "</div>"

                        $('.top').append(topText);
                        $('.body').append(bodyText);
                        $('body').css('background',backColor[pageNum]);
                    }                    
                })
                $('.page p').append(number);
                $('.label_wrap').append(label);
                $('.title_wrap').append(title);
                $('.img_wrap').append(image);

                /* work.php title span */
                var text = document.querySelectorAll(".title_wrap p");
                var strText = [],splitText;
                text.forEach(function(el,idx){
                    splitText='';
                    for (var i=0; i<el.textContent.length; i++){
                        splitText += "<span>"+el.textContent[i]+"</span>";
                    }
                    strText.push(splitText);
                });

                for(var j=0; j<text.length; j++){
                    text[j].textContent = '';
                    text[j].innerHTML += strText[j];
                }

                /* work.php text move */
                var projectMove = document.querySelector('.img_wrap');
                var txtMove = document.querySelector('.page p');
                var labelMove = document.querySelector('.label_wrap');
                var titMove = document.querySelector('.title_wrap');
               
                var txt = document.querySelector('.scrolling_text');
                var img = document.querySelector('.rotate_img img');

                var i = 0;
                var bln = false;

                //list or detail page
                if(localStorage.page == 'list'){
                    // window.addEventListener('mousewheel',swift);
                    $('.project_wrap').on('click', function(e){
                        e.preventDefault();
                        localStorage.pageNum = Math.abs(i);
                        location.href = 'project.php';
                    });

                    /* 반응형 */
                    var resMsg;
                    var mq = window.matchMedia('(max-width:1024px)');

                    mq.addListener(res);

                    function res(e) {
                        if (e.matches) {
                            //모바일
                            resMsg = 'mobile';
                            console.log('mobile');

                        } else {
                            //PC
                            resMsg = 'pc';
                            console.log('pc');
                        }
                    }
                    res(mq);

                    
                }else if(localStorage.page == 'detail'){
                    window.addEventListener('mousewheel',textMove);
                    window.addEventListener('DOMMouseScroll',textMove);
                }

                /* 모바일 or PC 구분 */
                function workRes() {
                    if (resMsg == 'mobile') {
                        window.addEventListener('touchstart', tStart);
                        window.addEventListener('touchmove', tMove);
                        window.addEventListener('touchend', tEnd);
                    } else if (resMsg == 'pc') {
                        window.addEventListener('mousewheel',swift);
                        window.addEventListener('DOMMouseScroll',swift);
                    }
                }
                workRes();

                var mEvent = { y: 0, y2: 0, state: '' };
                function tStart(e) {
                    mEvent.y = e.changedTouches[0].clientY;
                    console.log(mEvent);
                }
                function tMove(e) {
                    mEvent.y2 = e.changedTouches[0].clientY;
                }
                function tEnd(e) {
                    if (mEvent.y > mEvent.y2) {
                        if (i >= 0) { return; }
                        i++;
                        workMove();
                    } else {
                        if (i <= -2) { return }
                        i--;
                        workMove();
                    }
                }

                function swift(e) {
                    console.log(e)
                    if(bln) return;
                    if(e.wheelDelta > 0 || e.detail < 0){
                        //up
                        if (i >= 0){
                            // projectMove.style.transform = "translateY(0%)";
                            // txtMove.style.transform = "translateY(0)"
                            // titMove.style.transform = "translateY(0%)"
                            // labelMove.style.transform = "translateY(0)"
                            return;
                        }
                        i++;
                        workMove();
                    }else if(e.wheelDelta < 0 || e.detail > 0){
                        //down
                        if( i <= -2 ){
                            return;
                        }
                        i--;
                        workMove();
                    }
                    bln = true;
                    setTimeout(function(){bln=false},500);
                }

                function workMove(){
                    var a = i * 100;
                        var b = i * 15;
                        var d = i * 26;
                        projectMove.style.transform = "translateY(" + a + "%)";
                        txtMove.style.transform = "translateY("+ b +"px)";
                        titMove.style.transform = "translateY("+ a +"%)";
                        labelMove.classList.remove('active');
                        setTimeout(function(){
                            labelMove.classList.add('active');
                            setTimeout(function(){
                                labelMove.style = "opacity:1;transition:opacity 1s;transform:translateY("+ d +"px)";
                            },500);
                        },10);
                }

                function textMove(e) {
                    if(bln) return;
            
                    if(e.wheelDelta > 0 || e.detail < 0){
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
                    }else if (e.wheelDelta < 0 || e.detail > 0){
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
            }
            fun();
        }
    });
    //end    
})