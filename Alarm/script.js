var a_hour,a_minute,a_second,b_hour,b_minute,b_second
function time(){
const d = new Date();
 a_hour = d.getHours();
 a_minute = d.getMinutes();
 a_second = d.getSeconds();
const date = document.querySelector(".current_time")
date.textContent = a_hour + ":" + a_minute + ":" + a_second
setTimeout(time,1000)  
if((a_hour==b_hour) && (a_minute==b_minute) && (a_second==b_second)){
    document.querySelector(".alarm_time").textContent="Ringing....."
}
}
document.querySelector(".add_alarm").addEventListener("click",function (){
     b_hour = prompt("Enter Hour")
     b_minute = prompt("Enter Minute")
     b_second = prompt("Enter Second")
    const set_time = document.querySelector(".set_time")
    set_time.textContent =b_hour + ":" + b_minute + ":" + b_second
    document.querySelector(".alarm_time").textContent=""
})
time();






