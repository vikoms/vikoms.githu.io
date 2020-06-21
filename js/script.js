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

  if (wScroll > $('.portfolio').offset().top - 150) {

    $('.box-portfolio').each(function (index) {
      setTimeout(function () {
        $('.box-portfolio').eq(index).addClass('show')
      }, 300 * (index + 1))
    })
  }
  if (wScroll > $('.about-me').offset().top - 150) {

    $('.img-about-me').addClass('show')
    setTimeout(function () {
      $('.text-about-me').addClass('show')
    }, 300)
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
                    <img src="project/hefastore_1.jpg" class="d-block" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="project/hefastore_2.jpg" class="d-block" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="project/hefastore_3.jpg" class="d-block" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="project/hefastore_4.jpg" class="d-block" alt="...">
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
    content_right: `<h2 class="text-center">HefaStore</h2>
              <li class="title">
                Apa itu Hefastore?
              </li>
              <p class="value-1">Hefa Store adalah tampilan halaman website untuk Toko Online (E-Commerce)</p>
              <li class="title">
                Halaman
                <ul class="list">
                  <li>Halaman Home</li>
                  <li>Halaman Detail Produk</li>
                  <li>Halaman Kategori</li>
                  <li>Halaman Checkout</li>
                </ul>
              </li>

              <li class="title">
                Dibuat Menggunakan :
                <ul class="list">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Bootstrap 4</li>
                  <li>Javascript</li>
                </ul>
              </li>`
  },
  {
    content_left: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2nCbYWFZtxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    content_right: `
     <h2 class="text-center">Jaga Tubuh</h2>
              <li class="title">
                Apa itu Aplikasi Jaga Tubuh?
              </li>
              <p class="value-1">Jaga Tubuh adalah aplikasi kebugaran dan kesehatan yang dapat membantu pengguna untuk
                manjalani hidup sehat dan juga untuk menurunkan berat badan </p>
              <li class="title">
                Fitur
                <ul class="list">
                  <li>Program Workout 30 Hari</li>
                  <li>Jadwal Diet 30 Hari</li>
                  <li>Laporan Berat Badan</li>
                </ul>
              </li>

              <li class="title">
                Dibuat Menggunakan :
                <ul class="list">
                  <li>Java</li>
                  <li>Laravel</li>
                  <li>XML</li>
                  <li>Shared Preferences</li>
                  <li>SQlite</li>
                  <li>MYSQL</li>
                </ul>
              </li>
              
   `
  },
  {
    content_left: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_fXZvrEkTpw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    content_right: ` 
              <h2 class="text-center">EduPay</h2>
              <li class="title">
                Apa itu EduPay?
              </li>
              <p class="value-1">Edupay adalah sebuah aplikasi untuk mengelola pembayaran sekolah </p>
              <li class="title">
                Fitur
                <ul class="list">
                  <li>Kelola data Siswa,Petugas,Kelas,SPP (admin)</li>
                  <li>Kelola Riwayat pembayaran siswa (admin & petugas)</li>
                  <li>Entry Data Pembayaran (admin & petugas)</li>
                  <li>Melihat daftar riwayat pembayaran untuk siswa </li>
                </ul>
              </li>

              <li class="title">
                Dibuat Menggunakan :
                <ul class="list">
                  <li>Java</li>
                  <li>XML</li>
                  <li>Firebase</li>
                  <li>Shared Preferences</li>
                  <li>MVVM Design Patern</li>
                </ul>
              </li>
              <a href="https://github.com/vikoms/EduPay-AplikasiPembayaranSPP" target="_black"
                class="btn btn-primary">Lihat di Github</a>
  `
  },
  {
    content_left: `<iframe src="https://www.youtube.com/embed/FzSzF0IhLu8" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`,
    content_right: `<h2 class="text-center">Moflix</h2>
              <li class="title">
                Apa itu Moflix?
              </li>
              <p class="value-1">Moflix adalah sebuah aplikasi yang berguna untuk menampilkan daftar film , serial tv,
                maupun
                artis </p>
              <li class="title">
                Fitur
                <ul class="list">
                  <li>Daftar Film , Serial TV dan Artis</li>
                  <li>Cari Film, Serial TV dan Artis</li>
                  <li>Menambahkan Film dan Serial TV favorit</li>
                  <li>Notifikasi pengigat untuk masuk ke aplikasi setiap jam 07:00 </li>
                  <li>Notifikasi untuk menampilkan daftar film yang tayang pada hari ini setiap jam 08:00 </li>
                  <li>Multi Bahasa (Bahasa Inggris dan Bahasa Indonesia)</li>
                </ul>
              </li>

              <li class="title">
                Dibuat Menggunakan :
                <ul class="list">
                  <li>Kotlin</li>
                  <li>SQLite (untuk menyimpan daftar film dan serial tv favorit)</li>
                  <li>Alarm Manager</li>
                  <li>API : <a href="https://www.themoviedb.org" target="_blank"> The MovieDB</a></li>
                  <li>MVVM Design Pattern </li>
                  <li>XML</li>
                </ul>
              </li>
               <a href="https://github.com/vikoms/Moflix" target="_black"
                class="btn btn-primary">Lihat di Github</a>`
  },
  {
    content_left: `<iframe src="https://www.youtube.com/embed/6jsslRKt_rI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    content_right: `<h2 class="text-center">Laraquotes</h2>
              <li class="title">
                Apa itu Laraquotes?
              </li>
              <p class="value-1">Laraquotes adalah sebuah website untuk saling berbagi quote </p>
              <li class="title">
                Fitur
                <ul class="list">
                  <li>CRUD (create,update,delete) Quote</li>
                  <li>Like Quote</li>
                  <li>Comment Quote</li>
                  <li>Like Comment</li>
                  <li>Notifikasi</li>
                  <li>Filter Quote (per kategori)</li>
                </ul>
              </li>

              <li class="title">
                Dibuat Menggunakan :
                <ul class="list">
                  <li>Laravel 6.0</li>
                  <li>MYSQL Database</li>
                  <li>Bootstrap 4.0</li>
                </ul>
              </li>
              <a href="https://github.com/vikoms/Laravel-Kutipan" target="_black"
                class="btn btn-primary">Lihat di Github</a>`
  },
  {
    content_left: `<iframe src="https://www.youtube.com/embed/p7N6_sqFsN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    content_right: `<h2 class="text-center">Kotlin Chat App</h2>
              <li class="title">
                Apa itu Kotlin Chat App?
              </li>
              <p class="value-1">Kotlin Chat App adalah sebuah aplikasi chatting secara realtime </p>
              <li class="title">
                Fitur
                <ul class="list">
                  <li>Chat antar user</li>
                  <li>Search User</li>
                  <li>Menampilkan tanda user online atau offline</li>
                  <li>Notifikasi setiap ada pesan baru yang masuk</li>
                </ul>
              </li>

              <li class="title">
                Dibuat Menggunakan :
                <ul class="list">
                  <li>Kotlin</li>
                  <li>Firebase Realtime Database</li>
                  <li>Firebase Cloud Messaging</li>
                  <li>Firebase Authentication</li>
                  <li>Push Notification</li>
                </ul>
              </li>
              <a href="https://github.com/vikoms/Kotlin-Chat-App" target="_black"
                class="btn btn-primary">Lihat di Github</a>`
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