// DOM操作で「Back to Project」ボタンを取得
const backToProjectBtn = document.querySelector('.btn.primary');

// クリックされたら localStorage に情報を保存
backToProjectBtn.addEventListener('click', function (event) {
  event.preventDefault(); // デフォルトのリンク動作を止める
  localStorage.setItem('scrollTarget', 'projects'); // スクロール先を保存
  window.location.href = '../index.html'; // index.html に遷移する
});
