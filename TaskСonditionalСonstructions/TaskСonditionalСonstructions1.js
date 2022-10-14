var a = prompt("Введіть число:")
    if (a > 0) 
    {
        a = +a + 1
    }
    else if (a < 0) 
    {  
        a = +a - 2
    }
    else
    {
        a = 10
    }
console.log (a)