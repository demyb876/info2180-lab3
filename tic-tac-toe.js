
document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let gameOver = false;

    // All possible winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(function(square, index) {

        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 2: Add X or O when clicked
        square.addEventListener("click", function() {

            if (gameOver) {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            gameBoard[index] = currentPlayer;

            // Exercise 4: Check for a winner
            if (checkWinner(currentPlayer)) {
                status.textContent =
                    "Congratulations! " + currentPlayer + " is the Winner!";

                status.classList.add("you-won");
                gameOver = true;
                return;
            }

            // Switch players
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

        // Exercise 3: Add hover effect
        square.addEventListener("mouseenter", function() {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

    });

    // Exercise 4: Function to check winning combinations
    function checkWinner(player) {

        return winningCombinations.some(function(combination) {

            return combination.every(function(index) {
                return gameBoard[index] === player;
            });

        });

    }

});

