var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var startTime=0;
function stopwatch()
{
    read.question("Enter 1 to start: ", function(start){
        if(start==1){
            startTime=utility.getCurrentTime();
            read.question("Enter 0 to end: ", function(stopTime){
                var stopTime=utility.getCurrentTime();
                var result=utility.getElapsedTime(startTime,stopTime);
                console.log("Elapsed Time= "+result +" seconds");
                read.close();

            })
        }
    })
            
}
stopwatch();