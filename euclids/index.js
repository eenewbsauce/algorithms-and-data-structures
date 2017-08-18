let numbers = process.argv.slice(2);
let a = parseInt(numbers[0]);
let b = parseInt(numbers[1]);

const largestCommomDenominator = (a, b) => {
    if (a < b) {
         let temp = b;
         b = a;
         a = temp;
    }

    let mods = [];
    let mod = 1;
    let temp;

    do {
        console.log(`doing a: ${a} b: ${b}`);

        mod = a % b;

        if (mod !== 0) {
            mods.push(mod);

            temp = b;
            b = mod;
            a = temp;
        }
    } while (mod > 0);

    const lcd = mods.length > 0 
        ? mods[mods.length - 1]
        : b;

    return {
        mods,
        lcd
    };
};

const lcd = largestCommomDenominator(a, b);

console.log(lcd);

