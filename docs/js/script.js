// 當前幻燈片索引
let currentIndex = 0;

// 抓取幻燈片容器與總數
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

// 顯示目前第幾張
const indicator = document.getElementById('slide-indicator');

// 更新幻燈片畫面與指示器
function updateSlide() {
  slides.style.transform = 'translateX(' + (-100 * currentIndex) + '%)';
  indicator.textContent = '第 ' + (currentIndex + 1) + ' 張 / 共 ' + totalSlides + ' 張';
}

// 下一張
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

// 上一張
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// 滾動到內容區（中間⬇箭頭點擊用）
function scrollToContent() {
  document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
}

// 自動每 4 秒切換一張幻燈片
setInterval(nextSlide, 4000);

// 初始化顯示第一張
updateSlide();

// 滾動事件：顯示或隱藏右下「回頂部」按鈕
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

// 點擊右下箭頭 → 平滑回到最上方
document.getElementById("backToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
