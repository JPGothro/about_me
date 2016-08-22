'use strict';

var userName = prompt('Please enter your name.');
if (userName.length === 0) {
  alert('I did not get your name, so you will be known as "Nameless"');
  userName = 'Nameless';
}

alert('PLEASE answer these questions with Yes, No, Y or N only');
var currentQuestion;
var questionArray = new Array();
var answer;
var answerArray = new Array();
var answerCount = 0;

var theQuestions = ['Was John born in the Pacific Northwest?', 'Does John have a valid passport?', 'Has John ever had a broken bone?', 'Has he had any viable off-spring?', 'Is John a friend-of-dogs?'];
var correctAnswers = ['yes', 'yes', 'no', 'no','yes'];
var incorrectAnswers = ['no', 'no', 'yes', 'yes', 'no'];
var correctMessages = ['You got that right! He was born in Washington state.', 'Yeppers, John has a valid passport! He can leave the country. Hm...', 'No, John has been lucky enough to never have had a broken bone.', 'No children for John. He\'s enough of a child on his own. Correct!', 'Yes, he is a friend to dogs. At least friendly ones.'];

for (var k = 0; k < theQuestions.length; k++) {
  basicQuestion(k);
}

// On to the questions and answers, including checking the validity...
function basicQuestion(setId) {
  currentQuestion = theQuestions[setId];
  answer = prompt(currentQuestion).toLowerCase();
  questionArray.push(currentQuestion);
  answerArray.push(answer);

  if (answer === correctAnswers[setId] || answer === correctAnswers[setId][0]) {
    // it's a YES!
    alert(correctMessages[setId]);
    answerCount++;
  } else if (answer === incorrectAnswers[setId] || answer === incorrectAnswers[setId][0]) {
    // that is a NO.
    alert('Sorry, that is the wrong answer.');
  } else {
    // the answer was crap!
    alert('Now, did you not read that answers could only be Yes, No, Y or N? Illiterate much? Or simply contrary?');
  }
  console.log('For the question:', currentQuestion, 'the answer supplied was:', answer);
}

console.log('There were ' + answerCount + ' correct answers, out of 5 total.');

for (var i = 0; i < questionArray.length; i++) {
  console.log('Q: ' + questionArray[i] + ' A: ' + answerArray[i]);
};

// Adding a number guessing game.
function numberGuessingGame() {
  alert('Welcome to my next guessing game.');
  alert('An integer has been chosen at random from 1 to 10. You have 4 chances to guess it.');

  var randomNum = Math.floor(Math.random() * 10) + 1;
  console.log('the random number is:', randomNum);

  var gotIt = false;
  var userGuess = '';
  for (var j = 0 ; j < 4 ; j++ ){
    userGuess = prompt('Please, guess a number from 1 to 10');
    if (userGuess === NaN) {
      alert('Numbers only, please!');
    }
    var userGuessNum = parseInt(userGuess);
    if (randomNum === userGuessNum) {
      alert('You got it!');
      // count that you got it, then end the loop.
      if (!gotIt) {
        answerCount++;
        gotIt = true;
        j = 100;
      }
      console.log('Guessed the right number on try #', j + 1);
    } else if (randomNum > userGuessNum) {
      alert('Your guess was too low. Try again.');
    } else {
      alert('That guess was too high. Try again.');
    }
  }
}
numberGuessingGame();

// Adding another guessing game.
function stateGuessingGame() {
  alert('Welcome to another guessing game.');
  alert('Aside from Oregon, guess a state I have lived in. You have up to 6 chances to hit one.');

  var statesVisitedArray = ['New Jersey', 'Ohio', 'Washington'];
  console.log('the possible state answers are:', statesVisitedArray.join(', '));
  var stateGuessed = false;
  var stateCount = 1;
  var userGuess = '';

  while (stateCount < 7 && !stateGuessed) {
    userGuess = prompt('Your guess, please: spelling counts!');
    userGuess = userGuess.toLowerCase();
    for (var k = 0; (k < statesVisitedArray.length && !stateGuessed); k++){
      if (userGuess === statesVisitedArray[k].toLowerCase()) {
        stateGuessed = true;
        alert('Yes, that is one of them. They are all: ' + statesVisitedArray.join(', '));
        answerCount++;
      }
    }
    if (!stateGuessed) {
      stateCount++;
    }
  }

  if (!stateGuessed) {
    alert('Sorry you did not guess one. They are all: ' + statesVisitedArray.join(', '));
  }
}
stateGuessingGame();

// Let the user know how they did on all that guessing.
switch (answerCount){
case 0:
  alert('Not a single correct answer (out of 7 possible), ' + userName + '. Very sad!');
  break;
case 1:
  alert('Just one lonely answer out of 7 total,' + userName + '. Want to try again?');
  break;
case 2:
case 3:
case 4:
  alert('Well, ' + userName + ', you got ' + answerCount + ' correct out of 7. Better luck next time.');
  break;
case 5:
case 6:
  alert(userName + ', you got a very respectable score: ' + answerCount + ' of 7. Very nice!');
  break;
case 7:
  alert('Perfect score, ' + userName + '! 7 out of 7! Woo-hoo!');
  break;
default:
  alert('The counter didn\'t work right!');
  break;
}
