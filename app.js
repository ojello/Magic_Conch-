'use strict';

// console.log(conchAnswer)

document.querySelector('.ask').addEventListener('click', function () {
    let userResponse = String(document.querySelector('.question').value);
    console.log(userResponse)


    while (true) {
        if (userResponse.toLowerCase() === 'leave') {
            document.querySelector('.user-question').textContent = 'see you next time when your fortune awaits~';
            document.querySelector('.message').textContent = 'goodbye!';
            document.querySelector('.conch-response').textContent = '';
            throw "stop execution";
        } else {
            document.querySelector('.message').textContent = '🐚 Now ask me a question!';
            document.querySelector('.user-question').textContent = '';
            document.querySelector('.question').textContent = '';
            // conch statement
            document.querySelector('.conch-response').textContent = '';
            break

        }
    } if (!userResponse) {
        document.querySelector('.message').textContent = '🐚 Quit wasting my time... and ask an actual question';
        document.querySelector('.user-question').textContent = '';
        document.querySelector('.question').textContent = '';

    } else {

        // gives random roll response 
        let conchAnswer = Math.trunc(Math.random() * 11) + 1;

        if (conchAnswer === 1) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';

            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: Maybe so...'
        } else if (conchAnswer === 2) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: Definitely Yes';
        } else if (conchAnswer === 3) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: I do not know..';
        } else if (conchAnswer === 4) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚:Ask me tomorrow, when you are not wasting my time!';
        } else if (conchAnswer === 5) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: What do you think?';
        } else if (conchAnswer === 6) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: No';
        } else if (conchAnswer === 7) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: It is decidely so';
        } else if (conchAnswer === 8) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: Maybe ask a better question!';
        } else if (conchAnswer === 9) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: Highly doubtful!';
        } else if (conchAnswer === 10) {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: Most likely never';
        } else {
            document.querySelector('.user-question').textContent = userResponse;
            document.querySelector('.message').textContent = '';


            // conch statement
            document.querySelector('.conch-response').textContent = '🐚: Enough >:( too many questions';
            throw "stop execution";

        }
    }
});