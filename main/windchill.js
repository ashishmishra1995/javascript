var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function windchill()
{
    read.question("Enter Temperature: ", function(temp){
        read.question("Enter Velocity: ", function(velocity){
            utility.windchill(temp,velocity);
            read.close();
        });

    });
}
windchill();