function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    dataMale = fazGet("https://rickandmortyapi.com/api/character/437");
    male = JSON.parse(dataMale);
	var imageMale = male.image;
	var nameMale = male.name;
	var statusMale = male.status;
	var originMale = male.origin.name;
	
	var episode = male.episode;
	episodeMale = fazGet(episode);
	episodeGetm = JSON.parse(episodeMale);
	var episodeNamem = episodeGetm.name;
	
	dataFemale = fazGet("https://rickandmortyapi.com/api/character/807");
    female = JSON.parse(dataFemale);
	var imageFemale = female.image;
	var nameFemale = female.name;
	var statusFemale = female.status;
	var originFemale = female.origin.name;
	
	var episode = female.episode;
	episodeFemale = fazGet(episode);
	episodeGetf = JSON.parse(episodeFemale);
	var episodeNamef = episodeGetf.name;
	
	document.write ("<img src='" + imageMale + "'>");
	document.write ("<h1>Nome:  " + nameMale + "</h1>");
	document.write ("<h1>Status:  " + statusMale + "</h1>");
	document.write ("<h1>Planeta de origem:  " + originMale + "</h1>");
	document.write ("<h1>Episodio:  " + episodeNamem + "</h1>");
	document.write ("<br>" + "</br>");
	document.write ("<img src='" + imageFemale + "'>");
	document.write ("<h1>Nome:  " + nameFemale + "</h1>");
	document.write ("<h1>Status:  " + statusFemale + "</h1>");
	document.write ("<h1>Planeta de origem:  " + originFemale + "</h1>");
	document.write ("<h1>Episodio:  " + episodeNamef + "</h1>");
}

main();