function getRandomWord() {
    const fs = require("fs");
    try {
        const data = fs.readFileSync("dict.txt", "utf8");

        // convert data to array
        return data.split("\n")[
            // and then pick a random word
            Math.floor(Math.random() * data.split("\n").length + 1)
        ];
    } catch (err) {
        // and if something fails, instead return the error
        return err;
    }
}
