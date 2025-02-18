document.getElementById("rollBtn").addEventListener("click", function() {
  let dice = document.getElementById("dice");
  let diceSound = document.getElementById("diceSound");

  // Play dice rolling sound
  diceSound.currentTime = 0;  // Restart sound if already playing
  diceSound.play();

  // Apply rolling effect
  dice.style.transform = "rotate(720deg)";

  setTimeout(() => {
      let diceNumber = Math.floor(Math.random() * 6) + 1;
      dice.src = `dice${diceNumber}.png`;

      // Reset rotation
      dice.style.transform = "rotate(0deg)";
  }, 800); // Delay to simulate rolling animation
});
