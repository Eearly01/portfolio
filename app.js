$(() => {
  document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-bar");
    const navHeight = 200;
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top);
    if (distanceFromTop >= navHeight)
    {
      navbar.classList.add("moving-nav");
    }
    else {
      navbar.classList.remove("moving-nav");
    }
  }); //https://markoskon.com/fixed-navbar-on-top-with-position-sticky/

  let slideIndex = 1;

  showSlides(slideIndex);

  $('.next').on('click',function() {
    showSlides(slideIndex += 1);
  })

  $('.prev').on('click',function() {
    showSlides(slideIndex -= 1);
  })

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = $(".carousel");
    if (n > slides.length) 
      {slideIndex = 1}
    if (n < 1) 
      {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides.eq(slideIndex-1).css("display","block");

  }

  const cContainerF = $(".carousel-containerF");
  const cContainerB = $(".carousel-containerB");
  const $btnF = $("#btnFire");
  const $btnB = $("#btnBackpack");

  $btnF.on('click', function () {
  slideIndex = 1;
  console.log(cContainerF.css('display'))
    if (cContainerF.is(':visible')) {
      cContainerF.css('display','none');
      //console.log('click!')
    } else {
      cContainerF.css('display','block');

    }
  });

    $btnB.on('click', function () {
  console.log(cContainerB.css('display'))
  slideIndex = 1;
    if (cContainerB.is(':visible')) {
      cContainerB.css('display','none');
      //console.log('click!')
    } else {
      cContainerB.css('display','block');

    }
  });


})