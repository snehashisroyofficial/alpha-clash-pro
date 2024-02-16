// function play(){

//   //step:1 hide home screen  | you need to use hidden properties

//   const homeSection = document.getElementById('home-section')
//   homeSection.classList.add('hidden')

//   //step:1 show the playground   | you need to use remove hidden properties
// const playGround  = document.getElementById('play-ground')
// playGround.classList.remove('hidden')
// }



/**
 * 
 * THIS WAS WRITTEN BY ME !
 * 
 */


document.addEventListener('keyup', keyPressEvent)

function keyPressEvent(event) {
  const keyPress = event.key;    // we find which key i was press


  const showOnTheScreen = document.getElementById('current-alphabet');
  const currentInnerWord = showOnTheScreen.innerText;                           //here we find the word which is showing on the screen 
  const currentWord = currentInnerWord.toLowerCase();

  if (keyPress === currentWord) {
    console.log("Nice You type correct Input");

    // target the score id 
    const currentScoreElement = document.getElementById('currentScore')
    const currentScoreInner = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreInner);

    // update score card 
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;


    removeBackgroundId(currentWord);
    continueGame();
  }
  else {

    //target the life score card 

    const lifeScoreElement = document.getElementById('life-score');
    const lifeScoreInnerText = lifeScoreElement.innerText;
    const lifeScore = parseInt(lifeScoreInnerText);



    //update the score card 
    const newLifeScore = lifeScore - 1;
    // show the score 
    lifeScoreElement.innerText = newLifeScore;


    console.log("Wrong Type!")
    removeBackgroundId(currentWord);
    continueGame();

  }


}




function play() {
  showHidden('home-screen');
  hideHidden('play-ground');
  continueGame();
}


function continueGame() {

  //get random word
  const finalWord = getAlphabets();


  //show random word on the screen 
  const showRandomAlphabet = document.getElementById('current-alphabet')
  showRandomAlphabet.innerText = finalWord;


  //highlight color of the random word 
  setBackgroundColorById(finalWord);   // here we target finalword and send as a parameter value !


}


