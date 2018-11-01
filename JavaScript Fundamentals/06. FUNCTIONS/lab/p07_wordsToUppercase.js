function toUpperCase(input) {
    input = input.toUpperCase();
    
    let split = input.split(/\W+/).filter(e => e !== '').join(', ');

    //split = split.filter(e => e !== '');

    //console.log(split.join(', '));
    console.log(split);
}

toUpperCase('Hi, how are you?');