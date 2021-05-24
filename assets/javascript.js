function getName() {
	const getRace = document.querySelector("#name").getAttribute("value");
	let raceType = '';
	if (raceType == 'elf') {
		raceType = 'elf';
		//fetch("https://api.fungenerators.com/name/generate.json?category=elf&limit=10")
		//.then(function (response) {
		//  return response.json();
	} else if (getRace == 'dwarf') {
		raceType = 'dwarf';
		//fetch("https://api.fungenerators.com/name/generate.json?category=dwarf&limit=10")
		//.then(function (response) {
		//  return response.json();
	} else {
		raceType = 'medieval';
	}

	// fetch("https://api.fungenerators.com/name/generate.json?category=medieval&limit=10")
	// .then(function (response) {
	//     return response.json();

	// })
	// .then(function (data){
	//     console.log(data)
	//     var names = data.contents.names;
	//     console.log(names)
	//     var charName = data.contents.names[0];
	//     console.log(charName);
	//     $("#name").text(charName)
	//     // charName.innerHTML = document.getElementById('name');
	// })

	fetch('https://api.fungenerators.com/name/generate.json?category=' + raceType + '&limit=10').then(function(
		response
	) {
		response.json().then(function(data) {
			var names = data.contents.names;
			console.log(names);
			var charName = data.contents.names[0];
			console.log(charName);
			$('#name').text(charName);
		});
		// charName.innerHTML = document.getElementById('name');})
	});
}

window.onload = function() {
	document.querySelector('#getName').addEventListener('click', getName);
};
