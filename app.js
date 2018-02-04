'use strict';

//functions
const name = getName();

//arrays
const yes = ['yes', 'y', 'yup', 'sure', 'totally'];
const no = ['no', 'n', 'nope', 'nah'];
const questions = ['Do I have any pets?', 'Do I live in Oregon?', 'Am I a musician?', 'Do I like tacos?', 'Do I like video games?'];
const answers = ['1', '0', '1', '1', '1'];
yesNoQuestions();
selfishQuestions();

//converting responses to 1s and 0s
function convertGuess (string) {
    if (yes.includes(string)){
        string = '1';
    } else if (no.includes(string)){
        string = '0';
    } else {
        alert('Please respond with Yes or No! Thank you!');
    
    }
    return string;
}


// asking and checking for right answer
function yesNoQuestions() {
    for (let i = 0; i < 5; i++) {
        let response = prompt(questions[i]).toLowerCase();
        response = convertGuess(response);
        console.log('response: ' + response);
        console.log('i ' + i);
        if (response === answers[i]){
            alert('You\'re correct!');
        }
        else {
            alert('You\'re wrong! Nice try');

        }
    }
}

//asking questions

function getName() {
    const name = prompt('What is your name?');
    console.log('Their name is ' + name);
    return name;
}

function selfishQuestions () {
// moving question
    for (let i = 0; i < 4; i++) {
        const guessesLeft = ' You have ' + (3 - i) + ' guesses remaining.';
        const moves = parseInt(prompt('How many times have I moved?'));
        if (moves > 8) {
            alert('Not that many!' + guessesLeft);
        } else if (moves < 8) {
            alert('More than that!' + guessesLeft);
        } else if (moves === 8) {
            alert('That\'s correct!');
            break;
        }
    }

    // favorite foods
    const faveFoods = ['pizza','tacos', 'burritos', 'avocados'];
    console.log(faveFoods);
    for (let i = 0; i < 7; i++) {
        const guesses = i;
        const foodGuess = prompt('Can you guess one of my favorite foods?');
        console.log(foodGuess);
        if (faveFoods.includes(foodGuess)) {
            alert('That\'s correct! You could\'ve answered with, pizza, tacos, burritos or avocados');
            break;
        }
        else if (guesses === 6) {
            alert('You\'re out of guesses! The correct answeres were pizza, tacos, burritos or avocados');
            break;
        }
        else  {
            alert('Incorrect');
        }
    }
};
