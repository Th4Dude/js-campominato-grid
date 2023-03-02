'use strict'

{/* <div class="cell">1</div> */}




/* -------functions------- */
function createCell(elemento, nomeClass){
    const cellElement = document.createElement(elemento);
    cellElement.classList.add(nomeClass);
    return cellElement
}

function containerCellsAppend(container, elemento){
    container.append(elemento);
}


/* -------functions------- */


const containerCells = document.querySelector('.container-cells')

const elementoCreato = createCell('div' , 'cell');

containerCellsAppend(containerCells,elementoCreato);

