function count(string, word) {
    var regexExpression = "\\b(" + word + ")\\b";

    //console.log(regexExpression);
    var regex = new RegExp(regexExpression, "ig");

    let count = 0;
    while (match = regex.exec(string)) {
        count++;
    }

    console.log(count);
}
count('The waterfall was so high, that the child couldn’t see its peak.', 'the');