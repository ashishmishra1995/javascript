var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function coin()
{
    read.question("Enter number of times coin is flipped: ", function(fliptimes){
        utility.coin(fliptimes);
        read.close();

    });

}
coin();