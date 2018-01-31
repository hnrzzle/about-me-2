'use strict';

/*
//asking questions
const name = prompt('What is your name?');
console.log('Their name is ' + name);

// pet owner
const petOwner = prompt('Nice to meet you ' + name + '! Do you have any pets?').toLowerCase();

console.log('Are they a pet owner?: ' + petOwner);

if (petOwner === 'yes' || petOwner == 'y') {
    alert('Yay, I love animals!');
} else if (petOwner === 'no' || petOwner === 'n') {
    alert('Aw, you should get one if you want one!');
} else {
    alert('Please answer with yes or no!');
}

// do you live in Oregon?
const oregonResident = prompt('Do you live in Oregon ' + name + '?').toLowerCase();
console.log('Is ' + name + ' an Oregon resident?: ' + oregonResident);

if (oregonResident === 'yes' || oregonResident === 'y') {
    alert('Oh, neat, I live in Washington!');
} else if (oregonResident === 'no' || oregonResident === 'n') {
    alert('Ah, a fellow out-of-stater; I live in Washington');
} else {
    alert('Please answer with yes or no!');
}

// are you a musician?
const musician = prompt('Do you play an instrument ' + name + '?').toLowerCase();
console.log('Is ' + name + ' a musician?: ' + musician);

if (musician === 'yes' || musician === 'y') {
    alert('Awesome, I play guitar!');
} else if (musician === 'no' || musician === 'n') {
    alert('You should try to learn one, I play guitar!');
} else {
    alert('Please answer with yes or no!');
}

// do you like tacos?
const tacoLover = prompt('Do you like tacos ' + name + '?').toLowerCase();
console.log('Is ' + name + ' a taco fan?: ' + tacoLover);

if (tacoLover === 'yes' || tacoLover === 'y') {
    alert('Me too! I love tacos!');
} else if (tacoLover === 'no' || tacoLover === 'n') {
    alert(':( Tacos are the best!');
} else {
    alert('Please answer with yes or no!');
}

// do you like video games?
const likesVideoGames = prompt('Do you like video games ' + name + '?').toLowerCase();
console.log('Does ' + name + ' like video games?: ' + likesVideoGames);

if (likesVideoGames === 'yes' || likesVideoGames === 'y') {
    alert('Right on, me too! My favorite game right now is Overwatch.');
} else if (likesVideoGames === 'no' || likesVideoGames === 'n') {
    alert('Aw, you should give them a try, they\'re very rewarding!');
} else {
    alert('Please answer with yes or no!');
}

*/

//moving question
for (let i = 0; i < 4; i++) {
    const guessesLeft = ' You have ' + (3 - i) + ' guesses remaining.';
    const moves = parseInt(prompt('How many times have I moved?'));
    if (moves > 8) {
        alert('Not that many!' + guessesLeft);
    } else if (moves < 8) {
        alert('More than that!' + guessesLeft);
    } else if (moves === 8) {
        alert('That\'s correct!' + guessesLeft);
        break;
    }
}
