$(function(){
//start    
    $('header').load('/inc_head_foot.php header > div', header);
    $('.slide_menu').load('/inc_head_foot.php .slide_menu > .inner', slideMenu);

    $.ajax({
        url: '/inc_head_foot.php',
        success: function (data) {
            $('.projects_wrap').prepend($(data).find('.projects'));
            $('.project_list').prepend($(data).find('.btn'));
            slideProject();

            $('.popup_contact').prepend($(data).find('.popup_wrap'));
            contact();
        }
    })
    
    function header(){
        $('header .gnb a').eq(localStorage.pageNum).addClass('active');
        $('header .gnb li').not(':nth-of-type(3)').find('a').on('click',function(e){
            e.preventDefault();
            localStorage.pageNum = $(this).index();
            location.href = $(this).attr('href');
        });
    }
    
    function slideMenu(){
        $('.menu-trigger').on('click',function(e){
            e.preventDefault();
            $('.slide_menu').css('display','block');
            $('.slide_menu').css('right','0%');
        });
        $('.close_btn').on('click',function(e){
            e.preventDefault();
            $('.slide_menu').css('right','-30%');
        });
    }

    function slideProject(){
        /* 프로젝트 리스트 버튼 */

        $(window).scroll(function () { 
            var scrollValue = $(document).scrollTop();
            $('.projects_wrap').css('top',scrollValue+"px");
        });
        
        $('.project_list').on('click',function (e) {
            e.preventDefault();
            $('.projects_wrap').css('left','0');
            $('.logo').addClass('active');
            $('.gnb ul li').addClass('active');
            
            if (window.location.pathname == '/work.php') {
                $('.menu-trigger').css('display','none');
                $('.back_btn').css('display','block');
            }else{
                $('.menu-trigger').css('display','none');
                $('.back_btn').css('display','block');
                $('body').addClass('active');
            }
        });

        $('.back_btn').on('click',function(e) {
            e.preventDefault();
            $('.projects_wrap').css('left','-100%');
            $('.logo').removeClass('active');
            $('.gnb ul li').removeClass('active');
            if (window.location.pathname == '/work.php') {
                // $('.menu-trigger').css('display','block');
                $('.back_btn').css('display','none');
            }else{
                // $('.menu-trigger').css('display','none');
                $('body').removeClass('active');
            }
        });

        /* 버튼 배경색 */
        function btnColor() {
            if (window.location.pathname == '/project/krispykreme.php') {
                $('.btn p').css('background','#e9e9eb');
            }else if (window.location.pathname == '/project/yuhankimberly.php') {
                $('.btn p').css('background','#ffe081');
            }else if (window.location.pathname == '/project/athomeworkouts.php') {
                $('.btn p').css('background','#E1DFD6');
            }
        }
        btnColor();
        function scrollColor(){
            $(window).on('scroll',function(){
                var bodyTop = $('.project_wrap .body').offset().top;
                var btnTop = $('.btn p').offset().top;
    
                if (bodyTop < btnTop) {
                    $('.btn p').css('background','#fff');
                }else {
                    btnColor();
                }
            });
        }
        scrollColor();
    }

    function contact(){
        $('.gnb ul li').eq(2).find('a').on('click',function(e){
            e.preventDefault();
            console.log('a')
            $('.popup_contact').css('display','block');
            $('body').addClass('active');
        });

        $('.popup_close').on('click',function(e){
            e.preventDefault();
            $('.popup_contact').hide();
            $('body').removeClass('active');
        })
    }

//end
})
