var date = new Date();
var week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");

var day = document.getElementById("day");
day.innerHTML = week[date.getDay()];

var todate = document.getElementById("date");
todate.innerHTML = date.getDate();

var mon = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
var month = document.getElementById("month");
month.innerHTML = mon[date.getMonth()] + " " + date.getFullYear();

var joinWeek = week.join(" ");
var weekText = document.getElementById("week");
weekText.innerHTML = joinWeek;
