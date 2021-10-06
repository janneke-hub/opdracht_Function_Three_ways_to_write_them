function square(number1, number2) {
    const sum1 = number1 * number1;
    const sum2 = number2 * number2;
    const outcome = sum1 + sum2;
    const outcome = outcome * outcome
    return outcome;
}
  
square(5,6);


const square1 = function(number1, number2) {
    const sum3 = number1 * number1;
    const sum4 = number2 * number2;
    const outcome1 = sum3 + sum4;
    const outcome1 = outcome1 * outcome1;
    return outcome1;
};

square1(5,6);


const square2 = (number1, number2) => {
    const sum5 = number1 * number1;
    const sum6 = number2 * number2;
    const outcome2 = sum5 + sum6;
    const outcome2 = outcome2 * outcome2;
    return outcome2;
};

square2(5,6);


