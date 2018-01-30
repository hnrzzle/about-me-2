'use strict';

//asking questions
const name = prompt('What is your name?');
console.log('Their name is ' + name);

// pet owner

const petOwner = prompt('Nice to meet you ' + name + '! Do you have any pets?').toLowerCase();

console.log('Are they a pet owner?: ' + petOwner);

if (petOwner === ('yes' || 'y')) {
    alert('yay, I love animals!');
} else if (petOwner === ('no' || 'n')) {
    alert('Aw, you should get one if you want one!');
} else {
    alert('Please answer with yes or no!');
}

// do you live in Oregon?

const oregonResident = prompt('Do you live in Oregon ' + name + '?').toLowerCase();
console.log('Is ' + name + ' an Oregon resident?: ' + oregonResident);

if (oregonResident === ('yes' || 'y')) {
    alert('Oh, neat, I live in Washington!');
} else if (oregonResident === ('no' || 'n')) {
    alert('Oh interesting, I live in Washington');
} else {
    alert('Please answer with yes or no!');
}

const musician = prompt('Do you play an instrument ' + name + '?').toLowerCase();
console.log('Is ' + name + ' a musician?: ' + musician);

if (musician === ('yes' || 'y')) {
    alert('Awesome, I play guitar!');
} else if (musician === ('no' || 'n')) {
    alert('You should try to learn one, I play guitar!');
} else {
    alert('Please answer with yes or no!');
}