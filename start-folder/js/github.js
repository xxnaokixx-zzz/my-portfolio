// GitHub検索機能のJavaScript
document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('githubbtn');
  const usernameInput = document.getElementById('username');
  const resultDiv = document.getElementById('result');

  searchButton.addEventListener('click', searchUser);

  // Enterキーでも検索できるようにする
  usernameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searchUser();
    }
  });

  function searchUser() {
    const username = usernameInput.value.trim();

    if (!username) {
      resultDiv.innerHTML = '<p class="error-message">ユーザー名を入力してください</p>';
      return;
    }

    // ローディング表示
    resultDiv.innerHTML = '<div class="loading"></div>';

    // GitHub APIを使用してユーザー情報を取得
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('ユーザーが見つかりませんでした');
        }
        return response.json();
      })
      .then(user => {
        // 結果を表示
        displayUserProfile(user);
      })
      .catch(error => {
        resultDiv.innerHTML = `<p class="error-message">${error.message}</p>`;
      });
  }

  function displayUserProfile(user) {
    // 指定された情報を表示
    resultDiv.innerHTML = `
      <div class="github-profile">
        <img src="${user.avatar_url}" alt="${user.login}" class="github-avatar">
        <div class="github-info">
          <h3 class="github-name">${user.name || 'No Name'}</h3>
          <p class="github-username">@${user.login}</p>
          <div class="github-stats">
            <div class="github-stat">
              <span class="github-stat-count">${user.followers}</span> フォロワー
            </div>
            <div class="github-stat">
              <span class="github-stat-count">${user.public_repos}</span> 公開リポジトリ
            </div>
          </div>
          <div class="github-links">
            <a href="${user.html_url}" target="_blank" class="github-link">GitHubプロフィールを見る</a>
          </div>
        </div>
      </div>
    `;
  }
});