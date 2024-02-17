

/**
 * 
 * THIS WAS WRITTEN BY ME !
 * 
 */



function addHidden(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')

}

function removeHidden(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



function getAlphabets() {
    //create a alphabets arrays 
    const alphabetString = 'abcdefghijklmnopqrtuvwxyz'
    const arrayAlphabets = alphabetString.split('');

    // generate 0-25 a random numbers 
    const randomNumbers = Math.random() * 25
    const index = Math.round(randomNumbers);

    //get random word 
    const alphabetsWord = arrayAlphabets[index];
    return alphabetsWord;

}


function getTextElementId(elementId) {
    const getTextElement = document.getElementById(elementId);
    const getText = getTextElement.innerText;
    let Text = parseInt(getText);
    return Text;


}


function setTextElement(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}
//set highlight color  that is showing on the screen 
function setBackgroundColorById(elementId) {
    const highlight = document.getElementById(elementId);
    highlight.classList.add('bg-orange-400');
}

function removeBackgroundId(elementId) {
    const highlight = document.getElementById(elementId);
    highlight.classList.remove('bg-orange-400');
}


function gameOver() {
    addHidden('play-ground');
    removeHidden('final-score');
}