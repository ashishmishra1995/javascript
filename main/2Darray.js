var prompt=require('prompt-sync')();
var utility=require('../utility/utility.js');

function array()
{
    var row=prompt("Enter no. of rows: ");
    utility.array(prompt,row);
}
array();

