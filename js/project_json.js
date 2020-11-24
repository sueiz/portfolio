$(function () {
    //start  
    //project_json.js
    
    $.ajax({
        url: 'project.json',
        type: 'get',
        success: function (data) {
            console.log('성공')
            var num, tit, des, topTitle, topImg, url, bodyTitle, description, period, period, sitemap, repsonsive, language, solution, vdo, mobileImg, mockupImg = '';
            var number = '',
            label = '',
            title = '',
            image = '';
            var tag = '';
            var topText= '',
                bodyText = '',
                siteText = '';
                site = '',
                res = '', 
                lang = '',
                solu = '',
                pageNum = localStorage.pageNum,
                backColor = ['#e9e9eb', '#ffe081', '#e1dfd6'];
            console.log(data)

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
                    sitemap = value.sitemap;
                    repsonsive = value.repsonsive;
                    language = value.language;
                    solution = value.solution;
                    vdo = value.vdo;
                    mobileImg = value.mobileImg;
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
                    number += "<mark>" + num + "</mark>";

                    label += "<div>";
                    label += "<div><p class='label_number'>0" + num + "</p><p class='label_tit'>" + tit + "</p></div>";
                    label += "<p>" + des + "</p></div>";

                    title += "<p>" + tit + "</p>";

                    image += "<div><a href='"+ url +"' target='_black'>"
                    image += "<img src='" + topImg + "' alt='image'></a></div></div>";


                    if(key == pageNum){
                         /* 배열 */
                        var siteArr = sitemap.split(",");
                        var resArr = repsonsive.split(",");
                        var langArr = language.split(",");
                        for(var i=0; i<siteArr.length; i++){
                            site += "<li>"+ siteArr[i] +"</li>"
                        }
                        for(var i=0; i<resArr.length; i++){
                            res +="<li>"+ resArr[i] +"</li>"
                        }
                        for(var i=0; i<langArr.length; i++){
                            lang +="<li>"+ langArr[i] +"</li>"
                        }
                        /* project.php */
                        topText = "<div class='scrolling_text'>"
                        topText += "<h1>"+ topTitle +"</h1></div>";
                        topText += "<a href='"+ url +"' class='rotate_img' target='_blank'>"
                        topText += "<img src='"+ topImg +"' alt='titleImg'></img></a>";

                        bodyText = "<div class='content'>";
                        bodyText += "<div class='title'><h2>"+ bodyTitle +"</h2>";
                        bodyText += "<a href='"+ url + "' target='_blank'>Visit website</a></div>";
                        bodyText += "<div class='project'><h3>PROJECT</h3><p>"+ description +"</p></div>"
                        bodyText += "<div class='period'><h3>PERIOD</h3><p>"+ period +"</p></div>"

                        bodyText += "<div class='sitemap'><h3>SITE MAP</h3><ul>"+ site +"</ul></div>"
                        bodyText += "<div class='responsive'><h3>RESPONSIVE WEB</h3><ul>"+ res +"</ul></div>"
                        bodyText += "<div class='language'><h3>LANGUAGE</h3><ul>"+ lang +"</ul></div>"
                        bodyText += "<div class='solution'><h3>SOLUTION</h3><dl>"+ solu +"</dl></div>"
                        bodyText += "<div class='vdo'><video loop autoplay muted><source src='"+ vdo +"' type='video/mp4'></video></div>"
                        bodyText += "<div class='mobile'><img src='"+ mobileImg +"' alt='mobile'></div>"
                        bodyText += "<div class='mockup'><img src='"+ mockupImg +"' alt='mockup'></div>"
                        bodyText += "</div>"

                        $('.top').append(topText);
                        $('.body').append(bodyText);
                        if (window.location.pathname == '/work.php') {
                            $('body').css('background','#fff');
                        }
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
                var clone = projectMove.cloneNode(true);
                var labelNum = document.querySelectorAll('.label_number');
                var labelTit = document.querySelectorAll('.label_tit')
               
                var i = 0;
                var bln = false;
            
                window.addEventListener('mousewheel',swift);
                function swift(e) {
                    
                    if(bln) return;
                    if(e.wheelDelta > 0){
                        //up
                        if (i >= 0){
                            projectMove.style.transform = "translateY(0%)";
                            txtMove.style.transform = "translateY(0)"
                            titMove.style.transform = "translateY(0%)"
                            labelMove.style.transform = "translateY(0)"
                            return;
                        }
                        i++;
                        var a = i * 100;
                        var b = i * 15;
                        var d = i * 26;
                        projectMove.style.transform = "translateY(" + a + "%)";
                        txtMove.style.transform = "translateY("+ b +"px)";
                        titMove.style.transform = "translateY("+ a +"%)";
                        labelMove.animate([
                            {opacity: '0'},
                            {opacity: '1'}
                        ],{
                            duration: 1000,
                            iterations: 1
                        });
                        labelMove.style.transform = "translateY("+ d +"px)";
                    }else if(e.wheelDelta < 0){
                        //down
                        if( i <= -2 ){
                            return;
                        }
                        i--;
                        var a = i * 100;
                        var b = i * 15;
                        var d = i * 26;
                        projectMove.style.transform = "translateY(" + a + "%)";
                        txtMove.style.transform = "translateY("+ b +"px)";
                        titMove.style.transform = "translateY("+ a +"%)";
                        labelMove.animate([
                            {opacity: '0'},
                            {opacity: '1'}
                        ],{
                            duration: 1000,
                            iterations: 1
                        });
                        labelMove.style.transform = "translateY("+ d +"px)";
                    }
                    bln = true;
                    setTimeout(function(){bln=false},500);
                }
            }
            fun();
            // $('body').css('background',backColor[pageNum]);
        }
    });
    //end    
})