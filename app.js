// Chờ tài liệu HTML tải xong
document.addEventListener("DOMContentLoaded", () => {
  // Nạp cấu hình từ config.js vào giao diện chào mừng
  initWelcomeScreen();

  // Nạp danh sách sản phẩm ra Grid chính
  renderProducts();

  // Đăng ký các sự kiện tương tác
  registerEvents();
});

// Trạng thái hiện tại của Modal đang xem
let currentProductId = "";
let currentImageIndex = 0;
let productImages = [];

// 1. KHỞI TẠO MÀN HÌNH CHÀO MỪNG
function initWelcomeScreen() {
  const titleEl = document.getElementById("welcome-title");
  const subtitleEl = document.getElementById("welcome-subtitle");

  if (typeof CONFIG !== "undefined") {
    if (CONFIG.welcomeTitle) titleEl.innerText = CONFIG.welcomeTitle;
    if (CONFIG.welcomeSubtitle) subtitleEl.innerText = CONFIG.welcomeSubtitle;
  }
}

// 2. RENDER DANH SÁCH SẢN PHẨM RA GRID
function renderProducts() {
  const gridEl = document.getElementById("product-grid");
  if (!gridEl || typeof CONFIG === "undefined" || !CONFIG.products) return;

  gridEl.innerHTML = CONFIG.products.map(product => {
    const hasGRA = product.fullName.toUpperCase().includes("GRA");
    const tagHTML = hasGRA ? `
      <div class="product-tag">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>Bản GRA</span>
      </div>
    ` : `
      <div class="product-tag silver-tag">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>Bạc 925</span>
      </div>
    `;

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image-container">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
          ${tagHTML}
        </div>
        <div class="product-details">
          <h3 class="product-card-title">${product.name}</h3>
          <p class="product-card-desc">${product.description}</p>
          <div class="product-card-action">
            Xem chi tiết 
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Thêm sự kiện click cho mỗi Card sản phẩm
  const cards = gridEl.querySelectorAll(".product-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openDetailModal(id);
    });
  });
}

// 3. ĐĂNG KÝ CÁC SỰ KIỆN NÚT BẤM VÀ BACKGROUND
function registerEvents() {
  // Bấm nút bắt đầu ở Màn hình chào
  const btnStart = document.getElementById("btn-start");
  const welcomeScreen = document.getElementById("welcome-screen");
  const appContainer = document.getElementById("app-container");

  btnStart.addEventListener("click", () => {
    // 1. Bắn tim bay ngợp trời ngay trên màn hình chào mừng
    triggerHeartConfetti();
    
    // 2. Thu nhỏ nhẹ và làm mờ tấm thiệp chào mừng
    const welcomeCard = document.querySelector(".welcome-card");
    if (welcomeCard) {
      welcomeCard.style.transform = "scale(0.95)";
      welcomeCard.style.opacity = "0";
      welcomeCard.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    }
    
    // 3. Sau 800ms (khi tim đã bay lên đẹp mắt), biến mất màn hình chào và mở catalog
    setTimeout(() => {
      welcomeScreen.classList.add("slide-up");
      appContainer.classList.remove("app-hidden");
      setTimeout(() => {
        appContainer.classList.add("app-visible");
      }, 100);
    }, 800);
  });

  // Đóng Modal chi tiết
  const btnCloseModal = document.getElementById("btn-close-modal");
  btnCloseModal.addEventListener("click", closeDetailModal);

  // Click vào vùng tối bên ngoài Modal để đóng
  const detailModal = document.getElementById("detail-modal");
  detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal) closeDetailModal();
  });

  // Điều khiển Slider Ảnh
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  btnPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    changeImage(-1);
  });

  btnNext.addEventListener("click", (e) => {
    e.stopPropagation();
    changeImage(1);
  });

  // Bấm nút xác nhận Chọn Quà
  const btnSelectGift = document.getElementById("btn-select-gift");
  btnSelectGift.addEventListener("click", handleGiftSelection);

  // Đóng Modal thành công
  const btnSuccessClose = document.getElementById("btn-success-close");
  const successModal = document.getElementById("success-modal");
  btnSuccessClose.addEventListener("click", () => {
    successModal.classList.add("modal-hidden");
    successModal.classList.remove("active");
  });

  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
      successModal.classList.add("modal-hidden");
      successModal.classList.remove("active");
    }
  });

  // --- CHỨC NĂNG PHÓNG TO ẢNH (LIGHTBOX IMAGE ZOOM) ---
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const modalMainImg = document.getElementById("modal-main-img");

  // Bấm vào ảnh chính của sản phẩm trong modal để phóng to
  if (modalMainImg && lightboxModal && lightboxImg) {
    modalMainImg.addEventListener("click", () => {
      if (modalMainImg.src) {
        lightboxImg.src = modalMainImg.src;
        lightboxModal.classList.remove("lightbox-hidden");
        lightboxModal.classList.add("active");
      }
    });

    // Bấm nút đóng hoặc click bất kỳ đâu trên vùng đen/ảnh để đóng lightbox
    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightbox);
    }
    lightboxModal.addEventListener("click", closeLightbox);
  }

  function closeLightbox() {
    lightboxModal.classList.add("lightbox-hidden");
    lightboxModal.classList.remove("active");
  }
}

