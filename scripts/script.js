const sizeBox = document.getElementById('sizeField');
const applyButton = document.getElementById('applyButton');
const sketchpad = document.getElementById('sketchpad');

let sketchSize = sizeBox.value;

applyButton.addEventListener('click', (e) => {
    sketchSize = sizeBox.value;
    createGrid();
})

function createGrid() {
    // Empty the sketchpad
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.firstChild);
    }

    // Change the grid size
    sketchpad.style.gridTemplateColumns = 'repeat(' + sketchSize + ', 1fr)';
    sketchpad.style.gridTemplateRows = 'repeat(' + sketchSize + ', 1fr)';
    
    // Create all the cells of the grid
    for (let i = 0; i < sketchSize**2; i++) {
        const tempDiv = document.createElement('div');
        tempDiv.style.border = '1px solid black';

        tempDiv.addEventListener('mouseenter', (e) => {
            tempDiv.classList.toggle("inked");
        })

        sketchpad.appendChild(tempDiv);
    }
}

createGrid();