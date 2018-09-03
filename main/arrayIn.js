var readline = require('readline')
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function arrayInput(){
    
    read.question('Enter the size ', (size) => {
        recursiveAsyncReadLine(size);
    })

}

var array = [];


recursiveAsyncReadLine = function (size) {
    
    
      if (size == 0){
        console.log(array);
        process.exit();
      } else {
        
          read.question('Enter a value ', (value) => {
              
              array.push(value)
              recursiveAsyncReadLine(--size);
          })
        
      } //we need some base case, for recursion
       //Calling this function again to ask new question
    
  };

  arrayInput();