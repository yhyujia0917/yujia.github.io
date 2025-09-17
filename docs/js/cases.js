// ---------------------------------------------
// 案例輪播功能（支援多組輪播）僅 cases.html 執行
// ---------------------------------------------
const caseSliders = document.querySelectorAll('.caseSlides');

if (caseSliders.length > 0) {
  caseSliders.forEach((slider) => {
    let currentIndex = 0;
    const slides = slider.querySelectorAll('.slide');

    // ? 自動根據圖片數量設定 .caseSlides 的總寬度
    slider.style.width = `${slides.length * 100}%`;

    const parent = slider.closest('.slider');
    const prevBtn = parent.querySelector('.controls-left');
    const nextBtn = parent.querySelector('.controls-right');

    function update() {
      slider.style.transform = `translateX(-${100 * currentIndex}%)`;
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % slides.length;
      update();
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      update();
    }

    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    setInterval(showNext, 5000); // ?? 每5秒自動播放
    update();
  });
}
document.querySelectorAll('.caseSlides').forEach((slider) => {
  let currentIndex = 0;
  const slides = slider.querySelectorAll('.slide');
  const parent = slider.closest('.slider');
  const prevBtn = parent.querySelector('.controls-left');
  const nextBtn = parent.querySelector('.controls-right');

  function update() {
    slider.style.transform = `translateX(-${100 * currentIndex}%)`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    update();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    update();
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
  }

  // 加入自動輪播（每5秒切換）
  setInterval(showNext, 5000);

  update(); // 初始化
});
