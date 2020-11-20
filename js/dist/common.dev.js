"use strict";

$(function () {
  //start    
  $('header').load('/portfolio/inc_head_foot.html header > div', header);
  $('.slide_menu').load('/portfolio/inc_head_foot.html .slide_menu > .inner', slideMenu);
  $('.projects_wrap').load('/portfolio/inc_head_foot.html .projects_wrap > .projects', slideProject);
  $('.popup_contact').load('/portfolio/inc_head_foot.html .popup_contact > .popup_wrap', contact);
  $.ajax({
    url: '/portfolio/inc_head_foot.html',
    success: function success(data) {
      $('body').prepend($(data).find('.projects_wrap'));
      $('.project_list').prepend($(data).find('.btn'));
      slideProject();
    }
  });

  function header() {
    $('header .gnb a').eq(localStorage.pageNum).addClass('active');
    $('header .gnb a').on('click', function (e) {
      e.preventDefault();
      localStorage.pageNum = $(this).index();
      location.href = $(this).attr('href');
    });
  }

  function slideMenu() {
    $('.menu-trigger').on('click', function () {
      $('.slide_menu').css('right', '0%');
    });
    $('.close_btn').on('click', function () {
      $('.slide_menu').css('right', '-30%');
    });
  }

  function slideProject() {
    /* 프로젝트 리스트 버튼 */
    $('.project_list').on('click', function () {
      $('.projects_wrap').css('left', '0');
      $('.logo').addClass('active');
      $('.gnb ul li').addClass('active');

      if (window.location.pathname == '/portfolio/work.html') {
        $('.menu-trigger').css('display', 'none');
        $('.back_btn').css('display', 'block');
      } else {
        $('.menu-trigger').css('display', 'none');
        $('.back_btn').css('display', 'block');
      }
    });
    $('.back_btn').on('click', function () {
      $('.projects_wrap').css('left', '-100%');
      $('.logo').removeClass('active');
      $('.gnb ul li').removeClass('active');

      if (window.location.pathname == '/portfolio/work.html') {
        $('.menu-trigger').css('display', 'block');
        $('.back_btn').css('display', 'none');
      } else {
        $('.menu-trigger').css('display', 'none');
      }
    });
    /* 버튼 배경색 */

    function btnColor() {
      if (window.location.pathname == '/portfolio/project/krispykreme.html') {
        $('.btn p').css('background', '#e9e9eb');
      } else if (window.location.pathname == '/portfolio/project/yuhankimberly.html') {
        $('.btn p').css('background', '#ffe081');
      } else if (window.location.pathname == '/portfolio/project/athomeworkouts.html') {
        $('.btn p').css('background', '#E1DFD6');
      }
    }

    btnColor();
    $(window).on('scroll', function () {
      var bodyTop = $('.project_wrap .body').offset().top;
      var btnTop = $('.btn p').offset().top;

      if (bodyTop < btnTop) {
        $('.btn p').css('background', '#fff');
      } else {
        btnColor();
      }
    });
  }

  function contact() {
    $('.gnb ul li').eq(2).find('a').on('click', function () {
      $('.popup_contact').css('display', 'block');
      $('.popup_contact').addClass('active');
    });
    $('.popup_close').on('click', function () {
      $('.popup_contact').hide();
      $('.popup_contact').removeClass('active');
    });
  } //end

});