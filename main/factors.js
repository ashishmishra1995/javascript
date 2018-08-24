var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function factors()
{
    read.question("Enter number: ", function(number){
        utility.factors(number);
        read.close();
    });
}
factors();