const wrapper = document.querySelector('.wrapper');

const countEl = document.querySelector('.count');

const itemListEl = document.querySelector('.item__list');

let state = true;

let listArr = [];
let current = 0;
let co = false;
const fetchPosts = async () => {
  const response = await fetch('/api/posts');
  const posts = await response.json();
  if (current === 0) {
    current = posts.length;
  }
  countEl.innerText = `${posts.length}개의 코멘트가`;

  listArr = [];

  posts.map((item) => {
    listArr.push(`
    <li class="item__item">
      <p class="item__message">
        ${item.message}
      </p>
      <p class="item__nickname">
        <span class="item__by">by</span>
        <span class="item__nickname-text">
          ${item.nickname}
        </span>
      </p>
    </li>
  `);
  });

  itemListEl.innerHTML = listArr.join('');
  itemListEl.style.width = `${posts.length * 435}px`;
  if (current !== posts.length) {
    wrapper.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
    current = posts.length;
  }
};
// const itemListEl = document.querySelector('.item__list');
// const itemEls = document.querySelectorAll('.item__item');
// const countEl = document.querySelector('.count');

// itemListEl.style.width = `${itemEls.length * 435}px`;
// countEl.innerText = `${itemEls.length}개의 코멘트가`;
fetchPosts();
setInterval(function () {
  if (state) {
    fetchPosts();
  }
}, 2000);

window.addEventListener('mousedown', () => {
  state = false;
});

window.addEventListener('mouseup', () => {
  setTimeout(() => {
    state = true;
  }, 20000);
});

window.addEventListener('touchstart', () => {
  state = false;
  console.log('hh');
});

window.addEventListener('touchend', () => {
  console.log('lo');
  setTimeout(() => {
    state = true;
  }, 20000);
});
