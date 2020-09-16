let inputNumber = document.querySelector('.number');
let inputColor = document.querySelector('.color');
let wraper = document.querySelector('.wraper');
let counter = 0;


function containerAdd() {
    let blocksContainer = document.createElement('div');
    blocksContainer.className = 'container';
    wraper.append(blocksContainer);
}

function blocksAdd(number) {
    let block = document.createElement('div');
    let blockText = document.createElement('p');
    let blocksContainer = document.querySelector('.container');

    block.className = 'block';
    blockText.className = 'block__text';
    blockText.textContent = number;

    blocksContainer.append(block);
    block.append(blockText);
} 

inputNumber.addEventListener('change', function () { 
    let container = document.querySelector('.container');

    if (inputNumber.value == 0) { 
        container.remove();
    }

    if (!container) { 
        containerAdd();
    } 

    let blocks = document.querySelector('.block');
    if (blocks) { 
        container.remove();
        containerAdd();
    }

    for (let i = 1; i <= inputNumber.value; i++) { 
        blocksAdd(i);
    }
})

inputColor.addEventListener('change', function () { 
    let blocks = document.querySelectorAll('.block');
    counter++;
    if (counter % 2 !== 0) {
        for (let i = 0; i < blocks.length; i += 2) {
            blocks[i].style.backgroundColor = inputColor.value;
            blocks[i+1].style.backgroundColor = 'transparent';
        }
    } else { 
        for (let i = 0; i < blocks.length; i += 2) {
            blocks[i].style.backgroundColor = 'transparent';
            blocks[i+1].style.backgroundColor = inputColor.value;
        }
    }
})
