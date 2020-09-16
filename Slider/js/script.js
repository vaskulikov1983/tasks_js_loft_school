let list = document.querySelector('.slider__list');
let prevButton = document.querySelector('.slider__controls_prev');
let nextButton = document.querySelector('.slider__controls_next');
let position = 0;

prevButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (position < 0) {
        position += 152;
        list.style.transform = 'translateX' + '(' + position + 'px' + ')';
    }
})

nextButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (position > -760) {
        position -= 152;
        list.style.transform = 'translateX' + '(' + position + 'px' + ')';
    }
});