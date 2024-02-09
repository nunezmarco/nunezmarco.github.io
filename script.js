var height = 100;
var width = 100;
var nocount = 0;

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yesButton");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    yesButton.style.width  = width + "px";
    yesButton.style.height  = height + "px";

    height +=50;
    width += 50;

    document.getElementById("question").textContent =
      "El botón de 'no' es solo de adorno";
    document.getElementById("name").style.display = "none";
    nocount++;

    if(nocount >= 7){
      document.getElementById("question").textContent = "POR QUE PONES TANTAS VECES QUE NO >:(";
      document.getElementById("no-button").style.display= 'none';
      document.getElementsByClassName("image")[0].src = "images/giphy.gif";
    }
    console.log(nocount);
  
  }


  if (response === "Yes") {

    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "YEIIII te veo el 14 hermosa 💘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    document.getElementById("yesButton").remove();
  }
}
