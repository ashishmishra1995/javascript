//var readline=require('readline');
var utility=require('../utility/utility.js');
/*var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});*/
'use strict';
const args = require('yargs').argv;

function power()
{
   /* read.question("Enter the highest power of 2 you want: ", function(number){
        utility.power(number);
        read.close();
}
    );*/
    n=args.number;
    utility.power(n);
}
power();