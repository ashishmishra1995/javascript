var prompt = require('prompt');

var game = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

function markBoard(position, mark) {
    game[position] = mark.toUpperCase();
}

function printBoard() {
    console.log('\n' +
        ' ' + game[1] + ' | ' + game[2] + ' | ' + game[3] + '\n' +
        ' ---------\n' +
        ' ' + game[4] + ' | ' + game[5] + ' | ' + game[6] + '\n' +
        ' ---------\n' +
        ' ' + game[7] + ' | ' + game[8] + ' | ' + game[9] + '\n');

}

function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function validateMove(position) {
    if (isInt(position) === true && game[position] === ' ') {
        return true;
    }
    return false;
}

// Everyone possible combination of three in a row
var wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// Determins if the passed in player has three in a row
function checkWin(player) {
    for (var i = 0; i < wins.length; i++) {
        var markCount = 0;
        for (var j = 0; j < wins[i].length; j++) {
            if (game[wins[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}

function playTurn(player) {

    console.log('Your turn player: ' + player);
    prompt.start();
    prompt.get(['position'], function (err, result) {

        if (validateMove(result.position) === true) {
            markBoard(result.position, player);
            printBoard();
            if (checkWin(player) === true) {
                console.log('Winner Winner!');
                return;
            }
            if (player === 'X') {
                playTurn('O');
            } else {
                playTurn('X');
            }
        } else {
            console.log('incorrect input please try again...');
            playTurn(player);
        }
    });
}

console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');


playTurn('X');