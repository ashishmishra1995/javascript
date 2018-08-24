
module.exports ={
     hello : function(name)
    {
       
        console.log("Hey "+ name +"! How are you");
    },

    leapcheck : function(year)
    {
        if(year%400===0 && year%100!==0)
    {
        console.log("Leap Year");
    }
    else if(year%4===0)
    {
        console.log("Leap Year");
    }
    else {
        console.log("Not a Leap Year");
    }
    },

    coin: function(fliptimes)
    {
        var n=0, x=0, y=0, a,b;
        for(var count=1; count<=fliptimes; count++)
        {
            n=Math.random();
            if(n>0.5)
            {
                x++;
            }
            else
            {
                y++;
            }

        }
        var headpercentage=(x/fliptimes)*100;
        var tailpercentage=(y/fliptimes)*100;
        console.log("Head Percentage= "+headpercentage+"%");
        console.log("Tail Percentage= "+tailpercentage+"%");
    },

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

    harmonic: function(number)
    {
        var count,sum=0;
        for(count=1; count<=number; count++)
        {
            sum+=(1/count);
        }
        console.log("Harmonic number= "+sum);
    },

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
    
   gambler: function(playtimes,goal,startbalance)
   {
       var startbalance=5, goal=10, i, win=0, lost=0;
       if(startbalance<=goal && startbalance>=0)
       {
           for(i=1; i<=playtimes; i++)
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
       }
       else 
           {
               console.log("Sorry! Can't play more");
           }
        console.log("number of wins: "+win);
        console.log("number of loss: "+lost);
        console.log("win %: "+ ((win/playtimes)*100));
        console.log("loss %: "+ ((lost/playtimes)*100));
   }



}