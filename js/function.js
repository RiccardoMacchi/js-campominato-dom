// funzione creazione element

function newElCl(tag,classAdd){
    let myBox = document.createElement(tag)
    myBox.className = classAdd
    return myBox
}

// Generazione numeri random
function randNumMinMax(min,max){
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num
}

// Generazione arry da 16 numeri random da min a max
function genRandSeq(min,max){

    const arryNum = [];

    while (arryNum.length < 16){
        let num = randNumMinMax(min,max)

        if (!arryNum.includes(num)){
            arryNum.push(num);
        }
    }
    return arryNum
}

