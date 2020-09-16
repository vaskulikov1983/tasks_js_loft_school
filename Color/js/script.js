let inputNumber = document.querySelector('.number');
let inputColor = document.querySelector('.color');
let wraper = document.querySelector('.wraper');
let counter = 0;

inputNumber.addEventListener('change', function () { 
    counter += 1;
    console.log(counter);
    let blocksContainer = document.createElement('div');
    let block = document.createElement('div');
    let blockText = document.createElement('p');

    

    blocksContainer.className = 'container';
    block.className = 'block';
    blockText.className = 'block__text';
    blockText.textContent = inputNumber.value;
    
    if (counter == 1) {
        wraper.append(blocksContainer);
        blocksContainer.append(block);
        block.append(blockText);
    } else { 
        blocksContainer = document.querySelector('.container');
        blocksContainer.append(block);
        block.append(blockText); 
    }
        
    
})