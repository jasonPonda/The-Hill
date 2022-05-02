let interval;
let times = 0;

function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

buttonThreeSeconds = document.createElement("button");
buttonThreeSeconds.textContent = "say hey every 3 seconds";
buttonThreeSeconds.addEventListener("click", () => {
  interval = setInterval(heyYou, 3000);
});

buttonStop = document.createElement("button");
buttonStop.textContent = "Stop saying hey";
buttonStop.addEventListener("click", () => {
  // We must first check if there is an interval
  if (interval != undefined) {
    clearInterval(interval);
  }
});

document.body.appendChild(buttonThreeSeconds);
document.body.appendChild(buttonStop);