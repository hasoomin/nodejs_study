import { odd, even } from './3.3_var.js';

function checkOddOrEven(num){
    if(num % 2){
        return odd ;
    }
    return even;
}

export default checkOddOrEven ;