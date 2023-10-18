import "./style.css";
import "./assets/img/jack.jpg";
import "./assets/img/king.jpg";
import "./assets/img/queen.jpg";

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let icons = ["♠", "♣", "♥", "♦"];

window.onload = function() {
  document.getElementById("dealer").addEventListener("click", dealer);
};
function dealer() {
  let randomCards = cards[Math.floor(Math.random() * cards.length)];
  let randomIcons = icons[Math.floor(Math.random() * icons.length)];

  document.querySelector(".top").innerHTML = randomIcons;
  document.querySelector(".bottom").innerHTML = randomIcons;
  document.querySelector(".middle").innerHTML = randomCards;

  if (randomIcons === "♥") {
    document.getElementById(
      "icon-top"
    ).innerHTML = `<span style="color:red">♥</span>`;
    document.getElementById(
      "icon-bottom"
    ).innerHTML = `<span style="color:red">♥</span>`;
    document.getElementById("value").style.color = "red";
  } else if (randomIcons === "♦") {
    document.getElementById(
      "icon-top"
    ).innerHTML = `<span style="color:red">♦</span>`;
    document.getElementById(
      "icon-bottom"
    ).innerHTML = `<span style="color:red">♦</span>`;
    document.getElementById("value").style.color = "red";
  } else {
    document.getElementById("value").style.color = "black";
  }

  if (randomCards === "K") {
    document.getElementById(
      "value"
    ).innerHTML = `<img src="./king.jpg" alt=""></img>`;
  }

  if (randomCards === "Q") {
    document.getElementById(
      "value"
    ).innerHTML = `<img src="./queen.jpg" alt=""></img>`;
  }

  if (randomCards === "J") {
    document.getElementById(
      "value"
    ).innerHTML = `<img src="./jack.jpg" alt=""></img>`;
  }
}

let interval;

// Function to start the timer when the "Start Timer" button is clicked
document.getElementById("timer-on").addEventListener("click", function() {
  interval = setInterval(dealer, 5000);
  document.getElementById("timer-on").style.display = "none";
  document.getElementById("timer-off").style.display = "inline";
});

// Function to stop the timer when the "Stop Timer" button is clicked
document.getElementById("timer-off").addEventListener("click", function() {
  clearInterval(interval);
  document.getElementById("timer-on").style.display = "inline";
  document.getElementById("timer-off").style.display = "none";
});

// resize card function
document.getElementById("resize").addEventListener("click", function() {
  // Get the input elements
  const widthInput = document.getElementById("cardWidth");
  const heightInput = document.getElementById("cardHeight");

  // Get the target div element
  const targetDiv = document.querySelector(".card");

  // Get the width and height value from the input fields
  const newWidth = widthInput.value;
  const newHeight = heightInput.value;

  // Update the width & length of the div with the new values
  targetDiv.style.width = newWidth + "px";
  targetDiv.style.height = newHeight + "px";
});
