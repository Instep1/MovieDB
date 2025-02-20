'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
          interact = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          input = form.querySelector('.adding__input'),
          checkbox = form.querySelector('[type="checkbox"]');
    
    
    const deleteAdv = (array) => {
        array.forEach(item => {
            item.remove();
        });
    }

    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
    
        bgMain.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';
    }

    const sortArr = (arr) => {
        arr.sort();
    }
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(movieDB.movies);

        films.forEach((item, i) => {
        parent.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i + 1}. ${item}<div class="delete"></div></li>`)
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
        })
    })

    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let string = input.value;
        let favorite = checkbox.checked;

        if (favorite) {
            console.log('Добавляем любимый фильм');
        }

        if (string) {
            if ( string.length > 21 ) {
                string = string.slice(0, 21) + '...'; 
            } 

            movieDB.movies.push(string.toUpperCase());
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, interact)
            e.target.reset();
        }
    })

    deleteAdv(advertising);
    makeChanges();
    createMovieList(movieDB.movies, interact);

})