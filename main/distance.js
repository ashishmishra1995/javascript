var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function distance()
{
    read.question("Enter first distance: ", function(x){
        read.question("Enter second distance: ", function(y){
            utility.distance(x,y);
            read.close();
        });

    });
}
distance();