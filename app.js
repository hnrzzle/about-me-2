'use strict';

//arrays
const yes = ['yes', 'y', 'yup', 'sure', 'totally'];
const no = ['no', 'n', 'nope', 'nah'];
const questions = ['Do I have any pets?', 'Do I live in Oregon?', 'Am I a musician?', 'Do I like tacos?', 'Do I like video games'];
const answers = ['1', '0', '1', '1', '1'];


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





// //functions
// const name = getName();
// friendlyQuestions();
// selfishQuestions();


// //asking questions

// function getName() {
//     const name = prompt('What is your name?');
//     console.log('Their name is ' + name);
//     return name;
// }


// // pet owner

// function friendlyQuestions () {
//     const petOwner = prompt('Nice to meet you ' + name + '! Can you answer some questions about me? Do I have any pets?').toLowerCase();

//     console.log('answer pet owner: ' + petOwner);

//     if (petOwner === 'yes' || petOwner == 'y') {
//         alert('You\'re right, I love animals!');
//     } else if (petOwner === 'no' || petOwner === 'n') {
//         alert('Nope, I have a dog named Lua and a cat named Momo!');
//     } else {
//         alert('Please answer with yes or no!');
//     }

//     // do you live in Oregon?
//     const oregonResident = prompt('Do I live in Oregon, ' + name + '?').toLowerCase();
//     console.log('Oregon answer: ' + oregonResident);

//     if (oregonResident === 'yes' || oregonResident === 'y') {
//         alert('Nope, I live accross the river in Washington!');
//     } else if (oregonResident === 'no' || oregonResident === 'n') {
//         alert('You\'re right! I live in Washington');
//     } else {
//         alert('Please answer with yes or no!');
//     }

//     // are you a musician?
//     const musician = prompt('Do I play an instrument, ' + name + '?').toLowerCase();
//     console.log('Am I a musician?' + musician);

//     if (musician === 'yes' || musician === 'y') {
//         alert('Yep, I play guitar! Albiet not great');
//     } else if (musician === 'no' || musician === 'n') {
//         alert('How dare you think that, I play guitar!');
//     } else {
//         alert('Please answer with yes or no!');
//     }

//     // do you like tacos?
//     const tacoLover = prompt('Am I a fan of tacos, ' + name + '?').toLowerCase();
//     console.log('Am I a taco Lover? ' + tacoLover);

//     if (tacoLover === 'yes' || tacoLover === 'y') {
//         alert('Yup, I love tacos!');
//     } else if (tacoLover === 'no' || tacoLover === 'n') {
//         alert('Why I never! I love tacos!');
//     } else {
//         alert('Please answer with yes or no!');
//     }

//     // do you like video games?
//     const likesVideoGames = prompt('Do I like video games, ' + name + '?').toLowerCase();
//     console.log('Does ' + name + ' like video games?: ' + likesVideoGames);

//     if (likesVideoGames === 'yes' || likesVideoGames === 'y') {
//         alert('Yup, I love video games! My favorite game right now is Overwatch!');
//     } else if (likesVideoGames === 'no' || likesVideoGames === 'n') {
//         alert('That\'s not right, of course I love video games!');
//     } else {
//         alert('I would\'ve thought you learned by now! Please answer with yes or no!');
//     }
// }

// function selfishQuestions () {
// // moving question
//     for (let i = 0; i < 4; i++) {
//         const guessesLeft = ' You have ' + (3 - i) + ' guesses remaining.';
//         const moves = parseInt(prompt('How many times have I moved?'));
//         if (moves > 8) {
//             alert('Not that many!' + guessesLeft);
//         } else if (moves < 8) {
//             alert('More than that!' + guessesLeft);
//         } else if (moves === 8) {
//             alert('That\'s correct!');
//             break;
//         }
//     }

//     // favorite foods
//     const faveFoods = ['pizza','tacos', 'burritos', 'avocados'];
//     console.log(faveFoods);
//     for (let i = 0; i < 7; i++) {
//         const guesses = i;
//         const foodGuess = prompt('Can you guess one of my favorite foods?');
//         console.log(foodGuess);
//         if (faveFoods.includes(foodGuess)) {
//             alert('That\'s correct! You could\'ve answered with, pizza, tacos, burritos or avocados');
//             break;
//         }
//         else if (guesses === 6) {
//             alert('You\'re out of guesses! The correct answeres were pizza, tacos, burritos or avocados');
//             break;
//         }
//         else  {
//             alert('Incorrect');
//         }
//     }
// };
