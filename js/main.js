$('.trigger').click(function(){
  $(this).toggleClass('on'); //햄버거 버튼 'on'추가+모양변경 
  $('nav').slideToggle(400); //슬라이드 메뉴 내려오기
});


$(window).resize(function(){
  /*$('nav').removeattr('style'); 간단하게 해결*/
  let winW = $(window).width(); //브라우저의 가로길이를 변수에
  console.log('브라우저의 가로길이는?',winW);

  if(winW >=768 && $('nav').is(':hidden')){
    console.log('nav가 안보여요! ㅜㅜ');
    $('nav').removeAttr('style');
  }
});