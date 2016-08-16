'use strict';

alert('PLEASE answer these questions with Yes, No, Y or N and not other crap!');
var currentQuestion;
var questionArray = new Array();
var answer;
var answerArray = new Array();
var answerCount = 0;

// On to the questions and answers, including checking the validity...
currentQuestion = 'Was John born in the Pacific Northwest?';
answer = prompt(currentQuestion).toLowerCase();
questionArray.push(currentQuestion);
answerArray.push(answer);

if (answer === 'y' || answer === 'yes') {
  // it's a YES!
  alert('You got that right! He was born in Washington state.');
  answerCount++;
} else if (answer === 'n' || answer === 'no') {
  // that is a NO.
  alert('Sorry, that is not the right answer: he actually was born in the PacNW.');
} else {
  // the answer was crap!
  alert('Now, did you not read that answers could only be Yes, No, Y or N? Illiterate much? Or simply contrary?');
}
console.log('For the question:', currentQuestion, 'the answer supplied was:', answer);

currentQuestion = 'Does John have a valid passport?';
answer = prompt(currentQuestion).toLowerCase();
questionArray.push(currentQuestion);
answerArray.push(answer);

if (answer === 'y' || answer === 'yes') {
  // it's a YES!
  alert('Yeppers, John has a valid passport! He can leave the country. Hm...');
  answerCount++;
} else if (answer === 'n' || answer === 'no') {
  // that is a NO.
  alert('No, no, no! He does have a valid one!');
} else {
  // the answer was crap!
  alert('Stop with the bad input, already!');
}
console.log('For the question:', currentQuestion, 'the answer supplied was:', answer);

currentQuestion = 'Has John ever had a broken bone?';
answer = prompt(currentQuestion).toLowerCase();
questionArray.push(currentQuestion);
answerArray.push(answer);

if (answer === 'y' || answer === 'yes') {
  // it's a YES!
  alert('You answered YES, which is wrong-a-mundo!');
} else if (answer === 'n' || answer === 'no') {
  // that is a NO.
  alert('No, John has been lucky enough to never have had a broken bone.');
  answerCount++;
} else {
  // the answer was crap!
  alert('What?! Crap input? Please!!');
}
console.log('For the question:', currentQuestion, 'the answer supplied was:', answer);

currentQuestion = 'Has he had any viable off-spring?';
answer = prompt(currentQuestion).toLowerCase();
questionArray.push(currentQuestion);
answerArray.push(answer);

if (answer === 'y' || answer === 'yes') {
  // it's a YES!
  alert('Yeah, no. John does not have any off-spring. Unless those aliens have done something nefarious...');
} else if (answer === 'n' || answer === 'no') {
  // that is a NO.
  alert('No children for John. He\'s enough of a child on his own. Correct!');
  answerCount++;
} else {
  // the answer was crap!
  alert('Bad input is just childish!');
}
console.log('For the question:', currentQuestion, 'the answer supplied was:', answer);

currentQuestion = 'Is John a friend-of-dogs?';
answer = prompt(currentQuestion).toLowerCase();
questionArray.push(currentQuestion);
answerArray.push(answer);

if (answer === 'y' || answer === 'yes') {
  // it's a YES!
  alert('Yes, he is a friend to dogs. At least friendly ones.');
  answerCount++;
} else if (answer === 'n' || answer === 'no') {
  // that is a NO.
  alert('Just what do you think of John?!!? He is shocked!');
} else {
  // the answer was crap!
  alert('Invalid input is for the dogs.');
}
console.log('For the question:', currentQuestion, 'the answer supplied was:', answer);

console.log('There were ' + answerCount + ' correct answers, out of 5 total.');

for (var i = 0; i < questionArray.length; i++) {
  console.log('Q: ' + questionArray[i] + ' A: ' + answerArray[i]);
};
