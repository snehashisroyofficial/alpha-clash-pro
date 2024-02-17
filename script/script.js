

/**
 * 
 * THIS WAS WRITTEN BY ME !
 * 
 */



/**
 * 
 * ----------------------------------------STEP 1 --------------------------------------
 * 
 * 
 */

function play() {

  //hide everything and show only playground 
  addHidden('home-screen');
  addHidden('final-score');
  removeHidden('play-ground');

  //reset score to default 
  setTextElement('life-score', 10)
  setTextElement('current-score', 0)



  continueGame();




}


/**
 * 
 * ----------------------------------------STEP 2 --------------------------------------
 * 
 * 
 */

function continueGame() {

  //get random word
  const finalWord = getAlphabets();


  //show random word on the screen 
  const showRandomAlphabet = document.getElementById('current-alphabet')
  showRandomAlphabet.innerText = finalWord;


  //highlight color of the random word 
  setBackgroundColorById(finalWord);   // here we target finalword and send as a parameter value !


}


/**
 * 
 * ----------------------------------------STEP 3 --------------------------------------
 * 
 * 
 */
document.addEventListener('keyup', keyPressEvent);

function keyPressEvent(event) {
  const keyPress = event.key;    // we find which key i was press


  const showOnTheScreen = document.getElementById('current-alphabet');
  const currentInnerWord = showOnTheScreen.innerText;                           //here we find the word which is showing on the screen 
  const currentWord = currentInnerWord.toLowerCase();

  if (keyPress === currentWord) {

    const currentScoreNew = getTextElementId('current-score');   //আমরা এখানে currentscore টিকে টার্গেট করেছি function এর মাধ্যমে
    const newScore = currentScoreNew + 1;
    setTextElement('current-score', newScore);    // নতুন score টিকে পুরানো update করা হচ্ছে পুরানোটির পরিবর্তে    !!!!!!(universal)!!!!!!!!


    removeBackgroundId(currentWord);
    continueGame();
  }
  else {

    const currentLifeScore = getTextElementId('life-score')
    const newScore = currentLifeScore - 1;
    setTextElement('life-score', newScore)
    removeBackgroundId(currentWord);
    continueGame();

    if (newScore === 0) {
      gameOver();
    }

  }
}


