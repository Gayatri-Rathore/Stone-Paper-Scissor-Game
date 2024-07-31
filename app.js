let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msgbox=document.querySelector("#msg");
let uscore=document.querySelector("#user-score");
let cscore=document.querySelector("#comp-score");
const GenCompchoice = () => {
  const options = ["stone", "paper", "scissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};
const drawgame = () => {
  console.log("game is drawn");
  msgbox.innerText="game was draw";
  msgbox.style.backgroundColor="yellow";
};
const gamestatus = (userwin,userchoice,compchoice) => {
  if (userwin) {
    userscore++;
    uscore.innerHTML=userscore;
    console.log("you win the game");
    msgbox.innerText=`You win! Your ${userchoice} beats ${compchoice}`;;
    msgbox.style.backgroundColor="green";
  } else {
    compscore++;
    cscore.innerHTML=compscore;
    console.log("computer win the game");
    msgbox.innerText=`You lost. ${compchoice} beats your ${userchoice}`;
    msgbox.style.backgroundColor="red";
  }
};
const playgame = (userchoice) => {
  console.log("user choice is", userchoice);
  const compchoice = GenCompchoice();
  console.log("computer choice is", compchoice);
  if (userchoice == compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "stone") {
      userwin = compchoice === "paper" ? false:true;
    } else if (userchoice ==="paper") {
      userwin = compchoice === "scissor"? false:true;
    } else {
      userwin = compchoice === "stone"?  false:true;
    }
   gamestatus(userwin,userchoice,compchoice);
  }
};

choices.forEach((choice) => {
  const userchoice = choice.getAttribute("id");
  choice.addEventListener("click", () => {
    playgame(userchoice);
  });
});
