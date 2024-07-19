var nodeContainerStartDate = new Date("2024-05-31T22:00:00Z");
var nodeContainerEndDate = new Date("2024-07-30T22:00:00Z");
var dateLength = 62;

var nodeContainer = document.getElementById("NodeContainer");

var scrollSpeed = 80;
nodeContainer.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) nodeContainer.scrollLeft += scrollSpeed;
    else nodeContainer.scrollLeft -= scrollSpeed;
});

nodeDisplayCreateDateLines();
var nodeContainerDefaultHTML = nodeContainer.innerHTML;

function nodeDisplayCreateDateLines(){
    var nodeDates = getDayListBetween(nodeContainerStartDate, nodeContainerEndDate);
    var offset = 0;
    var lastMonth = "";

    nodeDates.forEach(date => {
        nodeDisplayCreateDateLine(offset);

        if(date != nodeDates[nodeDates.length - 1]){
            var number = document.createElement("h1");
            number.classList += "dateNumber";
            number.innerText = date.day;
            number.style.left += offset + 5 + "px";
            nodeContainer.appendChild(number);
        }
        
        if(lastMonth != date.month){
            var month = document.createElement("h1");
            month.classList += "dateMonth";
            month.innerText = getMonthNameShort(date.month);
            month.style.left = offset + 5 + "px";
            nodeContainer.appendChild(month);
            lastMonth = date.month;
        }

        offset += dateLength;
    });
}

function nodeDisplayCreateDateLine(offset){
    var line = document.createElement("div");
    line.classList += "dateLine";
    line.style.marginLeft = offset + "px";
    nodeContainer.appendChild(line);
}

function nodeDisplayCreateNode(startDate, endDate, row, title, color){
    if(startDate > nodeContainerEndDate) return;
    if(endDate < nodeContainerStartDate) return;

    var startOffscreen = startDate < nodeContainerStartDate;
    var endOffscreen = endDate > nodeContainerEndDate;
    var clampedStartDate = startOffscreen ? nodeContainerStartDate : startDate;
    var clampedEndDate = endOffscreen ? nodeContainerEndDate : endDate;

    var startOffset = getDaysBetween(nodeContainerStartDate, clampedStartDate) * dateLength;
    var nodeWidth = getDaysBetween(clampedStartDate, clampedEndDate) * dateLength;

    var node = document.createElement("div");
    node.classList += "node";
    node.style.width = nodeWidth + "px";
    node.style.marginLeft = startOffset + "px";
    node.style.marginTop = 75 + row * 52 + "px";
    node.style.backgroundColor = color;
    if(startOffscreen){
        node.style.borderTopLeftRadius = 0;
        node.style.borderBottomLeftRadius = 0;
    }
    if(endOffscreen){
        node.style.borderTopRightRadius = 0;
        node.style.borderBottomRightRadius = 0;
    }
    nodeContainer.appendChild(node);

    var text = document.createElement("h1");
    text.innerText = title;
    text.classList += "nodeName";
    node.appendChild(text);

    var timeRemaining = document.createElement("h1");
    timeRemaining.classList += "nodeTimeRemaining";
    timeRemaining.innerText = "Ended";

    if(currentTime < endDate){
        var remainingTime = getDaysBetween(currentTime, endDate);
        var hour = Math.floor((remainingTime % 1) * 24);
        var day = Math.floor(remainingTime);

        timeRemaining.innerText = day + "d " + hour + "h";
    }

    node.appendChild(timeRemaining);
}

function nodeDisplayCreateDateLineNow(){
    var container = document.getElementById("NodeContainer");

    var dateLineNow = document.createElement("div");
    dateLineNow.classList += "dateLineNow";
    dateLineNow.style.left = getDaysBetween(nodeContainerStartDate, currentTime) * dateLength + "px";

    container.appendChild(dateLineNow);
}

function nodeDisplayPopulateNodeDisplay(){
    nodeContainer.innerHTML = nodeContainerDefaultHTML;

    var games = getSelectedGames();
    var categories = new Array();

    eventData.events.forEach(element => {
        if(games.indexOf(element.game) < 0) return;

        var color = "#ffcc66";

        var row = categories.indexOf(element.category);
        if(row < 0){
            categories.push(element.category);
            row = categories.length - 1;
        }

        switch(element.category){
            case "abyss": 
                color = "#0066cc";
                break;
            case "event":
                color = "#00ff99";
                break;
            case "event2":
                color = "#9999ff";
                break;
            case "moc":
                color = "#ff5050";
                break;
            case "moc2":
                color = "#ff6666";
                break;
            case "pf":
                color = "#ff66cc";
                break;
            case "tower":
                color = "#ff9900";
                break;
            case "event3":
                color = "#9999ff";
                break;
            case "event4":
                color = "#00ffcc";
                break;
            case "event5":
                color = "#cc3399";
                break;
            case "event6":
                color = "#66ff33";
                break;
            case "event7":
                color = "#ff9966";
                break;
        }

        nodeDisplayCreateNode(new Date(element.startTime), new Date(element.endTime), row, element.name, color);
    });

    nodeDisplayCreateDateLineNow();
}

function nodeDisplayScrollToNow(){
    var scroll = getDaysBetween(nodeContainerStartDate, currentTime) * dateLength;
    scroll -= nodeContainer.clientWidth / 2;

    nodeContainer.scrollLeft += scroll;
}