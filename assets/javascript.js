//Global Variables//
const characterClass = $(""); //selector for characterClass 
const characterRace = $(""); //selector for characterRace
const characterGender = $(""); //selector for characterGender


//get class information using 5e API//
getClassInformation = function () {
    var classApiUrl = 'https://www.dnd5eapi.co/api/' + characterClass + '';
    fetch(classApiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    //write city to DOM//
                    $("#city").text(data[0].name + ', ' + data[0].state)
                })
            }
        })
};


//get race information using 5e API//



//