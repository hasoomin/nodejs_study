import { odd, even } from './3.3_var.js';
import checkNumber from './3.3_func.js';

function checkStrinfOddEven(str){
    if(str.length % 2 ){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStrinfOddEven('hello'));