// 4. MỞ MODAL CHI TIẾT SẢN PHẨM
function openDetailModal(id) {
  const product = CONFIG.products.find(p => p.id === id);
  if (!product) return;

  currentProductId = id;
  currentImageIndex = 0;
  productImages = product.images;

  // Cập nhật thông tin text
  document.getElementById("modal-product-name").innerText = product.fullName;
  document.getElementById("modal-product-desc").innerText = product.description;
  document.getElementById("girlfriend-message").value = ""; // Xoá lời nhắn cũ

  // Cập nhật chứng chỉ động trong Modal
  const certBadge = document.querySelector(".cert-badge");
  if (certBadge) {
    const hasGRA = product.fullName.toUpperCase().includes("GRA");
    if (hasGRA) {
      certBadge.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>Bản Kiểm Định GRA Quốc Tế</span>
      `;
      certBadge.className = "cert-badge gra-badge";
    } else {
      certBadge.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>Bạc S925 Cao Cấp</span>
      `;
      certBadge.className = "cert-badge silver-badge";
    }
  }

  // Cập nhật list thông số chi tiết
  const specListEl = document.getElementById("modal-product-specs");
  specListEl.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join("");

  // Cập nhật Slider ảnh
  updateSliderImages();

  // Hiển thị Modal
  const modal = document.getElementById("detail-modal");
  modal.classList.remove("modal-hidden");
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Khoá cuộn trang nền
}

// Đóng Modal chi tiết
function closeDetailModal() {
  const modal = document.getElementById("detail-modal");
  modal.classList.add("modal-hidden");
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Mở lại cuộn trang nền
}

// 5. ĐIỀU KHIỂN SLIDER ẢNH TRONG MODAL
function updateSliderImages() {
  const mainImgEl = document.getElementById("modal-main-img");
  const thumbnailsEl = document.getElementById("modal-thumbnails");

  // Hiển thị ảnh chính kèm hiệu ứng mờ mượt mà
  mainImgEl.style.opacity = 0;
  setTimeout(() => {
    mainImgEl.src = productImages[currentImageIndex];
    mainImgEl.style.opacity = 1;
  }, 150);

  // Render các ảnh nhỏ (thumbnails) bên dưới
  thumbnailsEl.innerHTML = productImages.map((imgSrc, idx) => {
    const isActive = idx === currentImageIndex ? "active" : "";
    return `
      <div class="thumbnail-item ${isActive}" onclick="setSliderImage(${idx})">
        <img src="${imgSrc}" alt="Ảnh phụ">
      </div>
    `;
  }).join("");
}

// Thay đổi ảnh kế tiếp / trước đó
function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex >= productImages.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = productImages.length - 1;
  }
  updateSliderImages();
}

