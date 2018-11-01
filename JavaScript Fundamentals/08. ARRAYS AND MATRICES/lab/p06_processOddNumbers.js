function firstLastElements(arr) {
    let result = arr
        .filter(i => i % 2 === 1)
        .map(x => 2*x)
        .reverse();
    return result.join(' ');
}

let result = firstLastElements([10, 15, 20, 25]);
console.log(result);