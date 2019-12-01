
var shahAttackerArray = [];
var shahArray = [];


var shahDefenderPlacesList = [];
var shahDefenderPlacesCounter = 0;

var itWillDefendList = [];
var itWillDefendCounter = 0;

var defenderPlaceMaker;

var way;
var way2;

var shahCekmeDurumuBilgileri = {
	pieceName: "Daha sah cekilmedi.",
	piecePlace: "Daha sah cekilmedi.",
	shahKonumu: "Daha sah cekilmedi."
}

function controlWillItDefendShah($potentialDefender) {
	var c = shahDefenderPlacesList.length
	console.log(c);
	var i = 0;
	console.log(i);
	for(i = 0; i <= c; i++) {
		console.log("dongu ici");
		if ($potentialDefender == shahDefenderPlacesList[i]) {
			itWillDefendList[itWillDefendCounter] = true;
			continue;
		} else if (!itWillDefendList[itWillDefendCounter]) {
			itWillDefendList[itWillDefendCounter] = false;
		}
	}
	itWillDefendCounter++;
}

function shahDefenderPlaces() {
	shahDefenderPlacesCounter = 0;
	switch (shahCekmeDurumuBilgileri.pieceName) {
		case "s.kale":
		case "b.kale":
		shahArray = shahCekmeDurumuBilgileri.shahKonumu.split("");
		shahAttackerArray = shahCekmeDurumuBilgileri.piecePlace.split("");
		defenderPlaceMaker = shahCekmeDurumuBilgileri.shahKonumu.split("");
		if (shahArray[0] == shahAttackerArray[0]) {
			if(lettersAndNumbers.indexOf(shahArray[1]) < lettersAndNumbers.indexOf(shahAttackerArray[1])) {
				way = lettersAndNumbers.indexOf(shahAttackerArray[1]) - lettersAndNumbers.indexOf(shahArray[1]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[1]);
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[1] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			} else {
				way = lettersAndNumbers.indexOf(shahArray[1]) - lettersAndNumbers.indexOf(shahAttackerArray[1]);
				var i = lettersAndNumbers.indexOf(shahArray[1]) - 1; 
				var t = i - way;
				for (i; i > t; i--) {
					defenderPlaceMaker[1] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			}	
		} else {
			if(lettersAndNumbers.indexOf(shahArray[0]) < lettersAndNumbers.indexOf(shahAttackerArray[0])) {
				way = lettersAndNumbers.indexOf(shahAttackerArray[0]) - lettersAndNumbers.indexOf(shahArray[0]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[0]);
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			} else {
				way = lettersAndNumbers.indexOf(shahArray[0]) - lettersAndNumbers.indexOf(shahAttackerArray[0]);
				var i = lettersAndNumbers.indexOf(shahArray[0]) - 1; 
				var t = i - way;
				for (i; i > t; i--) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			}	
		}
		break;
		case "s.at":
		case "b.at":
		shahDefenderPlacesList[shahDefenderPlacesCounter] = shahCekmeDurumuBilgileri.piecePlace;
		break;
		case "s.fil":
		case "b.fil":
		shahArray = shahCekmeDurumuBilgileri.shahKonumu.split("");
		shahAttackerArray = shahCekmeDurumuBilgileri.piecePlace.split("");
		defenderPlaceMaker = shahCekmeDurumuBilgileri.shahKonumu.split("");
		//şah yukarıda
		if (lettersAndNumbers.indexOf(shahArray[0]) < lettersAndNumbers.indexOf(shahAttackerArray[0])) {
			//şah solda
			if (lettersAndNumbers.indexOf(shahArray[1]) < lettersAndNumbers.indexOf(shahAttackerArray[1])) {
				way = lettersAndNumbers.indexOf(shahAttackerArray[0]) - lettersAndNumbers.indexOf(shahArray[0]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[0]);
				var i2 = 1 + lettersAndNumbers.indexOf(shahArray[1]);
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2++;
				}
			//şah sağda
			} else {
				way = lettersAndNumbers.indexOf(shahAttackerArray[0]) - lettersAndNumbers.indexOf(shahArray[0]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[0]);
				var i2 = lettersAndNumbers.indexOf(shahArray[1]) - 1;
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2--;
				}
			}
		//şah aşağıda
		} else if (lettersAndNumbers.indexOf(shahArray[0]) > lettersAndNumbers.indexOf(shahAttackerArray[0])){
			//şah solda
			if (lettersAndNumbers.indexOf(shahArray[1]) < lettersAndNumbers.indexOf(shahAttackerArray[1])) {
				way = lettersAndNumbers.indexOf(shahArray[0]) - lettersAndNumbers.indexOf(shahAttackerArray[0]);
				var i = lettersAndNumbers.indexOf(shahArray[0]) - 1;
				var i2 = 1 + lettersAndNumbers.indexOf(shahArray[1]);
				var t = lettersAndNumbers.indexOf(shahArray[0]) - way;
				for (i; i >= t; i--) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2++;
				}
			//şah sağda
			} else if (lettersAndNumbers.indexOf(shahArray[1]) > lettersAndNumbers.indexOf(shahAttackerArray[1])){
				way = lettersAndNumbers.indexOf(shahArray[0]) - lettersAndNumbers.indexOf(shahAttackerArray[0]);
				var i = lettersAndNumbers.indexOf(shahArray[0]) - 1;
				var i2 = lettersAndNumbers.indexOf(shahArray[1]) - 1;
				var t = lettersAndNumbers.indexOf(shahArray[0]) - way;
				console.log("OLUYORRRRRRRR22222222");
				console.log(i);
				console.log(t);
				for (i; i >= t; i--) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2--;
					console.log("OLUYORRRRRRRR");
				}
			}
		}
		break;
		case "s.vezir":
		case "b.vezir":
		shahArray = shahCekmeDurumuBilgileri.shahKonumu.split("");
		shahAttackerArray = shahCekmeDurumuBilgileri.piecePlace.split("");
		defenderPlaceMaker = shahCekmeDurumuBilgileri.shahKonumu.split("");
		if (shahArray[0] == shahAttackerArray[0]) {
			if(lettersAndNumbers.indexOf(shahArray[1]) < lettersAndNumbers.indexOf(shahAttackerArray[1])) {
				way = lettersAndNumbers.indexOf(shahAttackerArray[1]) - lettersAndNumbers.indexOf(shahArray[1]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[1]);
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[1] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			} else {
				way = lettersAndNumbers.indexOf(shahArray[1]) - lettersAndNumbers.indexOf(shahAttackerArray[1]);
				var i = lettersAndNumbers.indexOf(shahArray[1]) - 1; 
				var t = i - way;
				for (i; i > t; i--) {
					defenderPlaceMaker[1] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			}	
		} else if (shahArray[1] == shahAttackerArray[1]){
			if(lettersAndNumbers.indexOf(shahArray[0]) < lettersAndNumbers.indexOf(shahAttackerArray[0])) {
				way = lettersAndNumbers.indexOf(shahAttackerArray[0]) - lettersAndNumbers.indexOf(shahArray[0]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[0]);
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			} else {
				way = lettersAndNumbers.indexOf(shahArray[0]) - lettersAndNumbers.indexOf(shahAttackerArray[0]);
				var i = lettersAndNumbers.indexOf(shahArray[0]) - 1; 
				var t = i - way;
				for (i; i > t; i--) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
				}
			}	
		}
		//şah yukarıda
		if (lettersAndNumbers.indexOf(shahArray[0]) < lettersAndNumbers.indexOf(shahAttackerArray[0])) {
			//şah solda
			if (lettersAndNumbers.indexOf(shahArray[1]) < lettersAndNumbers.indexOf(shahAttackerArray[1])) {
				way = lettersAndNumbers.indexOf(shahAttackerArray[0]) - lettersAndNumbers.indexOf(shahArray[0]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[0]);
				var i2 = 1 + lettersAndNumbers.indexOf(shahArray[1]);
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2++;
				}
			//şah sağda
			} else {
				way = lettersAndNumbers.indexOf(shahAttackerArray[0]) - lettersAndNumbers.indexOf(shahArray[0]);
				var i = 1 + lettersAndNumbers.indexOf(shahArray[0]);
				var i2 = lettersAndNumbers.indexOf(shahArray[1]) - 1;
				var t = i + way;
				for (i; i < t; i++) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2--;
				}
			}
		//şah aşağıda
		} else if (lettersAndNumbers.indexOf(shahArray[0]) > lettersAndNumbers.indexOf(shahAttackerArray[0])){
			//şah solda
			if (lettersAndNumbers.indexOf(shahArray[1]) < lettersAndNumbers.indexOf(shahAttackerArray[1])) {
				way = lettersAndNumbers.indexOf(shahArray[0]) - lettersAndNumbers.indexOf(shahAttackerArray[0]);
				var i = lettersAndNumbers.indexOf(shahArray[0]) - 1;
				var i2 = 1 + lettersAndNumbers.indexOf(shahArray[1]);
				var t = lettersAndNumbers.indexOf(shahArray[0]) - way;
				for (i; i >= t; i--) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2++;
				}
			//şah sağda
			} else if (lettersAndNumbers.indexOf(shahArray[1]) > lettersAndNumbers.indexOf(shahAttackerArray[1])){
				way = lettersAndNumbers.indexOf(shahArray[0]) - lettersAndNumbers.indexOf(shahAttackerArray[0]);
				var i = lettersAndNumbers.indexOf(shahArray[0]) - 1;
				var i2 = lettersAndNumbers.indexOf(shahArray[1]) - 1;
				var t = lettersAndNumbers.indexOf(shahArray[0]) - way;
				console.log("OLUYORRRRRRRR22222222");
				console.log(i);
				console.log(t);
				for (i; i >= t; i--) {
					defenderPlaceMaker[0] = lettersAndNumbers[i];
					defenderPlaceMaker[1] = lettersAndNumbers[i2];
					shahDefenderPlacesList[shahDefenderPlacesCounter] = defenderPlaceMaker.join("");
					shahDefenderPlacesCounter++;
					i2--;
					console.log("OLUYORRRRRRRR");
				}
			}
		}
		console.log("Burasi vezirin yeri.");
		console.log(shahDefenderPlacesList);
		break;
		case "s.piyon":
		case "b.piyon":
		shahDefenderPlacesList[shahDefenderPlacesCounter] = shahCekmeDurumuBilgileri.piecePlace;
		break;
		
	}
}