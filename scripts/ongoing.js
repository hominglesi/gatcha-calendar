var ongoingEvents = getOngoingEvents();
var eventContainer = document.getElementsByClassName("event-container")[0];

ongoingEvents.forEach(event => {
    var card = createEventCard(event);
    eventContainer.appendChild(card);
});

function createEventCard(event){
    var eventCard = document.createElement("div");
    eventCard.classList += "event-card";
    eventCard.style.width = "320px";
    eventCard.style.height = "270px";

    var topPart = document.createElement("div");
    topPart.classList += "top-part";
    var bottomPart = document.createElement("div");
    bottomPart.classList += "bottom-part";

    var eventImage = document.createElement("img");
    if(event.image != undefined)
        eventImage.src = "img/" + event.image + ".png"
    else
        eventImage.src = "img/galactic-baseballer.png";
    topPart.appendChild(eventImage);

    var eventTitle = document.createElement("h1");
    eventTitle.innerText = event.name;
    topPart.appendChild(eventTitle);

    var gameName = document.createElement("h2");
    gameName.innerText = getGameName(event.game);
    topPart.appendChild(gameName);

    var timeRemaining = document.createElement("h3");
    timeRemaining.setAttribute("data-endtime", event.endTime);
    showShortTimeRemaining(timeRemaining);
    bottomPart.appendChild(timeRemaining);
    bottomPart.addEventListener("mouseenter", (e) => showFullTimeRemaining(e.target.firstChild));
    bottomPart.addEventListener("mouseleave", (e) => showShortTimeRemaining(e.target.firstChild));
    

    eventCard.appendChild(topPart);
    eventCard.appendChild(bottomPart)

    return eventCard;
}

function showFullTimeRemaining(card){
    console.log(card.dataset.endtime);
    
    var endDate = new Date(card.dataset.endtime);
    card.innerText = getLongTimeRemainingText(endDate);
}

function showShortTimeRemaining(card){
    var endDate = new Date(card.dataset.endtime);
    card.innerText = getTimeRemainingText(endDate);
}