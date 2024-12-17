$(document).ready(function () {
  var owl = $(".owl-carousel");

  // Khởi tạo Owl Carousel
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false, // Tắt nút điều hướng mặc định
    dots: false, // Tắt chấm tròn
    autoplay: true, // Tự động chạy
    autoplayTimeout: 5000, // Thời gian giữa các slide
    autoplayHoverPause: true, // Dừng khi hover
    items: 5, // 
  responsive: {
  0: { items: 2 },  /* 2 ảnh trên màn hình rất nhỏ */
  600: { items: 3 }, /* 3 ảnh trên màn hình nhỏ */
  1000: { items: 5 } /* 5 ảnh trên màn hình lớn */
}
    }
  );

  // Gán sự kiện cho nút điều khiển tùy chỉnh
  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
});
