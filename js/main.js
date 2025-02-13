const swiper = new Swiper('.swiper', {
// цикличный слайдер
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

});

// Получаем кнопку и контейнер слайдов 
const button = document.querySelector('.toggle-button'); //вызов через класс
const swiperWrapper = document.querySelector('.swiper-wrapper');
const image = document.querySelector('.expand');


// Добавляем обработчик клика
button.addEventListener('click', () => {
// Переключаем класс expanded
swiperWrapper.classList.toggle('expanded');


// Меняем текст кнопки в зависимости от состояния
if (swiperWrapper.classList.contains('expanded')) {
    button.textContent = 'Скрыть';
    image.src = './img/expand_.svg'; // Новый путь к рисунку
} else {
    button.textContent = 'Показать все';
    image.src = './img/expand.svg'; // Старый путь
}
});