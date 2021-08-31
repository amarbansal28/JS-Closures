function factorial(n) {
  if(n===0) return 1;
  
  return n * factorial(n-1);
}

const add = a => b => a + b;

const multiply = a => b => a * b;

const addTen = add(10);

const mulFive = multiply(5);

function square(n) {return n * n;}


Number.prototype.compose = function(){
    let args = arguments;
    let num = this;
    return function(){
        for(let i = args.length-1; i >= 0; i--){
            num = args[i](num);
        }
      return num;
    }
}


let x = 3;


let y = 4;


console.log(x.compose(addTen, mulFive, factorial)()); // 40

console.log(y.compose(square, addTen)()); // 196
