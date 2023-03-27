

let innerText = document.querySelector(".message")
const checkBtn = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random()*20 +1);
let body = document.querySelector("body");
let score = 20;
let hScore = 0;

 checkBtn.addEventListener("click", ()=>{
  console.log(secretNumber);
  const inputValue = Number(document.querySelector(".input-guess").value);
 if (!inputValue) {
  innerText.textContent = "🙄No Number?";
 }else if (inputValue === secretNumber){
  let number = document.querySelector(".number").textContent= secretNumber;
  innerText.textContent = "😁You won!";
  body.style.backgroundColor = "#60b347"
  document.querySelector(".number").style.width= "20rem";
// hScore = score;
// document.querySelector(".high").textContent = hScore;
if (score > hScore) {
 hScore = score;
 document.querySelector(".high").textContent = hScore;
}

 }else if (inputValue > secretNumber){
  if (score > 1) {
   innerText.textContent = "🙂Too high";
  score--;
  document.querySelector(".score").textContent = score;
  } else {
   innerText.textContent = "😭You lost the game";
   document.querySelector(".score").textContent = 0;
  }
  
 }else if (inputValue < secretNumber){
  if (score > 1) {
   innerText.textContent = "🙃Too Low";
  score--;
  document.querySelector(".score").textContent = score;
  }else{
   innerText.textContent = "😭You lost the game";
   document.querySelector(".score").textContent = 0;
  }
  
 }
 
} );

//Again button
const againBtn = document.querySelector(".again");
againBtn.addEventListener("click", ()=>{
 score = 20;
 secretNumber = Math.trunc(Math.random()*20 +1);
 document.querySelector(".score").textContent = score;
 innerText.textContent = "Start guessing...";
body.style.backgroundColor = "#222";
const inputValue = document.querySelector(".input-guess").value = "";
number = document.querySelector(".number").textContent = "?" ;
});