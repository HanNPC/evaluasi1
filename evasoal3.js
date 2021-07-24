for (let x = 1; x < 10 ; x++) {
    for (let y = 1; y < 10; y++) {
        if (x == y) {
            document.write(" * ")
        } else {
            document.write(" - ")
        }
        if (x + y == 10) {
            document.write(" * ")
        } else {
            document.write(" - ")
        }
    }
    document.write("<br>")
}