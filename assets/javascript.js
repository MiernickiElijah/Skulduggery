function getName() {
    //const getRace = document.querySelector("#getName").getAttribute("value");
    const getRace = $("#dropdown-content2 option:selected").val();
    //let raceType = '';
    if (getRace == 'elf') {
        raceType = 'elf';

    } else if (getRace == 'dwarf') {
        raceType = 'dwarf';

    } else if (getRace == 'dragonborn') {
        raceType = 'dragon';

    } else {
        raceType = 'medieval';

    }
    console.log(getRace)
    fetch('https://api.fungenerators.com/name/generate.json?category=' + raceType + '&limit=50').then(function (response) {
        response.json().then(function (data) {
            var names = data.contents.names;
            //console.log(names);
            var charName = data.contents.names[Math.floor(Math.random() * names.length)];
            ///console.log(charName);
            $('#characterTitle').text(charName);
        });

    });
}

window.onload = function () {
    document.querySelector('#getName').addEventListener('click', getName);
};

//global variables//
const generateBtn = document.querySelector("#generateBtn");
const personalityParagraph = document.querySelector("#randomTraits")

//this needs to be filled out//
const characterClassDescription = [];
var arrayOfPersonality; 

//fetch class api//
var getCharacterClass = function (getClass) {
    if (getClass === "class") {
        getClass = randO("#dropdown-content1").value
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
                });
            }
        });
};

//fetch race api//
var getCharacterRace = function (getRace) {
    if (getRace === "race") {
        getRace = randO("#dropdown-content2").value
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
                    //write race size to Dom//
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
    //write background title to dom//
    $("#backgroundInfo").text(getBackground.value);
    //write backg
    var backgroundInfoDiv = $('<p>');
    backgroundInfoDiv.addClass('backgroundContent')
    backgroundInfoDiv.text(getBackground.dataset.description);
    $("#backgroundInfo").append(backgroundInfoDiv);
};

var getFunFacts = function () {
    let funFacts = ["Cannot tolerate the presence of cheese.", "Is cursed with red/white color blindness.", "Has a crippling fear of sheep.", "Sneezes every time a nearby creature uses divine power.", "Is irrationally paranoid when everyone agrees with them, immediately backtracking to disagree with themselves.", "Cannot tie shoe laces. ONLY shoe laces, every other knotted thread is fine.", "Upon touching a weapon of any sort the weapon immediately bursts into flames and turns to ash.", "Passes out at the sight of orange juice.", "Fervently disbelieves dragons exist and will go so far as to prove the dragon is a very powerful series of damage and illusion spells. Cannot be convinced otherwise.", "Easily distracted by cup cakes.", "Has a small bladder.", "Illiterate but wise enough to figure out things by context and social cues.", "Believes they are safe NO MATTER WHAT as long as someone ties a rope to them.", "Physically unable to speak without rapping.", "Narrates own thoughts.", "Afraid of heights.", "Has the memory of a goldfish and must constantly take notes to keep track of past events.", "Fascination with shiny things.", "Enjoys making up unbelievably over-the-top tales of past conquests.", "Afraid of sleeping alone. Crawls into the bunks of comrades after they are asleep.", "Character has terrible sense of direction and gets lost frequently.", "When the character gets nervous, they tends to repeat the same phrases over and over again.", "Character likes to ease tension with bad puns and jokes."]

    var randomFact = funFacts[Math.floor(Math.random()*funFacts.length)];

    console.log( );

    $(".randomInfo").text(randomFact);
}

//helper function for randomizing dropdowns//
var randO = function (classing) {
    const select = document.querySelector(classing);
    const toget = Math.random() * (select.options.length - 1);
    return select.options[Math.floor(toget)];
};

function getPersonality () {
    arrayOfPersonality = ["Mysterious", "Charming", "Cheerful", "Stubborn", "Optimistic", "Adventurous", "Kindly", "Independent", "Eccentric", "Unkind", "Overbearing", "Sensitive", "Has major problems with authority", "Enjoys drinking to much mead in their free time", "Has a severe allergy to be stings",]
    var resultArr = []
    for(i=0; i<3; i++){
        var randomNumber = Math.floor(Math.random()* arrayOfPersonality.length)
        console.log(randomNumber)
        resultArr.push(arrayOfPersonality[randomNumber])
        arrayOfPersonality.splice(randomNumber, 1)
    }
    console.log(resultArr)
    document.getElementById("randomTraits").textContent = resultArr[0] + ", " + resultArr[1] + " and " + resultArr[2]
}

//get images//
function getRandomImage() {
    let images = new Array("assets/images/femaletiefling.jpg", "assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg", "assets/images/5.jpg", "assets/images/6.jpg", "assets/images/7.jpg", "assets/images/8.jpg", "assets/images/9.jpg", "assets/images/10.jpg", "assets/images/11.jpg", "assets/images/12.jpg", "assets/images/13.jpg", "assets/images/14.jpg", "assets/images/15.jpg", "assets/images/16.jpg", "assets/images/17.jpg", "assets/images/18.jpg", "assets/images/19.jpg", "assets/images/20.jpg", "assets/images/21.jpg", "assets/images/22.jpg", "assets/images/23.jpg");
    let random_index = Math.floor(Math.random() * images.length);
    document.getElementById('image').src = images[random_index];
}

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
    getFunFacts();
    getName(getRace);
    getPersonality();
    getRandomImage();
};

generateBtn.addEventListener('click', formSubmitHandler);
