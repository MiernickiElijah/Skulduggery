//global variables//
const generateBtn = document.querySelector("#generateBtn");

//need to randomize these variables//
// getRandomBackground
// getRandomClass
// getRandomRace

//fetch class api//
var getCharacterClass = function (getClass) {
    //if class == Class then randomize//
    var apiClassUrl = 'https://www.dnd5eapi.co/api/classes/' + getClass.trim().toLowerCase();
    fetch(apiClassUrl)
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
    var apiRaceUrl = 'https://www.dnd5eapi.co/api/races/' + getRace.trim().toLowerCase();
    fetch(apiRaceUrl)
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
    var apiBackgroundUrl = 'https://www.dnd5eapi.co/api/backgrounds/' + getBackground.trim().toLowerCase();
    fetch(apiBackgroundUrl)
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

    const getClass = $("#dropdown-content1 option:selected").val();
    const getRace = $("#dropdown-content2 option:selected").val();
    const getBackground = $("#dropdown-content3 option:selected").val();
    //calling functions on formSubmit//
    getCharacterClass(getClass);
    getCharacterRace(getRace);
    getCharacterBackground(getBackground);
    console.log(getClass);
};

generateBtn.addEventListener('click', formSubmitHandler);
