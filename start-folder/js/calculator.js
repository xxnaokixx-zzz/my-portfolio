// DOM操作で「Back to Project」ボタンを取得
const backToProjectBtn = document.querySelector('.btn.primary');

// クリックされたら localStorage に情報を保存
backToProjectBtn.addEventListener('click', function (event) {
  event.preventDefault(); // デフォルトのリンク動作を止める
  localStorage.setItem('scrollTarget', 'projects'); // スクロール先を保存
  window.location.href = '../index.html'; // index.html に遷移する
});

document.addEventListener('DOMContentLoaded', function () {
    const value1Input = document.getElementById('value1');
    const value2Input = document.getElementById('value2');
    const choiceSelect = document.getElementById('choice');
    const formulaDisplay = document.getElementById('formula');
    const resultDisplay = document.getElementById('result');
  
    function calculate() {
      const value1 = Number(value1Input.value);
      const value2 = Number(value2Input.value);
      const operator = choiceSelect.value;
  
      let formulaText = '';
      let result = 0;
  
      if (operator === 'addition') {
        formulaText = `${value1} + ${value2}`;
        result = value1 + value2;
      } else if (operator === 'subtraction') {
        formulaText = `${value1} - ${value2}`;
        result = value1 - value2;
      } else if (operator === 'multiplication') {
        formulaText = `${value1} × ${value2}`;
        result = value1 * value2;
      } else if (operator === 'division') {
        formulaText = `${value1} ÷ ${value2}`;
        result = value2 !== 0 ? value1 / value2 : 'エラー（0で割れません）';
      }
  
      formulaDisplay.textContent = formulaText;
      resultDisplay.textContent = result;
    }
  
    // 入力欄の変更でも計算するようにイベント追加！
    value1Input.addEventListener('input', calculate);
    value2Input.addEventListener('input', calculate);
    choiceSelect.addEventListener('change', calculate);
  
    // 初回読み込み時にも1回計算する
    calculate();
  });
  