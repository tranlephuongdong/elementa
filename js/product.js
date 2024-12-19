// Lấy các phần tử
const cartSidebar = document.getElementById('cart-sidebar');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');

// Mở sidebar khi click "ADD TO CART"
openCartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
});

// Đóng sidebar khi click nút "x"
closeCartBtn.addEventListener('click', () => {
  cartSidebar.classList.remove('open');
});
