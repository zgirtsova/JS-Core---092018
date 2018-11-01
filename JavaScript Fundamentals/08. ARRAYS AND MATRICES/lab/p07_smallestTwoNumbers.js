function sort(arr) {
    console.log(arr.sort((a, b) => a - b).slice(0, 2).join(' '));
}

function smallestTwoNumbers(arr) {
    arr.sort((a, b) => a-b);
    let result = arr.slice(0, 2);
    return result.join(' ');
}
