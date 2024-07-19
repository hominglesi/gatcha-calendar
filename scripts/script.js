function getSelectedGames(){
    var games = new Array();

    /*if(isGameSelected("Genshin"))*/ games.push("genshin");
    /*if(isGameSelected("Starrail"))*/ games.push("starrail");
    /*if(isGameSelected("Wuwa"))*/ games.push("wuwa");

    return games;
}

function toggleSettings(){
    var settingsWindow = document.getElementById("settingsWindow");
    settingsWindow.hidden = !settingsWindow.hidden;

    var settingsBackdrop = document.getElementById("settingsBackdrop");
    settingsBackdrop.hidden = !settingsBackdrop.hidden
}

function isGameSelected(game){
    return document.getElementById(game + "GameButton").classList.contains("settingsGameDisabled") == false;
}

function setGameSelected(game, enabled){
    var gameButton = document.getElementById(game + "GameButton");
    if(enabled && gameButton.classList.contains("settingsGameDisabled"))
        gameButton.classList.remove("settingsGameDisabled");

    if(enabled == false && gameButton.classList.contains("settingsGameDisabled") == false)
        gameButton.classList.add("settingsGameDisabled");
}

function toggleGameSelected(game){
    setGameSelected(game, !isGameSelected(game));  
    nodeDisplayPopulateNodeDisplay();
    localStorage.setItem("games", getSelectedGames().join("|"));
}

/*
var localGames = localStorage.getItem("games")
if(localGames != null){
    var localGamesArray = localGames.split("|");

    setGameSelected("Genshin", localGamesArray.indexOf("genshin") >= 0);
    setGameSelected("Starrail", localGamesArray.indexOf("starrail") >= 0);
    setGameSelected("Wuwa", localGamesArray.indexOf("wuwa") >= 0);
}*/
//document.getElementById("GenshinGameButton").addEventListener("click", (e) => toggleGameSelected("Genshin"));
//document.getElementById("StarrailGameButton").addEventListener("click", (e) => toggleGameSelected("Starrail"));
//document.getElementById("WuwaGameButton").addEventListener("click", (e) => toggleGameSelected("Wuwa"));

//document.getElementById("settingsButton").addEventListener("click", (e) => toggleSettings());
//document.getElementById("settingsExitButton").addEventListener("click", (e) => toggleSettings());
//document.getElementById("settingsBackdrop").addEventListener("click", (e) => toggleSettings());

nodeDisplayPopulateNodeDisplay();
nodeDisplayScrollToNow();
