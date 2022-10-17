var a = [8,8,9,8]
    if (a[0] === a[1] && a[1] === a[2]) 
    {
        console.log(4)
    }  
    else if (a[0] === a[1] && a[1] === a[3]) 
    {
        console.log(3)
    }  
    else if (a[0] === a[2] && a[2] === a[3]) 
    {
        console.log(2)
    }  
    else 
    {
        console.log(1)
    }