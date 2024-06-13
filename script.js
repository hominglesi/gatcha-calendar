function createDateLines(){
    var container = document.getElementById("NodeContainer");
    var offset = 0;

    for (let i = 1; i <= 30; i++) {
        var line = document.createElement("div");
        line.classList += "dateLine";
        line.style.left = offset + "px";
        container.appendChild(line);

        var number = document.createElement("h1");
        number.classList += "dateNumber";
        number.innerText = i;
        number.style.left += offset + 5 + "px";
        container.appendChild(number);

        offset += 70;
    }
}

function createDateLineNow(){
    var container = document.getElementById("NodeContainer");

    var dateLineNow = document.createElement("div");
    dateLineNow.classList += "dateLineNow";
    

    var dateObject = new Date();

    var offset = (dateObject.getDate() - 1) * 70;
    offset += (dateObject.getHours()) * 70 / 24;
    dateLineNow.style.left = offset + "px";

    console.log(dateObject.getHours());

    container.appendChild(dateLineNow);
}

function calculateDateOffset(date){
    var dateObject = new Date(date);

    var offset = (dateObject.getDate() - 1) * 70;
    offset += (dateObject.getHours()) * 70 / 24;
  
    return offset;
}


function createCalendarNode(row, name, start, end, color){
    var container = document.getElementById("NodeContainer");

    var node = document.createElement("div");
    node.classList += "node";
    node.style.width = calculateDateOffset(end) - calculateDateOffset(start) + "px";
    node.style.marginLeft = calculateDateOffset(start) + "px";
    node.style.marginTop = 100 + row * 50 + "px";
    node.style.backgroundColor = color;

    var text = document.createElement("h1");
    text.innerText = name;
    text.classList += "nodeName";
    node.appendChild(text);

    var dateNow = new Date();
    var endDate = new Date(end);

    var timeRemaining = document.createElement("h1");
    timeRemaining.classList += "nodeTimeRemaining";
    var dayRemaining = endDate.getDate() - dateNow.getDate();
    var hourRemaining = endDate.getHours() - dateNow.getHours();
    timeRemaining.innerText = dayRemaining + "d " + hourRemaining + "h";
    node.appendChild(timeRemaining);

    container.appendChild(node);
}

var jsonData = JSON.parse(data);

createDateLines();

jsonData.nodes.forEach(element => {

    var row = 0;
    var color = "#ffcc66";

    switch(element.category){
        case "abyss": 
            row = 0;
            color = "#0066cc";
            break;
        case "event":
            row = 1;
            color = "#00ff99";
            break;
        case "event2":
            row = 2;
            color = "#9999ff";
            break;
        case "moc":
            row = 3;
            color = "#ff5050";
            break;
        case "moc2":
            row = 4;
            color = "#ff6666";
            break;
        case "pf":
            row = 5;
            color = "#ff66cc";
            break;
        case "tower":
            row = 6;
            color = "#ff9900";
            break;
        case "event3":
            row = 7;
            color = "#9999ff";
            break;
        case "event4":
            row = 8;
            color = "#00ffcc";
            break;
        case "event5":
            row = 9;
            color = "#cc3399";
            break;
        case "event6":
            row = 10;
            color = "#66ff33";
            break;
    }

    createCalendarNode(row, element.name, element.startTime, element.endTime, color);
});

createDateLineNow();

