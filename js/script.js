$(".page-scroll").on('click', function (e) {

  const tujuan = $(this).attr('href')
  const elemenTujuan = $(tujuan)

  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 100
  }, 1300, 'easeInOutExpo')

  e.preventDefault()

})

$(window).scroll(function () {
  var wScroll = $(this).scrollTop()


  // Portfolio animation

  if (wScroll > $('.portfolio').offset().top - 100) {

    $('.box-portfolio').each(function (index) {
      setTimeout(function () {
        $('.box-portfolio').eq(index).addClass('show')
      }, 300 * (index + 1))
    })
  }
  if (wScroll > $('.my-skills').offset().top - 300) {

    $('.box-skill').each(function (index) {
      setTimeout(function () {
        $('.box-skill').eq(index).addClass('show')
      }, 200 * index)
    })
  }


  if (wScroll > $('.certificates').offset().top - 300) {
    setTimeout(function () {
      $('.box-certificates').addClass("show")
    }, 300)
  }


  if (wScroll > $('.contact').offset().top - 300) {
    setTimeout(function () {
      $('.box-contact').addClass("show")
    }, 300)
  }

})

setTimeout(function () {
  $('.profile-content').addClass('show')
}, 500)
setTimeout(function () {
  $('.profile-img').addClass('show')
}, 700)


// Portfolio
const contentPortfolio = [{
    content_left: `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="project/hefastore_1.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="project/hefastore_2.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="project/hefastore_3.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="project/hefastore_4.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>`,
    content_right: `<h3 class = "text-center mt-3">HefaStore</h3>`
  },
  {
    content_left: `<iframe width="560" height="500" src="https://www.youtube.com/embed/2nCbYWFZtxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    content_right: `
    <h3 class = "text-center mt-3">Jaga Tubuh App</h3>
   `
  },
  {
    content_left: `<iframe width="560" height="500" src="https://www.youtube.com/embed/2nCbYWFZtxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    content_right: ` 
   <h3 class = "text-center mt-3">Edupay Application</h3><a href = "https://github.com/vikoms/EduPay-AplikasiPembayaranSPP"
    class = "btn btn-success mt-5"
    target = "_blank" > See On
    Github </a>
  `
  }
]

const togglePortfolio = document.querySelectorAll('.toggle-portfolio')
togglePortfolio.forEach((item, index) => {
  item.addEventListener("click", function () {
    const portfolioId = item.getAttribute("data-id")
    const elContentLeft = document.querySelector('.content-left')
    const elContentRight = document.querySelector('.content-right')
    const contentLeft = contentPortfolio[portfolioId].content_left
    const contentRight = contentPortfolio[portfolioId].content_right
    elContentLeft.innerHTML = contentLeft
    elContentRight.innerHTML = contentRight
  })
})