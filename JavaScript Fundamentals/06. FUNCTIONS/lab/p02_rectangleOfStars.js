function drawRectangleOfStars(n = 5) {

    for (let i = 0; i < n; i++) {
        console.log(line(n));
    }

    function line(s = n) {
        return "* ".repeat(s);
    }

}

drawRectangleOfStars();