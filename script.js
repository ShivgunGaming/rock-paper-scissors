document.addEventListener("DOMContentLoaded", function () {
  // Initialize player score
  var playerScore = 0;

  // Add event listeners to the buttons
  document.getElementById("rockBtn").addEventListener("click", function () {
    play("Rock");
  });
  document.getElementById("paperBtn").addEventListener("click", function () {
    play("Paper");
  });
  document.getElementById("scissorsBtn").addEventListener("click", function () {
    play("Scissors");
  });

  // Event listener for the reset button
  document.getElementById("resetBtn").addEventListener("click", function () {
    // Reset the player score to 0
    playerScore = 0;
    // Update player score display
    document.getElementById("score").innerText = "Score: " + playerScore;
  });

  function play(playerMove) {
    // Array of possible moves
    var moves = ["Rock", "Paper", "Scissors"];

    // Generate a random move for the computer
    var computerMove = moves[Math.floor(Math.random() * moves.length)];

    // Determine the winner
    var result;
    if (playerMove === computerMove) {
      result = "It's a tie";
    } else if (
      (playerMove === "Rock" && computerMove === "Scissors") ||
      (playerMove === "Paper" && computerMove === "Rock") ||
      (playerMove === "Scissors" && computerMove === "Paper")
    ) {
      result = "You win!";
      // Increment player score if they win
      playerScore++;
    } else {
      result = "Computer wins!";
      // Decrement player score if the computer wins
      playerScore--;
    }

    // Display the result
    var playerEmoji;
    var computerEmoji;
    switch (playerMove) {
      case "Rock":
        playerEmoji = "✊";
        break;
      case "Paper":
        playerEmoji = "✋";
        break;
      case "Scissors":
        playerEmoji = "✌️";
        break;
    }
    switch (computerMove) {
      case "Rock":
        computerEmoji = "✊";
        break;
      case "Paper":
        computerEmoji = "✋";
        break;
      case "Scissors":
        computerEmoji = "✌️";
        break;
    }
    document.getElementById(
      "result"
    ).innerHTML = `<span>🧑 ${playerMove}</span><br><span> vs. </span><br><span> 🤖 ${computerMove}</span><br><span>${result}</span>`;
    

    // Update player score display
    document.getElementById("score").innerText = "Score: " + playerScore;
  }
});
