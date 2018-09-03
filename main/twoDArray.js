var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function twoDArray()
{
    read.question("Enter the row ize: ", function(row){
        read.question("Enter the Column size: ", function(col){
            utility.twoDArray(read,row,col);
        });

    });
}
twoDArray();