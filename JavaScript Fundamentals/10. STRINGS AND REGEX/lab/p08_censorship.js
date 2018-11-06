function censor(text, bannedWords) {
    for (let obj of bannedWords) {
        while (text.indexOf(obj) !== -1) {
            text = text.replace(obj, '-'.repeat(obj.length));
        }
    }
    console.log(text);
}

function censorr(text, words) {
    for (let current of words) {
        let replaced = '-'.repeat(current.length);
        while (text.indexOf(current) > -1) {
            text = text.replace(current, replaced);
        }
    }
    console.log(text);
}
censorr('I like C#, HTML, JS and PHP',
    ['C#', 'HTML', 'PHP']);
