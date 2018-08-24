function leapyear(n)
{
    if(n%400===0 && n%100!==0)
    {
        console.log("Leap Year");
    }
    else if(n%4===0)
    {
        console.log("Leap Year");
    }
    else {
        console.log("Not a Leap Year");
    }
}

leapyear(2016)