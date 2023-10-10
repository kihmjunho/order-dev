const itemListEl = document.querySelector('.item__list');
const itemEls = document.querySelectorAll('.item__item');
const countEl = document.querySelector('.count');

itemListEl.style.width = `${itemEls.length * 435}px`;
countEl.innerText = `${itemEls.length}개의 코멘트가`;
