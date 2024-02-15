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