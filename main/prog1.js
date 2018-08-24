var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function hello()
{
    read.question("Enter your user name: ", function(name){
        utility.hello(name);
        read.close();
        });
        
}
    
hello();