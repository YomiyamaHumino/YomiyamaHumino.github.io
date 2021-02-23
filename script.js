// ナビゲーション、ヘッダ、ハンバーガを変数に格納
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');

// ナビゲーション、ヘッダ、ハンバーガを幅に合わせて切り替える
const mql = window.matchMedia('(min-width: 769px)');
function SwitchTablet(e) {
     if (e.matches) { //769px以上
          hamburger.style.display = 'none';
          header.style.display = 'inline';
          nav.style.display = 'none';

     } else {//769px未満
          hamburger.style.display = 'flex';
          header.style.display = 'none';
          nav.style.display = 'block';
     }
}

mql.addListener(SwitchTablet);
SwitchTablet(mql);

// ナビゲーションの表示・非表示
hamburger.addEventListener('click', async function () {
     if (hamburger.innerText == '≡') {
          hamburger.innerText = '×';
          nav.style.display = 'flex';
          navAnim.open();
     } else {
          hamburger.innerText = '≡';
          navAnim.close();
     }
});

//ハンバーガの開閉アニメーション
const navAnim = {
     open: async function () {
          const max = 10;
          for (let i = 0; i < max; i++) {
               await _sleep(10);
               nav.style.transform = 'translateX(' + (max - i - 1) * (-10) + '%)';
          }

     },

     close: async function () {
          const max = 10;
          for (let i = 0; i < max; i++) {
               await _sleep(10);
               nav.style.transform = 'translateX(' + (i + 1) * (-10) + '%)';
          }
     }
};

// sleep的なもの
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ナビゲーションの非表示
const trigger = document.querySelectorAll(".li-anim");
trigger.forEach(function (target) {
     target.addEventListener('click', function () {
          hamburger.innerText = '≡';
          navAnim.close();
     });
});

//フッタ作成
const footer = document.getElementById('footer');
const year = new Date().getFullYear();
footer.innerText = footer.innerText + ' 2020-' + year + ' Yomiyama Humino';
