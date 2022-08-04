feather.replace();

  function initializeOwlCarousel(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        navElement:'div',
        navText: [
          `<button type="button" id="lg-prev-1" aria-label="Previous slide" class="btn-icon btn-icon-outline" style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/left-white.svg" /></button>`,
          `<button type="button" id="lg-next-1" aria-label="Next slide" class="btn-icon btn-icon-outline"  style="opacity:1;right:0;top:0;"> <img src="../assets/img/icons/right-white.svg" /> </button>`],
      });
    console.log("initialize owlcarousel")
  }

  function initializeFeatherIcons(){
    feather.replace()
    console.log("initialize feather icons")

  }

  $(document).ready(function(){
    initializeOwlCarousel();
  });