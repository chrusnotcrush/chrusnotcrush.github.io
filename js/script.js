// Event pada saat link di klik
$(".page-scroll").on("click", function (e) {
  // Mengambil isi herf
  var tujuan = $(this).attr("href");
  // Menangkap elemen
  var elemenTujuan = $(tujuan);
  // Memindahkan scroll
  $("html , body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });
});
