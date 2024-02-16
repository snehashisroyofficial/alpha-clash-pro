

/**
 * 
 * THIS WAS WRITTEN BY ME !
 * 
 */



function showHidden(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')

}

function hideHidden(elementId) {
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


//set highlight color  that is showing on the screen 
function setBackgroundColorById(elementId) {
    const highlight = document.getElementById(elementId);
    highlight.classList.add('bg-orange-400');
}

function removeBackgroundId(elementId) {
    const highlight = document.getElementById(elementId);
    highlight.classList.remove('bg-orange-400');
}