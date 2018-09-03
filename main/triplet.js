var readline=require('readline');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var utility=require('../utility/utility.js');

function triplet()
{
    read.question("Enter the size of the array: ", function(val){
        utility.triplet(read,val);
    })
}
triplet();