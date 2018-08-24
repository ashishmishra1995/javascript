//var readline=require('readline');
var utility=require('../utility/utility.js');
/*var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});*/
'use strict';
const args = require('yargs').argv;

function gambler()
{
    /*read.question("Enter number of times you want to play: ", function(playtimes){
        utility.gambler(playtimes);
        read.close();
}
    ); */
    n1=args.playtimes;
    n2=args.goal;
    n3=args.startbalance;
    utility.gambler(n1,n2,n3);
}
gambler();