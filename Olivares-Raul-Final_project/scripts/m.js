const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ee6a816d71msh23f26f3b8a913d7p1320bfjsn2c5f1e6621e7',
		'X-RapidAPI-Host': 'electric-vehicle-charging-station-and-point.p.rapidapi.com'
	}
};

fetch('https://electric-vehicle-charging-station-and-point.p.rapidapi.com/us/elec.json?orderBy=%22city%22&equalTo=%22Miami%22&print=%22pretty%22&limitToFirst=3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
// This source code was developed by raul olivares with some use of stackoverflow code ALSO TRYING TO GET THE CODE TO SAVE THE INPUT TO NEW FILE TO USE LATER BUT NOT WORKING 