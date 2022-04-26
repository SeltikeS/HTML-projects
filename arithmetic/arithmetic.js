function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return (...args2) => curried.apply(this, args2.concat(args));
        }
    };
}



let addSimple = (a, b) => a + b;
let subSimple = (a, b) => a - b;
let mulSimple = (a, b) => a * b;
let divSimple = (a, b) => a / b;



let add = curry(addSimple);
let sub = curry(subSimple);
let mul = curry(mulSimple);
let div = curry(divSimple);

function pipe(arg) {
    return function piped(...args) {
        memory = arg;
        for(let i = 0; i < args.length; ++i) {
            memory = curry(args[i](memory));
        }
        return memory;
    }
}




// TESTS

let a = add(1,2); // 3
let b = mul(a, 10); // 30
let sub1 = sub(1); // sub1 отнимает от любого числа единицу
let c = sub1(b); // 29
let d = mul(sub(a,1))(c); // 58

console.log(a);
console.log(b);
console.log(c);
console.log(d);

let doSmth = pipe(add(d), sub(c), mul(b), div(a)); // функция, последовательно выполняющая эти операции.
let result = doSmth(0); // (((0 + 58) - 29) * 30) / 3 = 290
let x = pipe(add(1), mul(2))(3); // 8

// console.log(result);
// console.log(x);

console.log(doSmth);