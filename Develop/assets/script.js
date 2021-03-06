var currentDay = moment().format("ddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// var now = new Date().getHours();

var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
 
// for (i = 0; i < hours.length; i++) {
//     if(currentTime === hours) {
//         $(this).addClass("present");
//     }
//     else if(currentTime < hours) {
//         $(this).addClass("future");
//     }
//     else(currentTime > hours)
//         $(this).addClass("past");
//     }
