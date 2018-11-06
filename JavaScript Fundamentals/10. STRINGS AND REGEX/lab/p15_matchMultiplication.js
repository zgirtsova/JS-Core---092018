function multiplicatoin(input) {
    let regex = /(\-?\d+)\s*\*\s*(\-?\d+(?:\.\d+)?)/;

    while (match = regex.exec(input)) {
        let firstN = +match[1];
        let secondN = +match[2];
        let result = firstN * secondN;
        input = input.replace(regex, result);
    }

    console.log(input);
}
function performMultiplications(text) {
    text = text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => +(num1) * +(num2));
    console.log(text);
}
performMultiplications('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');