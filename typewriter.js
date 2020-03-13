const typedElement = document.getElementById('typedWord');
console.log(typedElement);
const keywords = ['Developer', 'Gamer', 'Geek'];    //Stuff you want to print
let len = 0;

async function init() {
    type(keywords[0], len);
}; 

async function type(keyword, len){

    //initial wait
    await new Promise(r => setTimeout(r, 1000));    //interval before typing the next word

    //FORWARD PRINT
    while (len<=keyword.length){
        printOneLetter(keyword, len);
        len++;
        await new Promise(r => setTimeout(r, 150)); //sleep implementation - speed of forward typing
    }

    //interval
    await new Promise(r => setTimeout(r, 2000));    //interval between finishing of typing of a word, and the start of its deletion

    //ERASING
    while (len>=0){
        printOneLetter(keyword, len);
        len--;
        await new Promise(r => setTimeout(r, 75)); //speed of character deletion
    }

    //RECURSION
    let x = keywords.indexOf(keyword);
    if(x === keywords.length-1) {
        type(keywords[0], 0);
    } else {
        type(keywords[x+1], 0);
    }
    
};

const printOneLetter = (keyword, len) => {
    let text = keyword.substring(0,len);
    typedElement.innerHTML = `<span id='cursor'>${text}</span>`;    //you can add a cursor effect by adding a right-border to #cursor in your css, if that is not required, just set the innerHTML to the 'text' variable 
};

document.addEventListener('DOMContentLoaded', init);