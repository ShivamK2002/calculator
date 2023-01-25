let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
var audio = new Audio("./audio.mp3");
let scree = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    buttonText.onclick = "audio.play()";
    if (buttonText == "X") {
      buttonText = "*";
      scree += buttonText;
      screen.value = scree;
    } else if (buttonText == "C") {
      scree = "";
      screen.value = scree;
    } else if (buttonText == "=") {
      screen.value = eval(scree);
    }
      else if (buttonText == "<") {
        buttonText -= "";
        scree = buttonText;
      screen.value = scree;
      
    } 
    else {
      scree += buttonText;
      screen.value = scree;
    }
  });
}

document.onclick = function () {
  audio.play();
};
