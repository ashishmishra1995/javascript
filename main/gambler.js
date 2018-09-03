'use strict';
var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function gambler()
{
    read.question("Enter number of times you want to play: ", function(playtimes){
        read.question("Enter the goal: ", function(goal){
            read.question("Enter the starting balance: ", function(startbalance){
                utility.gambler(playtimes,goal,startbalance);
                read.close();
            });
        });
    });
}
gambler();