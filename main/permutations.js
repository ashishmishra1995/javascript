var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js');

function permutations(string)
{
    var string=prompt("Enter a string: ");
    utility.permutations(string);
}
permutations();