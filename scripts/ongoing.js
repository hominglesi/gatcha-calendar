var ongoingEvents = getOngoingEvents();
var eventContainer = document.getElementsByClassName("event-container")[0];

ongoingEvents.forEach(event => {
    var card = createEventCard(event);
    eventContainer.appendChild(card);
});

function createEventCard(event){
    var eventCard = document.createElement("div");
    eventCard.classList += "event-card";
    eventCard.style.width = "350px";
    eventCard.style.height = "300px";

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
    timeRemaining.innerText = getTimeRemainingText(event);
    bottomPart.appendChild(timeRemaining);

    eventCard.appendChild(topPart);
    eventCard.appendChild(bottomPart)

    return eventCard;
}