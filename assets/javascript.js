function getName() {
	const getRace = document.querySelector("#name").getAttribute("value");
	let raceType = '';
	if (getRace == 'elf') {
		raceType = 'elf';
		
	} else if (getRace == 'dwarf') {
		raceType = 'dwarf';

	} else if (getRace == 'dragonborn') {
		raceType = 'dragon';
	
	} else {
		raceType = 'medieval'; 

	}

	fetch('https://api.fungenerators.com/name/generate.json?category=' + raceType + '&limit=50').then(function(response) {
		response.json().then(function(data) {
			var names = data.contents.names;
			///console.log(names);
			var charName = data.contents.names[Math.floor(Math.random() * names.length)];
			///console.log(charName);
			$('#name').text(charName);
		});
		
	});
}

window.onload = function() {
	document.querySelector('#getName').addEventListener('click', getName);
};
