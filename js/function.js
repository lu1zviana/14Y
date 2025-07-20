$(function(){
	 $('.projeto1').bxSlider({
      mode: 'fade',
      
     touchEnabled: false,
    });

  var estaVisivel = true; 
    $("#bars").click(function() {  
          if (estaVisivel) {
            $('.nav-mobile').fadeOut();   
          } else {
            $('.nav-mobile').fadeIn();    
          }
         estaVisivel =! estaVisivel; 
  });

    
   for(var i = 0; i < 10;i++){
     console.log('Não tenho idade para cria linkedin')
     console.log('Não tenho idade para cria linkedin')
   }

   $('header, .home, .sobre, a[href^="#"]').on('click', function(e) {
       e.preventDefault();
       var id = $(this).attr('href'),
       targetOffset = $(id).offset().top;
      
    $('html, body').animate({ 
      scrollTop: targetOffset - 100
    }, 500);
  });

   document.getElementById('link').addEventListener('click', function () {
        var href = this.dataset.link;
    window.location = href;
});
});