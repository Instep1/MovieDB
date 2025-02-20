'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bgMain = document.querySelector('.promo__bg'),
      interact = document.querySelector('.promo__interactive-list');


advertising.forEach(item => {
    item.remove();
});


genre.textContent = 'ДРАМА';


bgMain.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';


movieDB.movies.sort().forEach((item, i) => {
    interact.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i + 1}. ${item}<div class="delete"></div></li>`)
})