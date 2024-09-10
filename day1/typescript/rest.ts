function sum(...numbers:number[]):number{
    let sum=0;
    for(let n of numbers)
        sum+=n;
    return sum;
}
console.log(`sum is ${sum(2,4,5,6,7)}`);
console.log(`sum is ${sum(2,4,7)}`);
console.log(`sum is ${sum(2,4,5,6,7,9,10,34)}`);
console.log(`sum is ${sum(2,4,5,6,7,10,11,12,13)}`);

