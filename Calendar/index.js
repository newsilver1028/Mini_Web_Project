const $calendarTable = document.querySelector("#calendar-table");
let today = new Date();
const DATE = new Date();
const WEEK = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
const $day = document.querySelector("#day");
const $date = document.querySelector("#date");
const MONTH = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
const $month = document.querySelector("#month");
const tbody = document.createElement("tbody");
$calendarTable.append(tbody);

const $prevButton = document.querySelector("#prev-button");
$prevButton.addEventListener("click",handlePrevMonthClick);
const $nextButton = document.querySelector("#next-button");
$nextButton.addEventListener("click",handleNextMonthClick);

createCal();

function createCal() {
  $day.textContent = WEEK[today.getDay()];
  $date.textContent = today.getDate();
  $month.textContent = `${MONTH[today.getMonth()]} ${today.getFullYear()}`;

  const firstDate = new Date(today.getFullYear(),today.getMonth(),1);
  const lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);

  while(tbody.rows.length > 0){
    tbody.deleteRow(tbody.rows.length-1);
  }
  let row = tbody.insertRow();
  let cell = "";
  let count = 0;

  for(let i = 0; i<firstDate.getDay();i++){
    console.log(i);
    cell = row.insertCell();
    count++;
  }
  for(let j = 1;j<=lastDate.getDate();j++){
    if(count % 7 === 0){
      row = tbody.insertRow();
    }
    cell = row.insertCell();
    cell.textContent = j;
    count++;
  }

}

function handleNextMonthClick() {
  today = new Date(today.getFullYear(),today.getMonth() + 1,today.getDate());
  createCal();
}

function handlePrevMonthClick(){
  today = new Date(today.getFullYear(),today.getMonth() - 1,today.getDate());
  createCal();
}