var typed = new Typed('.element', {
    strings: ["Salman Shah Shaikh","Javascript Developer", "PHP Developer","Full Stack web developer"],
    typeSpeed: 50,
    backSpeed:50,
    loop:true,
    showCursor: false,
    // fadeOut: true,
    backDelay: 1000,
  });
  $(document).ready(function(){
  
   
     
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  loop:true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	

  })
