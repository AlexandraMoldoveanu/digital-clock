function clock() {
    const fullDate = new Date();
    let hour = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();

    if( hour < 10 ){
        hour = "0" + hour;
    }
    if( minutes < 10 ){
        minutes = "0" + minutes;
    }
    if( seconds < 10 ){
        seconds = "0" + seconds;
    }
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = ":" + minutes;
    document.getElementById("second").innerHTML = ":" + seconds;
}

setInterval(clock, 100);


