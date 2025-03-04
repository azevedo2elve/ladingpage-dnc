var leonardo = window.document.getElementById("leonardo");
var bruna = window.document.getElementById("bruna");
var samantha = window.document.getElementById("samantha");
var arrow_left = window.document.getElementById("arrow-left");
var arrow_right = window.document.getElementById("arrow-right");

function rollRight() {
  bruna.style = "display: none";
  samantha.style = "display: flex";
  arrow_right.style = "display: none";
  arrow_left.style = "display: flex";
}

function rollLeft() {
    bruna.style = "display: flex";
    samantha.style = "display: none";
    arrow_right.style = "display: flex";
    arrow_left.style = "display: none";
}