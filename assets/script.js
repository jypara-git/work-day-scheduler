var currentDay = moment().format("ddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

var now = new Date().getHours();
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var saveEvent = function(event) {
    var buttonId = event.currentTarget.id;
    // get commentId from corresponding buttonId
    var commentId = buttonId.replace("button", "#comment");

    localStorage.setItem(commentId, $(commentId).val());
};
for (i = 0; i < hours.length; i++) {
    var hour = hours[i];
    $("#button" + hour).on("click", saveEvent);
    if(now === hour) {
        $("#comment" + hour).addClass("present");
    }
    else if(now < hour) {
        $("#comment" + hour).addClass("future");
    }
    else{
        $("#comment" + hour).addClass("past");
    }  
    $("#comment" + hour).val(localStorage.getItem("#comment" + hour));
};


