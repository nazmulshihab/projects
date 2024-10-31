let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".New-game");
let winMsg = document.querySelector("h2");
let turn = 1;
let X = 0;
let O = 0;


const winPattern = [[0,1,2],[0,3,6],[6,7,8],[2,5,8],[3,4,5],[1,4,7],[0,4,8],[2,4,6]];


function disableButton()
{
  buttons.forEach(button=>{
    button.disabled = true;
  })
}

function enableButton()
{
  buttons.forEach(button=>{
    button.disabled = false;
    button.innerText = "";
    button.style.backgroundColor = "white";
    winMsg.style.display = "none";
  })
}

function checkWin(){
  winPattern.forEach((value)=>{
    for(let i of value)
    {
      if(buttons[i].innerText=="X")
      {
        X++;
      }
      else if(buttons[i].innerText=="O")
      {
        O++;
      }
    }
    if(X==3)
    {
      console.log("Winner X");
      for(let i of value)
      {
        buttons[i].style.backgroundColor = "red";
      }
      winMsg.textContent = "Winner X !";
      winMsg.style.display = "block";
      disableButton();
      resetBtn.style.display = "none";
      newGame.style.display = "inline-block";
    }
    else if(O==3)
    {
      console.log("Winner O");
      for(let i of value)
        {
          buttons[i].style.backgroundColor = "red";
        }
        winMsg.textContent = "Winner O !";
        winMsg.style.display = "block";
        disableButton();
        resetBtn.style.display = "none";
        newGame.style.display = "inline-block";
    }
    X = 0;
    O = 0;
  })
  }


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turn % 2 != 0) {
    button.innerText = "X";  
    } else {
    button.innerText = "O";
    }
    turn++;
    button.disabled = true;
    checkWin();
  });
});

resetBtn.addEventListener("click",()=>{
  enableButton();
})

newGame.addEventListener("click",()=>{
  enableButton();
  newGame.style.display = "none";
  resetBtn.style.display = "inline-block";
})



