//global variables//
const generateBtn = document.querySelector("#generateBtn");

//this needs to be filled out//
const characterClassDescription = [];




//fetch class api//
var getCharacterClass = function (getClass) {
    if (getClass === "class") {
        getClass = randO("#dropdown-content1")
    };
    //if class == Class then randomize//
    var apiClassUrl = 'https://www.dnd5eapi.co/api/classes/' + getClass.trim().toLowerCase();
    fetch(apiClassUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    //write Class to DOM//
                    $("#classInfo").text(data.name);
                    //write race Age to Dom//
                    var dataAge = $("<p>");
                    dataAge.addClass("raceContent")
                    dataAge.text(data.age);
                    $("#raceInfo").append(dataAge);
                });
            }
        });
};

//fetch race api//
var getCharacterRace = function (getRace) {
    if (getRace === "race") {
        getRace = randO("#dropdown-content2")
    };
    //if race == Race then randomize//
    var apiRaceUrl = 'https://www.dnd5eapi.co/api/races/' + getRace.trim().toLowerCase();
    fetch(apiRaceUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data)
                    //write race Name to DOM//
                    $("#raceInfo").text(data.name);
                    //write race Age to Dom//
                    var dataAge = $("<p>");
                    dataAge.addClass("raceContent")
                    dataAge.text(data.age);
                    $("#raceInfo").append(dataAge);
                    //wrtie race size to Dom//
                    var dataSize = $("<p>");
                    dataSize.addClass("raceContent")
                    dataSize.text(data.size_description);
                    $("#raceInfo").append(dataSize);
                });
            }
        });
};

//fetch background//
var getCharacterBackground = function (getBackground) {
    if (getBackground === "background") {
        getBackground = randO("#dropdown-content3")
    };
    console.log(getBackground);
    //write background to dom//
    $("#backgroundInfo").text(getBackground);
};

//find out how to pull background description//

// var backgroundDescription = $('select.dropdown-content3').find(':selected').attr('description');
// $('.dropdown-content3').val(backgroundDescription);


//helper function for randomizing dropdowns//
var randO = function (classing) {
    const select = document.querySelector(classing);
    const toget = Math.random() * (select.options.length - 1);
    return select.options[Math.floor(toget)].value;
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
};

generateBtn.addEventListener('click', formSubmitHandler);
