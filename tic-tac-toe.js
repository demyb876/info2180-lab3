
document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    const originalMessage = status.textContent;

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

        // Exercise 2 and 6: Add X or O and prevent cheating
        square.addEventListener("click", function() {

            if (gameOver || gameBoard[index] !== "") {
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

            // Check if the game is a draw
            if (gameBoard.every(function(cell) {
                return cell !== "";
            })) {
                status.textContent = "It's a Draw!";
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
            if (!gameOver && gameBoard[index] === "") {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

    });

    // Exercise 4: Check for a winner
    function checkWinner(player) {

        return winningCombinations.some(function(combination) {

            return combination.every(function(index) {
                return gameBoard[index] === player;
            });

        });

    }

    // Exercise 5: Restart the game
    newGameButton.addEventListener("click", function() {

        // Clear the game board
        gameBoard = ["", "", "", "", "", "", "", "", ""];

        // Reset the current player
        currentPlayer = "X";

        // Allow the game to start again
        gameOver = false;

        // Clear each square
        squares.forEach(function(square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        // Restore the original status message
        status.textContent = originalMessage;

        // Remove the winning style
        status.classList.remove("you-won");

    });

});

