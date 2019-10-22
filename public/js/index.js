
$(function () {
  // ------------------------------------------------//
  // ----------------- common -----------------------//
  // ---------------------- -------------------------//

  $('#year').text(new Date().getFullYear())

  // ------------------------------------------------//
  // ----------------- intropage --------------------//
  // ---------------------- -------------------------//

  $('.content.intropage .slider').click(function()
  {
    let windowWith = screen.availWidth
    let mousePosition_x = event.pageX

    if((windowWith/2 < mousePosition_x)){
      $('html').stop().animate( { scrollLeft: '+=460' }, 700)
    }
    else{
      $('html').stop().animate( { scrollLeft: '-=460' }, 700)
    }
  })

  
  // ------------------------------------------------//
  // ----------------- aboutpage --------------------//
  // ---------------------- -------------------------//

   let headerimagepath = $('.content.aboutpage #headerimagepath').val()
   $('.content.aboutpage #page-header').css
    (
      {'background' : 'url('+headerimagepath+')'},
      {'background-color' : 'no-repeat'},
      {'background-attachment': 'fixed'}
    )

  // ------------------------------------------------//
  // ----------------- managerpage ------------------//
  // ------------------------------------------------//
      
      

  
})