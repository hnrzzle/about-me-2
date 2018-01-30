'use strict';

//asking questions
const name = prompt('What is your name?');
console.log('Their name is ' + name);

const petOwner = prompt('Nice to meet you ' + name + ' Do you have any pets?').toLowerCase();

console.log('Are they a pet owner?: ' + petOwner);

if (petOwner === ('yes' || 'y')) {
    alert('yay, I love animals!');
} else if (petOwner === ('no' || 'n')) {
    alert('Aw, you should get one if you want one!');
} else {
    alert('Please answer with yes or no!');
}