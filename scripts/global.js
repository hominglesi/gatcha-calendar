var currentTime = new Date();
var sidebar = document.getElementsByClassName("sidebar")[0];
var burgerIcon = document.getElementsByClassName("burger-icon")[0];
var contentContainer = document.getElementsByClassName("content-container")[0];

window.setInterval(() => currentTime = new Date(), 1000);

burgerIcon.addEventListener("click", e =>
{
    if(sidebar.style.display == "none"){
        sidebar.style.display = "block";
        contentContainer.style.width = "calc(100% - 300px)";
    }
    else{
        sidebar.style.display = "none";
        contentContainer.style.width = "100%";
    }
})

function navigateTo(page){
    window.location.href = page;
}

function getOngoingEvents(){
    var ongoingEvents = new Array();
    eventData.events.forEach(event => {
        var startDate = new Date(event.startTime);
        var endDate = new Date(event.endTime);

        if(startDate < currentTime && currentTime < endDate)
            ongoingEvents.push(event);
    });

    ongoingEvents.sort(compareEventEndTime);
    return ongoingEvents;
}

function compareEventEndTime(a, b){
    if(a.endTime > b.endTime) return 1;
    if(a.endTime < b.endTime) return -1;
    return 0;
}

function getDaysInAMonth(month){ return dateData.monthDays[month]; }

function getMonthName(month){ return dateData.monthNames[month]; }

function getMonthNameShort(month){ return dateData.monthNamesShort[month]; }

function getGameName(game){
    switch(game){
        case "genshin": return "Genshin Impact";
        case "starrail": return "Honkai: Star Rail";
        case "wuwa": return "Wuthering Waves";
    }

    return "Invalid Game";
}

function getTimeRemainingText(endDate){
    var timeRemaining = endDate - currentTime;
    
    var daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    if(daysRemaining >= 1) return daysRemaining + " days remaining";

    var hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    if(hoursRemaining >= 1) return hoursRemaining + " hours remaining";

    var minutesRemaining = Math.floor(timeRemaining / (1000 * 60));
    if(minutesRemaining >= 1) return minutesRemaining + " minutes remaining";

    var secondsRemaining = Math.floor(timeRemaining / 1000);
    if(secondsRemaining >= 1) return secondsRemaining + " seconds remaining";

    return "Event ended";
}

function getLongTimeRemainingText(endDate){
    var timeRemaining = endDate - currentTime;

    var daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    timeRemaining -= daysRemaining * 1000 * 60 * 60 * 24;

    var hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    timeRemaining -= hoursRemaining * 1000 * 60 * 60;

    var minutesRemaining = Math.floor(timeRemaining / (1000 * 60));
    timeRemaining -= minutesRemaining * 1000 * 60;

    var secondsRemaining = Math.floor(timeRemaining / 1000);

    if(daysRemaining > 0) {
        var dayString = daysRemaining == 1 ? "day" : "days";
        var hourString = hoursRemaining == 1 ? "hour" : "hours";
        return `${daysRemaining}  ${dayString} ${hoursRemaining} ${hourString}`;
    }

    if(hoursRemaining > 0) {
        var hourString = hoursRemaining == 1 ? "hour" : "hours";
        var minuteString = minutesRemaining == 1 ? "minute" : "minutes";
        return `${hoursRemaining}  ${hourString} ${minutesRemaining} ${minuteString}`;
    }
    
    if(minutesRemaining > 0){
        var minuteString = minutesRemaining == 1 ? "minute" : "minutes";
        var secondsString = secondsRemaining == 1 ? "second" : "seconds";
        return `${minutesRemaining}  ${minuteString} ${secondsRemaining} ${secondsString}`;
    }

    var secondsString = secondsRemaining == 1 ? "second" : "seconds";
    return `${secondsRemaining} ${secondsString}`;
}

function getDaysBetween(date1, date2){
    var startDate = new Date(Math.min(date1, date2));
    var endDate = new Date(Math.max(date1, date2));
    
    return (endDate.getTime() - startDate.getTime()) / 1000 / 3600 / 24;
}

function getDayListBetween(date1, date2){
    var currentDate = new Date(Math.min(date1, date2));
    var endDate = new Date(Math.max(date1, date2));

    var output = new Array();

    while(endDate > currentDate){
        var dayDate = new Date(currentDate);

        var dayEntry = new Object();
        dayEntry.day = dayDate.getDate();
        dayEntry.month = dayDate.getMonth();
        output.push(dayEntry);

        currentDate.setUTCDate(currentDate.getUTCDate() + 1);
    }

    return output;
}