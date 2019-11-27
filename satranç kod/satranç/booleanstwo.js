
var gecerkenAlmaBeyazList = [false, false, false, false, false, false, false, false];
var gecerkenAlmaSiyahList = [false, false, false, false, false, false, false, false];

var shahMatBooleans = {
	beyazShahCekti: false,
	
	beyazMatOldu: false,
	
	beyazPatOldu: false,
	
	
	
	
	siyahShahCekti: false,
	
	siyahMatOldu: false,
	
	siyahPatOldu: false,
	
	
}

var preControlArr;

var rok = {
	whiteA1KaleDidNotMove: true,
	whiteA8KaleDidNotMove: true,
	
	whiteShahDidNotMove: true,
	
	
	
	blackI1KaleDidNotMove: true,
	blackI8KaleDidNotMove: true,
	
	blackShahDidNotMove: true,
}


function controlDidItBeAttackShah ($attackerPiecePlace, $attackerPiece) {
	//straightObstacleFreeList = [];
	//obstacleFreeCounter = 0;
	pieceFreeCounter = 0;
	pieceFreeCounterFil = 0;
	switch ($attackerPiece) {
		case "b.kale":
		preControlArr = $attackerPiecePlace.split("");
		var i = 0;
		for (i = 0; i < 8; i++) {
		  preControlArr[0] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		preControlArr = $attackerPiecePlace.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preControlArr[1] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		console.log("$attackerPiecePlace:");
		console.log($attackerPiecePlace);
		checkStraightObstacleFree($attackerPiecePlace);
		console.log("hınk");
		var t = 0;
		for( t = 0; t < 16; t++) {
			console.log(t);
			//straightObstacleFreeList[t] 
			if (straightObstacleFreeList[t] && document.getElementById(destinations[t]).innerHTML == "s.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					console.log("hınk");
					document.getElementById("shah").innerHTML = "Beyaz kale shah cekti!";
					shahMatBooleans.beyazShahCekti = true;
					return 5;
			}
		}
		break;
		case "b.at":
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		destinations = [];
		destinations2 = [];
		if (thisLetter > 1) {
			if (thisNumber < 15) { 
				inBoard[0] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 2];
				preControlArr[1] = lettersAndNumbers[thisNumber + 1];
				destinations[0] = preControlArr.join('');
			} else {
				inBoard[0] = false;
			}
			if (thisNumber > 8) {
				inBoard[1] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 2];
				preControlArr[1] = lettersAndNumbers[thisNumber - 1];
				destinations[1] = preControlArr.join('');
			} else {
				inBoard[1] = false;
			}
		}
		if (thisLetter < 6) {
			if (thisNumber < 15) {
				inBoard[2] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 2];
				preControlArr[1] = lettersAndNumbers[thisNumber + 1];
				destinations[2] = preControlArr.join('');
			} else {
				inBoard[2] = false;
			}
			if (thisNumber > 8) {
				inBoard[3] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 2];
				preControlArr[1] = lettersAndNumbers[thisNumber - 1];
				destinations[3] = preControlArr.join('');
			} else {
				inBoard[3] = false;
			}
		}
		if (thisNumber > 9) {
			if (thisLetter < 7) {
				inBoard[4] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 1];
				preControlArr[1] = lettersAndNumbers[thisNumber - 2];
				destinations[4] = preControlArr.join('');
			} else {
				inBoard[4] = false;
			}	
			if (thisLetter > 0) {
				inBoard[5] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 1];
				preControlArr[1] = lettersAndNumbers[thisNumber - 2];
				destinations[5] = preControlArr.join('');
			} else {
				inBoard[5] = false;
			}
		}
		if (thisNumber < 14) {
			if (thisLetter < 7) {
				inBoard[6] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 1];
				preControlArr[1] = lettersAndNumbers[thisNumber + 2];
				destinations[6] = preControlArr.join('');
			} else {
				inBoard[6] = false;
			}
			if (thisLetter > 0) {
				inBoard[7] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 1];
				preControlArr[1] = lettersAndNumbers[thisNumber + 2];
				destinations[7] = preControlArr.join('');
			} else {
				inBoard[7] = false;
			}
		} else {
			inBoard[6] = false;
			inBoard[7] = false;
		}
		var t = 0;
		for( t = 0; t < 8; t++) {
			console.log(t);
			//straightObstacleFreeList[t] 
			if (destinations[t] && document.getElementById(destinations[t]).innerHTML == "s.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					console.log("hınk");
					document.getElementById("shah").innerHTML = "Beyaz at shah cekti!";
					shahMatBooleans.beyazShahCekti = true;
			}
		}
		break;
		case "b.fil":
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		filCounter = 0;
		// sıfır-yedi arası arka-sağ
		for (filCounter = 0; filCounter < 7; filCounter++) {
		  thisLetter--;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		// yedi-on üç arası arka sol
		for (filCounter = 7; filCounter < 13; filCounter++) {
		  thisLetter--;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		// on üç - yirmi arası ön sol
		for (filCounter = 13; filCounter < 20; filCounter++) {
		  thisLetter++;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		// yirmi - yirmi yedi arası ön sağ
		for (filCounter = 20; filCounter < 27; filCounter++) {
		  thisLetter++;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
	    checkDiagonalObstacleFree($attackerPiecePlace);
		console.log("destinations:");
		console.log(destinations);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		var t = 0;
		for(t = 0; t < 27; t++) {
			console.log(t);
			if (diagonalObstacleFreeList[t] && destinations[t].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[t].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[t].split("")[1]) > 7 && document.getElementById(destinations[t]).innerHTML == "s.shah")) {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					console.log("hınk");
					document.getElementById("shah").innerHTML = "Beyaz fil shah cekti!";
					shahMatBooleans.beyazShahCekti = true;
			}
		}
		break;
		case "b.vezir":
		preControlArr = $attackerPiecePlace.split("");
		i = 0;
		for (i = 0; i < 8; i++) {
		  preControlArr[0] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		preControlArr = $attackerPiecePlace.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preControlArr[1] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		checkStraightObstacleFree($attackerPiecePlace);
		/*console.log("destinations:");
		console.log(destinations);
		console.log("straightObstacleFreeList:");
		console.log(straightObstacleFreeList);
		*/
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		filCounter = 0;
		for (filCounter = 0; filCounter < 7; filCounter++) {
		  thisLetter--;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		for (filCounter = 7; filCounter < 13; filCounter++) {
		  thisLetter--;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		for (filCounter = 13; filCounter < 20; filCounter++) {
		  thisLetter++;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		for (filCounter = 20; filCounter < 27; filCounter++) {
		  thisLetter++;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
	    checkDiagonalObstacleFree($attackerPiecePlace);
		var t = 0;
		for( t = 0; t < 16; t++) {
			//console.log(t);
			//straightObstacleFreeList[t] 
			if (straightObstacleFreeList[t] && document.getElementById(destinations[t]).innerHTML == "s.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					//console.log("hınk");
					document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
					shahMatBooleans.beyazShahCekti = true;
			}
		}
		t = 0;
		for(t = 0; t < 27; t++) {
			//console.log(t);
			if (diagonalObstacleFreeList[t] && destinationsVezir[t].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir[t].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir[t].split("")[1]) > 7 && document.getElementById(destinationsVezir[t]).innerHTML == "s.shah")) {
					shahCekmeDurumuBilgileri.shahKonumu = destinationsVezir[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					//console.log("hınk");
					document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
					shahMatBooleans.beyazShahCekti = true;
			}
		}
		break;
		case "b.piyon":
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = 1 + lettersAndNumbers.indexOf(preControlArr[0]);
	    preControlArr[0] = lettersAndNumbers[thisLetter];
	    destinations[0] = preControlArr.join('');
		thisLetter++;
		preControlArr = $attackerPiecePlace.split("");
		preControlArr[0] = lettersAndNumbers[thisLetter];
	    destinations[1] = preControlArr.join('');
		thisLetter--;
		thisNumber = 1 + lettersAndNumbers.indexOf(preControlArr[1]);
		preControlArr[0] = lettersAndNumbers[thisLetter];
		preControlArr[1] = lettersAndNumbers[thisNumber];
		destinations[2] = preControlArr.join('');
		thisNumber = thisNumber - 2;
		preControlArr[0] = lettersAndNumbers[thisLetter];
		preControlArr[1] = lettersAndNumbers[thisNumber];
		destinations[3] = preControlArr.join('');
		var t = 2;
		for( t = 2; t < 4; t++) {
			//console.log(t);
			//straightObstacleFreeList[t] 
			if (destinations[t].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[t].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[t].split("")[1]) > 7 )) {
				if (document.getElementById(destinations[t]).innerHTML == "s.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					//console.log("hınk");
					document.getElementById("shah").innerHTML = "Beyaz piyon shah cekti!";
					shahMatBooleans.beyazShahCekti = true;
				}
			}
		}
		break;
		case "s.kale":
		preControlArr = $attackerPiecePlace.split("");
		var i = 0;
		for (i = 0; i < 8; i++) {
		  preControlArr[0] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		preControlArr = $attackerPiecePlace.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preControlArr[1] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		console.log("$attackerPiecePlace:");
		console.log($attackerPiecePlace);
		checkStraightObstacleFree($attackerPiecePlace);
		console.log("hınk");
		var t = 0;
		for( t = 0; t < 16; t++) {
			console.log(t);
			//straightObstacleFreeList[t] 
			if (straightObstacleFreeList[t] && document.getElementById(destinations[t]).innerHTML == "b.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					console.log("hınk");
					document.getElementById("shah").innerHTML = "Siyah shah cekti!";
					shahMatBooleans.siyahShahCekti = true;
			}
		}
		break;
		case "s.at":
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		destinations = [];
		if (thisLetter > 1) {
			if (thisNumber < 15) { 
				inBoard[0] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 2];
				preControlArr[1] = lettersAndNumbers[thisNumber + 1];
				destinations[0] = preControlArr.join('');
			} else {
				inBoard[0] = false;
			}
			if (thisNumber > 8) {
				inBoard[1] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 2];
				preControlArr[1] = lettersAndNumbers[thisNumber - 1];
				destinations[1] = preControlArr.join('');
			} else {
				inBoard[1] = false;
			}
		}
		if (thisLetter < 6) {
			if (thisNumber < 15) {
				inBoard[2] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 2];
				preControlArr[1] = lettersAndNumbers[thisNumber + 1];
				destinations[2] = preControlArr.join('');
			} else {
				inBoard[2] = false;
			}
			if (thisNumber > 8) {
				inBoard[3] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 2];
				preControlArr[1] = lettersAndNumbers[thisNumber - 1];
				destinations[3] = preControlArr.join('');
			} else {
				inBoard[3] = false;
			}
		}
		if (thisNumber > 9) {
			if (thisLetter < 7) {
				inBoard[4] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 1];
				preControlArr[1] = lettersAndNumbers[thisNumber - 2];
				destinations[4] = preControlArr.join('');
			} else {
				inBoard[4] = false;
			}	
			if (thisLetter > 0) {
				inBoard[5] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 1];
				preControlArr[1] = lettersAndNumbers[thisNumber - 2];
				destinations[5] = preControlArr.join('');
			} else {
				inBoard[5] = false;
			}
		}
		if (thisNumber < 14) {
			if (thisLetter < 7) {
				inBoard[6] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter + 1];
				preControlArr[1] = lettersAndNumbers[thisNumber + 2];
				destinations[6] = preControlArr.join('');
			} else {
				inBoard[6] = false;
			}
			if (thisLetter > 0) {
				inBoard[7] = true;
				preControlArr[0] = lettersAndNumbers[thisLetter - 1];
				preControlArr[1] = lettersAndNumbers[thisNumber + 2];
				destinations[7] = preControlArr.join('');
			} else {
				inBoard[7] = false;
			}
		} else {
			inBoard[6] = false;
			inBoard[7] = false;
		}
		var t = 0;
		for( t = 0; t < 8; t++) {
			console.log(t);
			//straightObstacleFreeList[t] 
			if (destinations[t] && document.getElementById(destinations[t]).innerHTML == "b.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					console.log("hınk");
					document.getElementById("shah").innerHTML = "Siyah at shah cekti!";
					shahMatBooleans.siyahShahCekti = true;
			}
		}
		break;
		case "s.fil":
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		filCounter = 0;
		// sıfır-yedi arası arka-sağ
		for (filCounter = 0; filCounter < 7; filCounter++) {
		  thisLetter--;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		// yedi-on üç arası arka sol
		for (filCounter = 7; filCounter < 13; filCounter++) {
		  thisLetter--;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		// on üç - yirmi arası ön sol
		for (filCounter = 13; filCounter < 20; filCounter++) {
		  thisLetter++;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		// yirmi - yirmi yedi arası ön sağ
		for (filCounter = 20; filCounter < 27; filCounter++) {
		  thisLetter++;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinations[filCounter]);
		}
	    checkDiagonalObstacleFree($attackerPiecePlace);
		console.log("destinations:");
		console.log(destinations);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		var t = 0;
		for(t = 0; t < 27; t++) {
			console.log(t);
			if (diagonalObstacleFreeList[t] && destinations[t].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[t].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[t].split("")[1]) > 7 && document.getElementById(destinations[t]).innerHTML == "b.shah")) {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					console.log("hınk");
					document.getElementById("shah").innerHTML = "Siyah fil shah cekti!";
					shahMatBooleans.siyahShahCekti = true;
			}
		}
		break;
		case "s.vezir":
		preControlArr = $attackerPiecePlace.split("");
		i = 0;
		for (i = 0; i < 8; i++) {
		  preControlArr[0] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		preControlArr = $attackerPiecePlace.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preControlArr[1] = lettersAndNumbers[i];
		  destinations[i] = preControlArr.join('');
		  checkPieceFree(destinations[i]);
		}
		checkStraightObstacleFree($attackerPiecePlace);
		console.log("destinations:");
		console.log(destinations);
		console.log("straightObstacleFreeList:");
		console.log(straightObstacleFreeList);
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		filCounter = 0;
		for (filCounter = 0; filCounter < 7; filCounter++) {
		  thisLetter--;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		for (filCounter = 7; filCounter < 13; filCounter++) {
		  thisLetter--;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		for (filCounter = 13; filCounter < 20; filCounter++) {
		  thisLetter++;
		  thisNumber--;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preControlArr[1]);
		for (filCounter = 20; filCounter < 27; filCounter++) {
		  thisLetter++;
		  thisNumber++;
		  preControlArr[0] = lettersAndNumbers[thisLetter];
		  preControlArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preControlArr.join('');
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
	    checkDiagonalObstacleFree($attackerPiecePlace);
		var t = 0;
		for( t = 0; t < 16; t++) {
			//console.log(t);
			//straightObstacleFreeList[t] 
			if (straightObstacleFreeList[t] && document.getElementById(destinations[t]).innerHTML == "b.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					//console.log("hınk");
					document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
					shahMatBooleans.siyahShahCekti = true;
			}
		}
		t = 0;
		for(t = 0; t < 27; t++) {
			//console.log(t);
			if (diagonalObstacleFreeList[t] && destinationsVezir[t].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir[t].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir[t].split("")[1]) > 7 && document.getElementById(destinationsVezir[t]).innerHTML == "b.shah")) {
					//console.log("Onemli");
					//console.log("destinations");
					//console.log(destinationsVezir[t]);
					shahCekmeDurumuBilgileri.shahKonumu = destinationsVezir[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					//console.log("hınk");
					document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
					shahMatBooleans.siyahShahCekti = true;
			}
		}
		break;
		case "s.piyon":
		preControlArr = $attackerPiecePlace.split("");
	    thisLetter = lettersAndNumbers.indexOf(preControlArr[0]) - 1;
	    preControlArr[0] = lettersAndNumbers[thisLetter];
	    destinations[0] = preControlArr.join('');
		thisLetter--;
		preControlArr = $attackerPiecePlace.split("");
		preControlArr[0] = lettersAndNumbers[thisLetter];
	    destinations[1] = preControlArr.join('');
		thisLetter++;
		thisNumber = 1 + lettersAndNumbers.indexOf(preControlArr[1]);
		preControlArr[0] = lettersAndNumbers[thisLetter];
		preControlArr[1] = lettersAndNumbers[thisNumber];
		destinations[2] = preControlArr.join('');
		thisNumber = thisNumber - 2;
		preControlArr[0] = lettersAndNumbers[thisLetter];
		preControlArr[1] = lettersAndNumbers[thisNumber];
		destinations[3] = preControlArr.join('');
		var t = 2;
		for( t = 2; t < 4; t++) {
			//console.log(t);
			//straightObstacleFreeList[t] 
			if (destinations[t].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[t].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[t].split("")[1]) > 7 )) {
				if (document.getElementById(destinations[t]).innerHTML == "b.shah") {
					shahCekmeDurumuBilgileri.shahKonumu = destinations[t];
					shahCekmeDurumuBilgileri.pieceName = $attackerPiece;
					shahCekmeDurumuBilgileri.piecePlace = $attackerPiecePlace;
					//console.log("hınk");
					document.getElementById("shah").innerHTML = "Siyah piyon shah cekti!";
					shahMatBooleans.siyahShahCekti = true;
				}
			}
		}
		break;
	}

}