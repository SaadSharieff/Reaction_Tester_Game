function currentDayTime () {
    var dayConvert = new Date();
    var timeConvert = new Date();
    var day = dayConvert.getDay();
    var hours = timeConvert.getHours();
    var mins = timeConvert.getMinutes();
    var secs = timeConvert.getSeconds();
    //convert day to string
    if (day == 0){
        day = "Sunday"
    } else if (day == 1){
        day = "Monday"
    } else if (day == 2){
        day = "Tuesday"
    } else if (day == 3){
        day = "Wednesday"
    } else if (day == 4){
        day = "Thursday"
    } else if (day == 5){
        day = "Friday"
    } else{
        day = "Saturday"
    }
    
    if (hours >= 12){
        hours = hours - 12;
        hours = hours + " PM";
    } else if (hours < 12) {
        hours = hours + " AM";
    } else if (hours == 0) {
        hours = 12 + " AM";
    }
    
    
    
    console.log("Today is: " + day);
    console.log("Current time is: " + hours + ":" + mins + ":" + secs);
}
currentDayTime();