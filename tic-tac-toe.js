
document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    squares.forEach(function(square, index) {

        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 2: Add X or O when clicked
        square.addEventListener("click", function() {

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            gameBoard[index] = currentPlayer;

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

});

