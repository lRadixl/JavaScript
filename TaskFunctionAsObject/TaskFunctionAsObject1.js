function mul(...args) {//args
    let res = 1;
    let count = 0;

    for(let i=0; i < args.length; i++){
        if(Number.isInteger(args[i])) {
            res *= args[i];
            count++;
        }
    }

    if(count == 0)
        return 0;
    else
        return res;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0