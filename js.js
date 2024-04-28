function myTime() {
    let d = new Date();
    let hour =  d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
}
setInterval(myTime, 1000)