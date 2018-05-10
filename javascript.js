var timer;

function setCountdown() {
    clearInterval(timer);

    var picked_date = document.getElementById("date").value;
    var timer_hour = 0;
    var timer_min = 0;
    var timer_sec = 0;

    var end = new Date(picked_date);
    var now = new Date();
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

function showCountdown() {
    var now = new Date();
    var remain = end - now;
    if (remain < 0) {
        clearInterval(timer);
        document.getElementById("time").innerHTML = "Time is now!";
        return;
    }
    var days = Math.floor(remain / day);
    var hours = Math.floor((remain % day) / hour);
    var minutes = Math.floor((remain % hour) / minute);
    var seconds = Math.floor((remain % minute) / second);

    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

}
    timer = setInterval(showCountdown, 1000);
}
