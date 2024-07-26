var containerStartDate = new Date("2024-05-27T22:00:00Z");
var containerEndDate = new Date("2024-08-31T22:00:00Z");
var timelineContainer = document.getElementsByClassName("timeline-container")[0];
var timelineContainerInner = document.getElementsByClassName("timeline-container-inner")[0];
const headerHeight = 70;
const nodeHeight = 50;
const nodeSpacing = 18;
const dateWidth = 35;
const scrollSpeed = 80;
const genshinCategoryOrder = ["event", "character", "character2", "abyss", "theather", "web"];
const starrailCategoryOrder = ["event", "event2", "event3", "character", "character2", "moc", "apocalyptic", "pf", "web"];
const wuwaCategoryOrder = ["event", "event2", "event3", "event4", "character", "character2", "tower", "illusiverealm"];

timelineContainer.addEventListener("wheel", function (e) {
    if (e.deltaY < 0) timelineContainer.scrollLeft += scrollSpeed;
    else timelineContainer.scrollLeft -= scrollSpeed;
});

var initialGame = "genshin";

var storedSelected = localStorage.getItem("timelineSelected");
if(storedSelected != undefined)
    initialGame = storedSelected;

populateTimeline(initialGame);

function populateTimeline(game){
    timelineContainerInner.innerHTML = "";
    timelineContainerInner.style.width = getDateHorizontalOffset(containerEndDate) + "px";

    updateSelectorColors(game);
    addContainerHeader();

    eventData.events.forEach(event => {
        if(event.game == game)
    
        createNode(event);
    });
    
    addNowLine();
    nodeDisplayScrollToNow();

    localStorage.setItem("timelineSelected", game);
}

function updateSelectorColors(game){
    var selectors = document.getElementsByClassName("timeline-selection-button");
    for(var i = 0; i < selectors.length; i++){
        selectors[i].style.backgroundColor = "#494949";
    }

    var gameSelector = 0;
    switch(game){
        case "starrail": gameSelector = 1; break;
        case "wuwa": gameSelector = 2; break;
    }

    selectors[gameSelector].style.backgroundColor = "#4F71B5";
}

function createNode(event){
    var eventStartDate = new Date(event.startTime);
    var eventEndDate = new Date(event.endTime);

    if(eventStartDate > containerEndDate || eventEndDate < containerStartDate) return;

    var displayStartDate = eventStartDate < containerStartDate ? containerStartDate : eventStartDate;
    var displayEndDate = eventEndDate > containerEndDate ? containerEndDate : eventEndDate;

    var nodeStartHorizontalOffset = getDateHorizontalOffset(displayStartDate);
    var nodeTotalWidth = getDateHorizontalOffset(displayEndDate) - getDateHorizontalOffset(displayStartDate);
    var nodeVerticalOffset = getEventVerticalOffset(event.game, event.category);

    var node = document.createElement("div");
    node.classList += "timeline-node";
    node.style.left = nodeStartHorizontalOffset + "px";
    node.style.width = nodeTotalWidth + "px";
    node.style.top = nodeVerticalOffset + "px";
    node.style.height = nodeHeight + "px";
    timelineContainerInner.appendChild(node);

    var nodeTail = document.createElement("div");
    nodeTail.classList += "timeline-node-tail";
    nodeTail.style.height = nodeHeight - 4 + "px";
    nodeTail.style.left = nodeStartHorizontalOffset - 28 + "px";
    nodeTail.style.top = nodeVerticalOffset + "px";
    nodeTail.style.backgroundColor = event.color;
    timelineContainerInner.appendChild(nodeTail);

    var nodeInner = document.createElement("div");
    nodeInner.classList += "timeline-node-inner";
    nodeInner.style.backgroundColor = event.color;
    node.appendChild(nodeInner);

    var image = document.createElement("img");
    image.src = "img/" + event.image + ".png";
    if(nodeTotalWidth < 250){
        image.style.width = 130 + "px";
    }
    nodeInner.appendChild(image);

    var imageFadeover = document.createElement("div");
    imageFadeover.classList += "timeline-node-image-fadeover";
    imageFadeover.style.background = "linear-gradient(to right, " + event.color +", rgba(0, 0, 0, 0))"
    if(nodeTotalWidth < 250){
        imageFadeover.style.width = 50 + "px";
        imageFadeover.style.right = 80 + "px";
    }
    nodeInner.appendChild(imageFadeover);

    var nodeName = document.createElement("span");
    nodeName.innerText = event.name;
    nodeName.style.top = 12 + "px";
    nodeName.style.maxWidth = nodeTotalWidth - (nodeTotalWidth < 250 ? 50 : 140) + "px";
    nodeInner.appendChild(nodeName);

    if(nodeName.clientHeight > 40){
        nodeName.style.fontSize = 16 + "px";
        nodeName.style.top = (nodeName.clientHeight > 30 ? 3 : 12) + "px";
    }
}

function addContainerHeader(){
    var offset = 0;
    var dayList = getDayListBetween(containerStartDate, containerEndDate);
    dayList.forEach(date => {
        if(date == dayList[dayList.length-1] || date == dayList[0]) {
            offset += dateWidth;
            return;
        }

        var line = document.createElement("div");
        line.style.left = offset + "px";
        line.classList += "timeline-date-line";
        timelineContainerInner.appendChild(line);

        if(date.day == 1){
            var month = document.createElement("h1");
            month.classList += "timeline-date-month";
            month.innerText = getMonthNameShort(date.month);
            timelineContainerInner.appendChild(month);
            month.style.left = offset - (month.clientWidth / 2) + "px";
        }
        else{
            var topLine = document.createElement("div");
            topLine.style.left = offset + "px";
            topLine.classList += "timeline-date-line-top";
            timelineContainerInner.appendChild(topLine);
        }

        var day = document.createElement("h1");
        day.classList += "timeline-date-day";
        day.innerText = date.day;
        timelineContainerInner.appendChild(day);
        day.style.left = offset - (day.clientWidth / 2) + "px";

        offset += dateWidth;
    })
}

function addNowLine(){
    var now = document.createElement("div");
    now.classList += "timeline-date-now";
    now.style.left = getDaysBetween(containerStartDate, currentTime) * dateWidth + "px";
    timelineContainerInner.appendChild(now);
}

function getDateHorizontalOffset(date){
    return getDaysBetween(containerStartDate, date) * dateWidth;
}

function getEventVerticalOffset(game, category){
    var categoryOrder = genshinCategoryOrder;
    switch(game){
        case "starrail": categoryOrder = starrailCategoryOrder; break;
        case "wuwa": categoryOrder = wuwaCategoryOrder; break;
    }

    return headerHeight + (categoryOrder.indexOf(category) * (nodeHeight + nodeSpacing));
}

function nodeDisplayScrollToNow(){
    var scroll = getDaysBetween(containerStartDate, currentTime) * dateWidth;
    scroll -= timelineContainer.clientWidth / 2;

    timelineContainer.scrollLeft = scroll;
}