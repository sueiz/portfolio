$(function () {
    //start  
    //data_json.js

    $.ajax({
        url: 'data.json',
        type: 'get',
        success: function (data) {
            console.log('성공')
            var num, tit, description, imgSrc, url, code = '';
            var number = '',
                label = '',
                title = '',
                image = '';

            function fun() {
                data.project.forEach(function (value, key) {
                    code = value.code;
                    num = value.num;
                    tit = value.tit;
                    description = value.description;
                    imgSrc = value.imgSrc;
                    url = value.url;

                    number += "<mark>" + num + "</mark>";
                    label += "<div>";
                    label += "<div><p class='label_number'>0" + num + "</p><p class='label_tit'>" + tit + "</p></div>";
                    label += "<p>" + description + "</p></div>";
                    title += "<p>" + tit + "</p>";
                    image += "<div>"
                    image += "<img src='" + imgSrc + "' alt='krispykreme'></div></div>";
                })

                $('.page p').append(number);
                $('.label_wrap').append(label);
                $('.title_wrap').append(title);
                $('.img_wrap').append(image);

            


                /* title span */
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
        }
    });
    //end    
})