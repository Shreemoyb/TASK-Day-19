const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '28d45ac599msh2b9789818c0b2cfp19f220jsn8b9dacb0721a',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch('https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard?Eid=702093&Category=cricket', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));