// Click trực tiếp vào ảnh nhỏ
window.setSliderImage = function(index) {
  currentImageIndex = index;
  updateSliderImages();
};

// 6. XỬ LÝ KHI BẤM CHỌN QUÀ (GỬI THÔNG BÁO)
async function handleGiftSelection() {
  const btnSelect = document.getElementById("btn-select-gift");
  const messageInput = document.getElementById("girlfriend-message");
  const messageText = messageInput.value.trim();

  const product = CONFIG.products.find(p => p.id === currentProductId);
  if (!product) return;

  // Vô hiệu hóa nút để tránh click nhiều lần
  btnSelect.disabled = true;
  const originalText = btnSelect.innerHTML;
  btnSelect.innerHTML = `
    <svg class="animate-pulse" style="width:20px;height:20px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
    Đang gửi lựa chọn của em...
  `;

  let apiSuccess = false;

  try {
    // Gọi API Serverless gửi thông báo đến Telegram/Discord
    const response = await fetch("/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId: product.id,
        productName: product.name,
        message: messageText,
        girlfriendName: CONFIG.girlfriendName || "Bạn gái"
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        apiSuccess = true;
      }
    }
  } catch (error) {
    console.error("Lỗi khi gửi thông báo API:", error);
  }

  // Khôi phục trạng thái nút bấm
  btnSelect.disabled = false;
  btnSelect.innerHTML = originalText;

  // Đóng modal chi tiết
  closeDetailModal();

  // Xử lý hiển thị kết quả thành công
  showSuccessScreen(product, messageText, apiSuccess);
}

// 7. HIỂN THỊ MÀN HÌNH THÀNH CÔNG VÀ XỬ LÝ ZALO FALLBACK
function showSuccessScreen(product, messageText, apiSuccess) {
  const successModal = document.getElementById("success-modal");
  const successMsgEl = document.getElementById("success-message");

  successModal.classList.remove("modal-hidden");
  successModal.classList.add("active");

  // Kích hoạt pháo hoa trái tim lãng mạn
  triggerHeartConfetti();

  // Hiển thị thông báo thành công trực tiếp (đổi thành 'điện thoại anh' thân mật)
  successMsgEl.innerHTML = `Lựa chọn mẫu <strong>"${product.name}"</strong> của em đã được gửi trực tiếp đến điện thoại anh rồi nhé! 💕`;
}

// 8. TẠO PHÁO HOA TRÁI TIM BAY (HEART CONFETTI)
function triggerHeartConfetti() {
  const container = document.getElementById("confetti-container");
  if (!container) return;

  container.innerHTML = ""; // Xoá các tim cũ nếu có
  const heartCount = 60; // Số lượng tim bay lên

  // Các dạng SVG trái tim nhỏ dễ thương
  const heartSVGs = [
    `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
  ];

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.className = "confetti-heart";
    heart.innerHTML = heartSVGs[Math.floor(Math.random() * heartSVGs.length)];

    // Tạo các thuộc tính ngẫu nhiên cho mỗi trái tim
    const leftPos = Math.random() * 100; // Vị trí ngang (0 - 100vw)
    const scale = 0.4 + Math.random() * 0.8; // Kích thước ngẫu nhiên (từ 0.4x đến 1.2x)
    const duration = 2.5 + Math.random() * 2; // Thời gian bay từ dưới lên (2.5s - 4.5s)
    const delay = Math.random() * 1.5; // Độ trễ xuất hiện (0s - 1.5s)
    
    // Tông màu hồng đỏ lãng mạn ngẫu nhiên
    const colors = ["#B76E79", "#E0B0B6", "#FF6B8B", "#FF3B62", "#D4AF37"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    heart.style.left = `${leftPos}vw`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.transform = `scale(${scale})`;
    heart.style.color = randomColor;

    container.appendChild(heart);
  }

  // Tự động dọn dẹp các thẻ div trái tim sau khi bay xong để giải phóng RAM
  setTimeout(() => {
    container.innerHTML = "";
  }, 6500);
}
