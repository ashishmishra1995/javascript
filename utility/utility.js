/*****************************************************************************************
 * Execution       :    1.  default mode
 *  
 * Purpose         :   Learning Algorithm Codes
 * 
 * @description
 * 
 * @file            :   utility.js
 * @overview        :   prog1.js, leapcheck.js, coin.js, power.js, harmonic.js, factors.js, gambler.js, coupon.js, distance.js, quadratic.js, windchill.js, stopwatch.js, triplet.js, 2Darray.js, permutations.js 
 * @module          :   utility
 * @version         :   1.0
 * @since           :   20-Aug-2018    
 ******************************************************************************************/

const _=require('lodash');

module.exports ={
    /**********************
     * HELLO:
     * NOTE- Ensure the user input taken has minimum 3 characters
     * @description This code takes username as input and prints a message
     * @argument name to take name as user input
     **********************/
     hello : function(name)
    {   
        if((Object.keys(name).length)==null){
            console.log("Invalid Input");
        }
            if((Object.keys(name).length)>3 )
            {
                console.log("Hey "+ name +"! How are you");
            }else {
                console.log("Invalid Input"); //if user input has less than 3 characters
            }
        
        
    },
    /************************
     * TO CHECK WHETHER A YEAR IS LEAP OR NOT
     * NOTE: Ensure whether a year is 4 digit and a number input is taken by the user
     * @description every year that is divisible by 4 and 400 is a leap year and every 100th year is not a leap year
     * @argument year to take year as user input 
     ************************/
    leapcheck : function(year)
    { 
         if( (typeof(year)==='string') & (Object.keys(year).length)===4 )
        {
            if((year%4===0 && year%100!==0) || year%400===0)
            {
                console.log("Leap Year");
            }
            else 
            {
                console.log("Not a Leap Year");
            }
        }else{
            console.log("Invalid Input");
        }
    },
    /**********************
     * FLIPPING OF COIN:
     * @description This code determines the Heads and Tails percentage when a coin is flipped
     * @method Math.random() to generate a random number between 0 and 1.
     * @description if the random number generated is greater than 0.5, its head else its tail
     * @argument fliptimes to take user input as how many times the coin is flipped
     * @param n to store the numbers generated by Math.random()
     * @param headpercentage to print head percentage
     * @param tailpercentage to print tail percentage
     **********************/
    coin: function(fliptimes)
    {
        var n=0, x=0, y=0; 
        for(var count=1; count<=fliptimes; count++)
        {
            n=Math.random();    
            if(n>0.5)   //Heads
            {
                x++;    
            }
            else    //Tails
            {
                y++;    
            }

        } //end of loop
        var headpercentage=(x/fliptimes)*100; 
        var tailpercentage=(y/fliptimes)*100; 
        console.log("Head Percentage= "+headpercentage+"%");    //Heads Percentage
        console.log("Tail Percentage= "+tailpercentage+"%");    //Tails Percentage
    },
    /***********************
     * POWER:
     * @description This code prints the table of n powers of 2
     * @argument number to take user input upto which power of 2 is to be printed
     * @param count to iterate between 1 and the highest power that the user enters
     ***********************/
    power: function(number)
    {
        var count,c=1,n;
        for(count=1; count<=number; count++)
        {
            n=2*c;  
            console.log("2^"+count+"="+n);
            c=n;
        }

    },
    /*********************
     * HARMONIC NUMBER:
     * @description this program prints the value of nth Harmonic number value
     * @argument number to be taken as input from user
     * @param count to run the loop between 1 and user input value
     * @param sum to store the addition of values generated in every loop
     *********************/
    harmonic: function(number)
    {
        var count,sum=0;    
        for(count=1; count<=number; count++) 
        {
            sum+=(1/count);
        }
        console.log("Harmonic number= "+sum);
    },
    /*********************
     * PRIME FACTORS:
     * @description This program prints the prime factors of the user input number
     * @argument number to take number as the user input
     * @param primeFactors array to store the prime factors of the number
     * @param i as a counter to run the loop iteration
     * @method Math.sqrt() to find the square root of a number
     * @method push() to push elements into array
     *********************/
    factors: function(number)
    {
        var primeFactors = [];
        while (number % 2 === 0) {
        primeFactors.push(2);
        number = number / 2;
        }
    
        var sqrtNum = Math.sqrt(number);    
        for (var i = 3; i <= sqrtNum; i++) {
        while (number % i === 0) {
            primeFactors.push(i);
            number = number / i;
            }
        }

        if (number > 2) {
           primeFactors.push(number);
         }
         console.log(primeFactors);
    },
    /*********************
     * GAMBLER:
     * @description This code is written to play the gambling game
     *              User will have a starting balance with which he will start the game
     *              There is a goal set by the user, which when he reaches the game terminates
     *              The game also terminates when the user has insufficient money
     * @argument playtimes to take the number of times user wants to play as input
     * @argument goal to take the amount upto which the user wants to play as input
     * @argument startbalance to take the starting balance with which user wants to play as input
     * @param win to calculate the number of times the user wins the game
     * @param lost to calculate the number of times the user looses the game
     * @param i as a counter to run the loop
     * @param n to store the random number generated
     * @method Math.random() to generate random number between 0 and 1
     *********************/
    gambler: function(playtimes,goal,startbalance)
   {
            var startbalance, goal, i, win=0, lost=0;
            if(startbalance<goal && startbalance>=0)
            {
             for(i=1; i<=playtimes; i++)
            {
               if(startbalance<goal & startbalance>0)
               {
                   var n=Math.random();
                    if(n>=0.5)
                    {
                        win++;
                        ++startbalance;
                    }
                    else{
                            lost++;
                            --startbalance;
                        }   
            }
            else{
                console.log("Insufficient balance or Goal reached!!!");
            }   
           }//end of loop
       }
       else 
           {
               console.log("Sorry! Can't play more");
           }
        console.log("number of wins: "+win);
        console.log("number of loss: "+lost);
        console.log("win %: "+ ((win/playtimes)*100)+"%");  //printing the win percentage
        console.log("loss %: "+ ((lost/playtimes)*100)+"%");//printing the loss percentage
        
   },
   /***********************
    * COUPON:
    * @description This code shows distinct coupons out of the random coupons generated
    *               User gives the minimum and maximum numbers within which the coupons need to be generated
    *               The coupons generated are stored in an array and then array is pushed into a Set to get the distinct coupons
    * @argument min to take minimum value of the coupon to be generated as input
    * @argument max to take maximum value of the coupon to be generated as input
    * @param random array to store the random numbers generated
    * @param count to run the loop to generate numbers between min and max input by the user
    * @param ele to store the random numbers 
    * @param distinct to store the distinct elements generated after pushing the array into Set
    * @method random() to generate random numbers between min and max
    * @method push() to add the numbers generated into the random[] array
    ***********************/
   coupon: function(min,max)
   {
    if(((Object.keys(min).length)===4) && ((Object.keys(max).length)===4))
    {
        var random=[],count,ele;
        for(count=min; count<max; count++)
        {
            ele= _.random(min,max);     //to generate random numbers between min and max
            random.push(ele);           //to push the elements into array
        } //end of loop
        console.log(random);
        console.log("No. of coupons generated= "+random.length);
        var distinct=new Set(random);   //to push the random array into Set to get distinct elements
        var distinctArr=Array.from(distinct);   //to obtain Array from the Set
        console.log("No. of distinct coupons= "+(distinctArr.length));  //to print number of distinct coupons
        console.log("Distinct coupons= ");
        console.log(distinctArr);   //to print the distinct coupons
    }else{
        console.log("Enter values in 4-digit");
    }
   },
   /*********************
    * DISTANCE:
    * @description This code calculates the Euclidien distance using the formula √((x^2)+(y^2))
    * @argument x to take x-coordinate as input
    * @argument y to take y-coordinate as input
    * @method Math.sqrt() to calculate the square root 
    * @method Math.pow() to calculate the power of a number
    *********************/
   distance: function(x,y)
   {
        if(x===0 & y===0)
        {
            console.log("Distance= 0");
        }
        else{
            var distance=Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
        }
        console.log("distance= "+distance);
   },
   /**********************
    * QUADRATIC:
    * @description This code computes the roots of a quadratic equation ((ax^2)+(bx)+c)
    * @argument a is the coefficient of x^2 which is taken as user input
    * @argument b is the coefficient of x which is taken as user input
    * @argument c is the constant taken as user input
    * @param delta to store the determinant value √((b^2)-4ac)
    * @param x1 to store the first root
    * @param x2 to store the second root
    * @method Math.sqrt() to calculate the sqaure root 
    * @method Math.pow() to calculate the power
    **********************/
   quadratic: function(a,b,c)
   {
       var delta= Math.sqrt((Math.pow(b,2))-(4*a*c));
       var x1= ((-b)+delta)/(2*a);
       var x2= ((-b)-delta)/(2*a);
       console.log("Roots of the quadratic equation are ["+x1+","+x2+"]");
   },
   /**********************
    * WINDCHILL:
    * NOTE- If temperature is greater than or equal to 50 or velocity is less than 3m/s and greater than 120m/s,
    *       the input is invalid
    * @description This code computes the value of windchill 
    * @argument temp as input for temperature
    * @argument velocity as input for velocity
    * @method Math.pow() to calculate the power 
    * @param windchill to store the value of windchill
    **********************/
   windchill: function(temp, velocity)
   {
       if(temp>=50 | (velocity<3 && velocity>120))
       {
           console.log("Invalid Input! Not possible to calculate windchill");
       }
       else{
           var x, windchill;
            x=Math.pow(velocity,0.16);
           windchill=35.74+(0.6215*temp)+(((0.4275*temp)-(35.75)))*x;
           console.log("Windchill= "+windchill);
       }
   },
   /**********************
    * STOPWATCH:
    * @description This code shows the elapsed time between two system generated time
    *               When user presses '1' the system generated time starts
    *               When user presses '0' the system generated time stops 
    *               Now the difference is taken and elapsed time is printed
    * @method getTime() to get system time in milliseconds
    * @method getCurrentTime() to get the current system time and return it
    * @method getElapsedTime() to calculate difference between the current system time and the time when user presses '0'
    * @argument startTime to take start time as input (1)
    * @argument stopTime to take stop time as input (0)
    * @param start to store the current system time
    * @param e to store the difference between current time and user pressed time
    ***********************/
    getCurrentTime: function()
        {
            var a= new Date();
           var start= a.getTime();  //to get current system time
            return start;
        },
    getElapsedTime: function(startTime, stopTime)
    {
        var e= (stopTime-startTime)/1000; //to convert milliseconds to seconds
        return e;
    },
    /*********************
     * TRIPLET:
     * @description This code takes an array input from user and shows the number of triplets that sums up to 0
     * @argument val to take size of the array as input
     * @param arr to create an array which consists of triplet that sums up to '0'
     * @param distinct to store the distinct triplet arrays after the array is pushed into Set
     * @param distinctArr to store the unique triplet arrays obtained from Set
     * @method findTriplet() that computes for the triplet
     * @method push() to add the elements into the array
     * @method Array.from() to obtain Array from Set
     *********************/
    triplet: function(read,val)
    {
        var arr=[], a=[];
        var count=0;
        function findTriplet(val)   
        {
            if(arr.length>=val)
            {
                for(var i=0; i<val; i++)    //outer for loop starts
                {
                    for(var j=i+1; j<val; j++)  //inner for loop starts
                    {
                        for(var k=j+1; k<val; k++)  //sub-inner loop starts
                        {
                            if((Number(arr[i])!=Number(arr[j])!=Number(arr[k])))    //checking of all the elements are unique
                            {
                                if(Number(arr[i])+Number(arr[j])+Number(arr[k])===0)    //checking if the sum of elements pushed is equal to '0'
                                {
                                    count++;
                                    console.log("Triplet "+count+"= ["+arr[i]+","+arr[j]+","+arr[k]+"]");
                                    a.push(arr[i]+','+arr[j]+','+arr[k]);   //pushing the triplet elements to array a[]
                                }
                            }
                        }//sub-inner for loop ends
                    }//inner for loop ends
                }//outer for loop ends
                var distinct=new Set(a);    //pushing the triplet array into Set to find unique triplet arrays
                var distinctArr=[];     //creating a new array to store distinct arrays obtained from set
                distinctArr=Array.from(distinct)    //obtaining array from Set
                console.log("Total number of triplets= "+count);    //counting number of triplets
                
                if(distinctArr.length===0)
                {
                    console.log("No Distinct Triplets found!!!");
                }else{
                    console.log("Number of distinct triplets= "+distinctArr.length);    //printing number of distinct triplets
                    console.log("Distinct triplets are: ");
                    console.log(distinctArr);   //printing the distinct triplet array
                }
                
            }else{
                read.question(`Enter the ${(arr.length +1)}th value: `, function(ele){
                    arr.push(ele);
                    findTriplet(val);   //recursive call to repeat the task
                });
            }
            
        }
        findTriplet(val);   //recursive call to repeat the task
    },
    /**********************
     * 2-D ARRAY:
     * @description This code takes input of number of rows, columns and elements from user and prints the corresponding 2-D Array
     * @argument row to take number of rows as input
     * @argument col to take number of columns as input
     * @param size to calculate the size of resultant 2-D Matrix
     * @param matrix to store the matrix 
     * @method createArray() to create the 2-D array
     * @method push() to add elements in the array
     **********************/
    twoDArray: function(read,row,col)
    {
        var size=row*col;
        var arr=[];
        function createArray(size)  
        {
            if(arr.length>=size)
            {
                var count=0;
                arr1=[];
                var matrix= '';
                for(var i=0; i<row; i++)    //outer for loop starts
                {
                    for(var j=0; j<col; j++)    //inner for loop starts
                    {
                        matrix=matrix + arr[count]+ ''; //for printing the matrix
                        count++;
                    }   //inner for loop ends
                    arr1.push(matrix);  //pushing matrix into an array
                    matrix='';
                }   //outer for loop ends
                for(var index=0; index<arr1.length; index++)
                {
                    console.log(arr1[index]);
                }
            }else{
                read.question(`Enter the ${(arr.length)}th value: `, function(answer){
                    arr.push(answer);
                    createArray(size);  //recursive call to reapeat the task
                });
            }
        }
        createArray(size);  //recursive call to repeat the task
    },
    /********************
     * 2-D ARRAY:
     * @description This code takes number of rows and columns and elements as input and prints the corresponding 2-D Array
     * @argument row to take number of rows as input
     * @param col to take number of columns as input
     ********************/
    array: function(prompt,row)
    {
        var arr=new Array(row); //creating a new 1-D array of size of number of rows
        var col=prompt("Enter no. of columns: ");
        for(var i=0; i<row; i++)    //outer for loop starts
        {
            arr[i]=new Array(col);  //creating an array inside the 1-D array using number of columns to make it 2-D array
            for(var j=0;j<col;j++)  //inner for loop starts
            {
                arr[i][j]=prompt('Enter element: ');    //input for number of elements
            }   //inner for loop ends
        }   //outer for loop ends
        console.log(arr);
    },
    /*******************
     * PERMUTATIONS:
     * @description This code calculates the number of strings formed out of an input string
     * @argument str to take string input from the user
     * @param permutation array to store the permuted strings
     * @method getPermutation() to perform the task of getting the permutations of the input 
     * @method split() to split the string by some character
     * @method splice() to manipulate with the string array available
     *******************/
    permutations: function(str)
    {
        var permutation= [];
        getPermutation(str,[]);
        console.log(permutation);
        console.log("Number of permutations= "+permutation.length);

        function getPermutation(str,arr)
        {
            if(typeof(str)=='string')   //checking if the input is string type
            {
                str=str.split('');  //splitting the characters by space
            }
            /**
             * @description if the string length becomes '0', push the array created into the resultant permutation array
             */
            if(str.length==0)    
            {
                permutation.push(arr.join('')); //pushing the characters into array and join operation to convert into string
            }
                for(var i=0; i<str.length; i++) //for loop starts
                {
                    var a= str.splice(i,1); //removes 0th element
                    arr.push(a);    //pushing the spliced element into arr[] array
                    getPermutation(str,arr);    //recursive call
                    arr.pop();  //to remove the elements from the array
                    str.splice(i,0,a);  //replaces 
                }   //for loop ends
        }
    },

}