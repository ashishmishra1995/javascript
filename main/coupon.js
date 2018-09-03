var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function coupon()
{
    read.question("Enter the min value of coupon number: ", function(min){
        read.question("Enter the max value of coupon number: ", function(max){
            utility.coupon(min,max);
            read.close();
        });

    });
}
coupon();