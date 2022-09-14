function sameNumber(num) {
    let numSql = num.toString().split('');

    let firstDigit = numSql[0];
    isEqual = true;
    let sum = 0;


    for (let number of numSql) {
        if (number != firstDigit) {
            isEqual = false;
        }
        sum += Number(number);
    }
    console.log(isEqual);
    console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);