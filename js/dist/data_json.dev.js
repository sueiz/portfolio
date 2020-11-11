"use strict";

$(function () {
  //start  
  //data_json.js
  $.ajax({
    url: 'data.json',
    type: 'get',
    data: {
      a: 10
    },
    success: function success(data) {
      console.log('aaa');
      var num,
          tit,
          description,
          imgSrc,
          url = '';
      var project = '';
      data.project.forEach(function (value, key) {
        num = value.num;
        tit = value.tit;
        description = value.description;
        imgSrc = value.imgSrc;
        url = value.url;
        project += "<div><div class='project_number'><div class='number'>";
        project += "<p><mark>" + num + "</mark>| 4</p>";
        project += "<p>PROJECT</p></div>";
        project += "<div class='label'>";
        project += "<div><p class='label_number'>0" + num + "</p><p class='label_tit'>" + tit + "</p></div>";
        project += "<div><p>" + description + "</p></div>";
        project += "</div></div>";
        project += "<div class='project_body'>";
        project += "<div class='project_img'>";
        project += "<img src='" + imgSrc + "' alt='krispykreme'>";
        project += "</div>";
        project += "<div class='project_title'>";
        project += "<div><span>" + tit + "</span></div>";
        project += "</div></div></div>";
      });
      $('.project').html(project);
    }
  }); //end    
});