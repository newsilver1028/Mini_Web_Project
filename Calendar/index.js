var date = new Date();
var week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");

var day = document.getElementById("day");
day.innerHTML = week[date.getDay()];

var todate = document.getElementById("date");
todate.innerHTML = date.getDate();

var mon = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
var month = document.getElementById("month");
month.innerHTML = mon[date.getMonth()] + " " + date.getFullYear();

function createCal() {
    var firstDate = new Date(date.getFullYear, date.getMonth, 1);
    var lastDate = new Date(date.getFullYear, today.getMonth() + 1, 0);

    var tb = document.getElementById("calendar");
    var tb2 = document.getElementById("tbday");

    while (tb.rows.length > 2) {
        tb.deleteRow(tb.rows.length - 1);
    }
    var row = null;
    row = tb.insertRow();
}
