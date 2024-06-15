function getDaysInAMonth(month){ return dateData.monthDays[month]; }

function getMonthName(month){ return dateData.monthNames[month]; }

function getMonthNameShort(month){ return dateData.monthNamesShort[month]; }

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