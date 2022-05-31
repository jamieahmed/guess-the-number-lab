const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [], // Add a prevGuesses

    play: function() {
        this.secretNum =
            Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
            this.smallestNum;
        console.log(this.secretNum);
        do {
            this.prevGuesses.push(this.getGuess());
            this.render();
        } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
    },

    getGuess: function() {
        let guess;
        do {
            guess = parseInt(
                prompt(
                    `enter a guess betttween ${this.smallestNum}and ${this.biggestNum}.`,
                    ""
                )
            );
        } while (
            guess < this.smallestNum ||
            guess > this.biggestNum ||
            guess === NaN
        );
        return guess;
    },

    render: function() {
        if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
            alert(
                `congrats! you guessed the number in ${this.prevGuesses.length}guesses!`
            );
        } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
            alert(
                `your guess is too low. previous guesses: ${this.prevGuesses.join()}`
            );
        } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
            alert(
                `your guess is too heigh. previous guesses: ${this.prevGuesses.join()}`
            );
        }
    },
};

game.play();