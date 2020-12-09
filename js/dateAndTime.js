window.onload = displayClock();

function displayClock() {
    var dateGlobal = new Date();

    var day = dateGlobal.getDay();
    var month = dateGlobal.getMonth();
    var dayNumber = dateGlobal.getDate();

    var heure = dateGlobal.getHours();
    var minute = dateGlobal.getMinutes();

    if (heure < 10) {
        heure = "0" + heure
    }

    if (minute < 10) {
        minute = "0" + minute
    }


    var MONTH = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre",
        "novembre", "décembre"];
    var DAY = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    day = DAY[day];
    month = MONTH[month];

    document.getElementById("currentTime").innerHTML = heure + ":" + minute;
    document.getElementById("currentDate").innerHTML = day + " " + dayNumber + " " + " " + month;

    setTimeout(displayClock, 1000);
}