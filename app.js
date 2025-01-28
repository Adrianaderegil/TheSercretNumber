alert ('Welcome to the Secret Number Game!');
alert ('You have 10 attempts to guess the secret number between 1 and 100.');

let numberMax = 100;
let secretNumber = Math.floor(Math.random()*numberMax)+1;
let userNumber = 0;
let attempts = 1;
let maxAttempts = 10;


while (userNumber != secretNumber) {
    userNumber = parseInt(prompt(`Choose a number between 1 and ${numberMax} :`));

    console.log(typeof(userNumber));
    if (userNumber == secretNumber) {

        alert(`You got it right, the number is: ${userNumber}. You did it in ${attempts} ${attempts == 1 ? 'attempt' : 'attempts' }`);
    } else {
        if (userNumber > secretNumber) {
            alert('The secret number is lower');
        } else {
            alert('The secret number is higher');
        }
        attempts++;

        if (attempts > maxAttempts) {
            alert(`You reached the maximum number of  ${maxAttempts} attempts`);
            break;
        }

    }
}