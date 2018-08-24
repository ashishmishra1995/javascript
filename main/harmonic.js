var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function harmonic()
{
    read.question("Enter value upto which you want Harmonic Number: ", function(number){
        utility.harmonic(number);
        read.close();
}
    );
}
harmonic();