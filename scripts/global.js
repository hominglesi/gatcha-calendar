var currentTime = new Date();
var sidebar = document.getElementsByClassName("sidebar")[0];
var burgerIcon = document.getElementsByClassName("burger-icon")[0];
var contentContainer = document.getElementsByClassName("content-container")[0];

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

function getTimeRemainingText(event){
    var endDate = new Date(event.endTime);
    var timeRemaining = endDate - currentTime;
    
    var dayDifference = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    if(dayDifference >= 2) return dayDifference + " days remaining";

    var hourDifference = Math.floor(timeRemaining / (1000 * 60 * 60));
    if(hourDifference >= 2) return hourDifference + " hours remaining";

    var minuteDifference = Math.floor(timeRemaining / (1000 * 60));
    if(minuteDifference >= 2) return minuteDifference + " minutes remaining";

    var secondDifference = Math.floor(timeRemaining / 1000);
    if(secondDifference >= 1) return secondDifference + " seconds remaining";

    return "Event ended";
}

function getDaysBetween(date1, date2){
    if(date1 > date2){
        var temp = date1;
        date1 = date2;
        date2 = temp;
    }
    
    var dayDifference = 0;

    for (var i = date1.getMonth(); i <= date2.getMonth(); i++){
        var days = getDaysInAMonth(i);

        if(i == date1.getMonth()){
            days -= date1.getDate();
        }

        if(i == date2.getMonth()){
            days -= getDaysInAMonth(i) - date2.getDate();
        }
        
        dayDifference += days;
    }

    dayDifference -= date1.getHours() / 24;
    dayDifference -= date1.getMinutes() / 24 / 60;
    dayDifference += date2.getHours() / 24;
    dayDifference += date2.getMinutes() / 24 / 60;
    return dayDifference;
}

function getDayListBetween(date1, date2){
    if(date1 > date2){
        var temp = date1;
        date1 = date2;
        date2 = temp;
    }

    var output = new Array();

    for (var i = date1.getMonth(); i <= date2.getMonth(); i++){

        var startDay = 1;
        var endDay = getDaysInAMonth(i);

        if(i == date1.getMonth()) startDay = date1.getDate();
        if(i == date2.getMonth()) endDay = date2.getDate();

        for (let index = startDay; index <= endDay; index++) {
            
            var dayEntry = new Object();
            dayEntry.day = index;
            dayEntry.month = i;
            output.push(dayEntry);
        }
    }

    return output;
}