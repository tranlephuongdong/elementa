document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter'); // Chọn tất cả counter
  const observerOptions = { threshold: 0.5 }; // 50% phần tử xuất hiện mới kích hoạt

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-count'); // Lấy giá trị mục tiêu
    let count = 0;
    const increment = Math.ceil(target / 200); // Tính bước nhảy

    const updateCount = () => {
      if (count < target) {
        count += increment; // Tăng giá trị
        counter.innerText = count.toLocaleString(); // Thêm dấu phẩy cho số lớn
        setTimeout(updateCount, 20); // Đếm lại mỗi 20ms
      } else {
        counter.innerText = target.toLocaleString(); // Kết thúc chính xác
      }
    };

    updateCount(); // Bắt đầu đếm
  };

  // Intersection Observer để theo dõi các counter
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting(entry.target); // Bắt đầu đếm khi phần tử xuất hiện
        observer.unobserve(entry.target); // Ngừng theo dõi sau khi đã đếm
      }
    });
  }, observerOptions);

  // Theo dõi tất cả counter
  counters.forEach((counter) => {
    observer.observe(counter);
  });
});


/*PAGE SHOP-SIDEBAR*/
document.querySelectorAll('.expand-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const subCategories = toggle.nextElementSibling;
    const expandIcon = toggle.querySelector('.expand-icon');

    if (subCategories.classList.contains('show')) {
      subCategories.classList.remove('show');
      subCategories.style.display = 'none';
      expandIcon.textContent = '+';
    } else {
      subCategories.classList.add('show');
      subCategories.style.display = 'block';
      expandIcon.textContent = '-';
    }
  });
});

// Popup Banner Logic
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('close-btn');

  // Kiểm tra trạng thái popup đã bị tắt chưa
  const popupClosed = localStorage.getItem('popupClosed');

  if (!popupClosed) {
    // Chỉ hiển thị popup nếu chưa bị tắt
    popup.style.display = 'flex';
  }

  // Đóng popup và lưu trạng thái vào localStorage
  closeBtn?.addEventListener('click', () => {
    popup.style.display = 'none';
    localStorage.setItem('popupClosed', 'true'); // Ghi nhớ trạng thái đã tắt
  });
});
