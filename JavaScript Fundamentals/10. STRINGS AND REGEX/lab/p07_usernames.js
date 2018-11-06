function solve(input) {
    "use strict";
    console.log(input.map(e => e.split('@'))
                     .map(([username, domain]) => username + '.' + domain.split('.')
                                                                         .map(e => e[0])
                                                                         .join(''))
                                                                         .join(', '));
}
function extractUsernames(inputEmails) {
    let results = [];
    for (let email of inputEmails) {
        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        results.push(username);
    }
    console.log(results.join(', '));
}


solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);