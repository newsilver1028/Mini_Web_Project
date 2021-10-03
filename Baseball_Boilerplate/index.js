const $startButtons = document.querySelectorAll(".start-button");
const $restartButton = document.querySelector("#restart-button");
const $inputNumber = document.querySelector("#input-number");
const $board = document.querySelector("#board");
const $resultTable = document.querySelector("#result-table");
const $count = document.querySelector("#count");
const $startPage = document.querySelector(".start-page");
const $gamePage = document.querySelector(".game-page");
const $content = document.querySelector(".content");
const $correctPage = document.querySelector(".correct-page");
const $restartPage = document.querySelector(".restart-page");

const CLASS_NAME_HIDDEN = "hidden";
$gamePage.className = CLASS_NAME_HIDDEN;
$restartPage.className = CLASS_NAME_HIDDEN;
$correctPage.className = CLASS_NAME_HIDDEN;
for(const startButton of $startButtons){
  startButton.addEventListener("click", handleStartButtonClick);
}

function handleStartButtonClick(){
  $startPage.className = CLASS_NAME_HIDDEN;
  $restartPage.className = CLASS_NAME_HIDDEN;
  $gamePage.className = "game-page";
  $inputNumber.value = null;
  let count = 0;
  while($content.hasChildNodes()){
    $content.removeChild($content.childNodes[0]);
  }
  const answer = Math.floor(Math.random() * 900)+100;
  $inputNumber.addEventListener("keypress",enterPress);
  function enterPress() {
    if( window.event.keyCode==13 ){
      if(count===10){
        $inputNumber.removeEventListener("keypress",enterPress);
        $restartPage.className = "restart-page";
        $gamePage.className = CLASS_NAME_HIDDEN;
        count = -1;
        return;
      }
      count++;
      const number = $inputNumber.value;
      if(number>999 || number<100){
        alert("세자리 숫자를 입력해주십시오.");
        return;
      }
    const numArray = String(number).split("");
    const answerArray = String(answer).split("");
    let strike = 0;
    let ball = 0;
    numArray.forEach((element,index) => {
      if(element === answerArray[index]){
        strike++;
      }
      answerArray.forEach((element2,index2)=>{
        if(element === element2){
          if(index !== index2){
          ball++;
          }
          return;
        }
        return;
      });
    });
    if(strike ===3){
      $gamePage.className = CLASS_NAME_HIDDEN;
      $correctPage.className = "correct-page";
      return;
    }
    
    const contentCell = document.createElement("div");
    contentCell.className = "content-cell";
    const chanceCell = document.createElement("spen")
    const numberCell = document.createElement("span");
    const strikeCell = document.createElement("span");
    const ballCell = document.createElement("span");

    $content.append(contentCell);
    $content.className = "content";

    chanceCell.textContent = count;
    numberCell.textContent = number;
    strikeCell.textContent = strike;
    ballCell.textContent = ball;

    contentCell.append(chanceCell);
    contentCell.append(numberCell);
    contentCell.append(strikeCell);
    contentCell.append(ballCell);
  }
}
}

