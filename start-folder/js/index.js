// ページが読み込まれたときに実行
document.addEventListener('DOMContentLoaded', function () {
    const target = localStorage.getItem('scrollTarget');
  
    if (target) {
      // スクロール先の要素を取得
      const section = document.getElementById(target);
  
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
  
      // 一度使ったらクリアしておく（次回の読み込みに影響しないように）
      localStorage.removeItem('scrollTarget');
    }
  });
  