//global variables//
var getClass = $("#dropdown-menu1 option:selected").text();
var getRace = $("#dropdown-menu2 option:selected").text();
var getBackground = $("#dropdown-menu3 option:selected").text();
var generateBtn = document.querySelector("#generateBtn");

//need to randomize these variables//
// getRandomBackground
// getRandomClass
// getRandomRace

//fetch class api//
var getCharacterClass = function (getClass) {
    //if class == Class then randomize//
    var apiUrl = 'https://www.dnd5eapi.co/api/classes/' + getClass;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    //write Class to DOM//
                    $("").text(data);
                });
            }
        });
};

//fetch race api//
var getCharacterRace = function (getRace) {
    //if race == Race then randomize//
    var apiUrl = 'https://www.dnd5eapi.co/api/races/' + getRace;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    //write Class to DOM//
                    $("").text(data);
                });
            }
        });
};

//fetch background api//
var getCharacterBackground = function (getBackground) {
    //if background == Background then randomize//
    var apiUrl = 'https://www.dnd5eapi.co/api/backgrounds/' + getBackground;
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    //write background to DOM//
                    $("").text(data);
                });
            }
        });
};

//run dropdown menu changes on generate submit//
var formSubmitHandler = function (event) {
    event.preventDefault();

    getCharacterClass();
};

generateBtn.addEventListener('submit', formSubmitHandler);
