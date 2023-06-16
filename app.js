// Exercise 1 Section

let x = 1;
{
do {
    if (x % 2 !== 0) {
        console.log(x);
    }  

    x++;
} while (x < 100);
}

// Exercise 2 FIZZBUZZ
{
let x = 1;
do {
    let output = "";

        if ( x % 3 == 0) {
            console.log (x, "FIZZ");
        }

        if (x % 5 == 0) {
            console.log(x, "BUZZ");
        }  
            console.log(`${x} ${output}`);
            x++;
    } while (x <= 100);
}


 // Exercise 4

 let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500

let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i ++) {
    if (i == numberToFind) {
     console.log(`Found ${numberToFind}`);
        break;
    }
    if(i == n){
console.log(`Did not find ${numberToFind} within 1-${n}..`);
}
}

// Exercise 5: Customized FIZZBUZZ

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end; i++)  {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);