let wraper = document.querySelector('.wraper');
let button = document.querySelector('.button');

button.addEventListener('click', function (evt) { 
    evt.preventDefault();
    let overlay = document.createElement('div');
    let modal = document.createElement('div');
    let modalText = document.createElement('p');
    let modalClose = document.createElement('a');

    modalClose.href = '#';
    
    //class add
    overlay.className = 'overlay';
    modal.className = 'modal';
    modalText.className = 'modal__text';
    modalClose.className = 'modal__close';

    //text add
    modalText.innerHTML = 'Hello, <b>World!</b>';
    modalClose.textContent = 'x';

    //append elements on page
    wraper.appendChild(overlay);
    overlay.append(modal);
    modal.append(modalText);
    modal.append(modalClose);

    overlay.addEventListener('click', function (evt) {
        if (evt.target == modalClose || evt.target == overlay) { 
            overlay.remove();
        }
    });       
})