var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function leapcheck()
{
    read.question("Enter the year: ", function(year){
        utility.leapcheck(year);
        read.close();

    });

}
leapcheck();