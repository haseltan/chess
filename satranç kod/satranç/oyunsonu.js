
var kareler = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", 
"b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
"c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
"d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
"e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
"f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
"g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
"i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8",]
var id;
var beyazShahMatOldu;

function beyazShahMatOlduMu() {
	pieceFreeCheckList = [];
	pieceFreeCounter = 0;
	pieceFreeCounterFil = 0;
	blackPieceCheckList = [];
	blackPieceFreeCounter = 0;
	whitePieceCheckList = [];
	whitePieceFreeCounter = 0;
	blackPieceFreeCounterFil = 0;
	whitePieceFreeCounterFil = 0;
	whiteKaleCheckList = [];
	whiteKaleCheckCounter = 0;
	blackKaleCheckList = [];
	blackKaleCheckCounter = 0;
	obstacleFreeCounter = 0;
	whiteAtCheckList = [];
	whiteAtCheckCounter = 0;
	blackAtCheckList = [];
	blackAtCheckCounter = 0;
	straightObstacleFreeList = [];
	pieceFreeCheckList = [];
	pieceFreeCounter = 0;
	pieceFreeCounterFil = 0;
	
	
	beyazShahMatOldu = "evet";
	
	
	

	var t = kareler.length;
	i4 = 0;
	
	
	
	
	
	for(i4; i4 < t; i4++) {
		console.log("sirasiyla tüm kareler.")
		console.log(kareler[i4]);
		pieceFreeCheckList = [];
	pieceFreeCounter = 0;
	pieceFreeCounterFil = 0;
	blackPieceCheckList = [];
	blackPieceFreeCounter = 0;
	whitePieceCheckList = [];
	whitePieceFreeCounter = 0;
	blackPieceFreeCounterFil = 0;
	whitePieceFreeCounterFil = 0;
	whiteKaleCheckList = [];
	whiteKaleCheckCounter = 0;
	blackKaleCheckList = [];
	blackKaleCheckCounter = 0;
	obstacleFreeCounter = 0;
	whiteAtCheckList = [];
	whiteAtCheckCounter = 0;
	blackAtCheckList = [];
	blackAtCheckCounter = 0;
	straightObstacleFreeList = [];
	pieceFreeCheckList = [];
	pieceFreeCounter = 0;
	pieceFreeCounterFil = 0;
	itWillDefendList = [];
	itWillDefendCounter = 0;

		id = kareler[i4];
		switch (document.getElementById(kareler[i4]).innerHTML) {
			case "b.kale":
	  if(BwhiteTurn) {
	  console.log("hop kale tiklandi");
	    clickedThing = "b.kale";
	    idHolder = kareler[i4];
	    oldPlace = kareler[i4];
		console.log(id);
	    preDestinationArr = idHolder.split("");
		var i = 0;
		for (i = 0; i < 8; i++) {
		  preDestinationArr[0] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkWhiteFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		preDestinationArr = idHolder.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preDestinationArr[1] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkWhiteFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		checkStraightObstacleFree(kareler[i4]);
		console.log("destinations:");
		console.log(destinations);
		console.log("destinations2:");
		console.log(destinations2);
		console.log("whiteKaleCheckList:");
		console.log(whiteKaleCheckList);
		console.log("straightObstacleFreeList:");
		console.log(straightObstacleFreeList);
		if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 16; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			/*
			console.log("Buraya bak");
			console.log("whiteKaleCheckList:");
			console.log(whiteKaleCheckList);
			console.log("itWillDefendList");
			console.log(itWillDefendList);
			console.log("straightObstacleFreeList");
			console.log(straightObstacleFreeList);
			return 5;
			*/
		if (whiteKaleCheckList[0] && itWillDefendList[0]) {
				if (straightObstacleFreeList[0]) {
					beyazShahMatOldu = false;
					console.log("Burası mati engelledi ");
					return 5;
				}
			}
			if (whiteKaleCheckList[1] && itWillDefendList[1]) {
				if (straightObstacleFreeList[1]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			
			if (whiteKaleCheckList[2] && itWillDefendList[2]) {
				if (straightObstacleFreeList[2]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[3] && itWillDefendList[3]) {
				if (straightObstacleFreeList[3]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[4] && itWillDefendList[4]) {
				if (straightObstacleFreeList[4]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			} 
			if (whiteKaleCheckList[5] && itWillDefendList[5]) {
				if (straightObstacleFreeList[5]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[6] && itWillDefendList[6]) {
				if (straightObstacleFreeList[6]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[7] && itWillDefendList[7]) {
				if (straightObstacleFreeList[7]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			} 
			if (whiteKaleCheckList[8] && itWillDefendList[8]) {
				if (straightObstacleFreeList[8]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[9] && itWillDefendList[9]) {
				if (straightObstacleFreeList[9]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			
			if (whiteKaleCheckList[10] && itWillDefendList[10]) {
				if (straightObstacleFreeList[10]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[11] && itWillDefendList[11]) {
				if (straightObstacleFreeList[11]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[12] && itWillDefendList[12]) {
				if (straightObstacleFreeList[12]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			} 
			if (whiteKaleCheckList[13] && itWillDefendList[2]) {
				if (straightObstacleFreeList[13]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[14] && itWillDefendList[14]) {
				if (straightObstacleFreeList[14]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[15] && itWillDefendList[15]) {
				if (straightObstacleFreeList[15]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
		}
	  }
	  break;
	  case "b.at":
	  if(BwhiteTurn) {
		console.log("hop at tiklandi.");
	    clickedThing = "b.at";
		console.log(id);
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		destinations = [];
		destinations2 = [];
		if (thisLetter > 1) {
			if (thisNumber < 15) { 
				inBoard[0] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter - 2];
				preDestinationArr[1] = lettersAndNumbers[thisNumber + 1];
				destinations[0] = preDestinationArr.join('');
			} else {
				inBoard[0] = false;
			}
			if (thisNumber > 8) {
				inBoard[1] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter - 2];
				preDestinationArr[1] = lettersAndNumbers[thisNumber - 1];
				destinations[1] = preDestinationArr.join('');
			} else {
				inBoard[1] = false;
			}
		}
		if (thisLetter < 6) {
			if (thisNumber < 15) {
				inBoard[2] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter + 2];
				preDestinationArr[1] = lettersAndNumbers[thisNumber + 1];
				destinations[2] = preDestinationArr.join('');
			} else {
				inBoard[2] = false;
			}
			if (thisNumber > 8) {
				inBoard[3] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter + 2];
				preDestinationArr[1] = lettersAndNumbers[thisNumber - 1];
				destinations[3] = preDestinationArr.join('');
			} else {
				inBoard[3] = false;
			}
		}
		if (thisNumber > 9) {
			if (thisLetter < 7) {
				inBoard[4] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter + 1];
				preDestinationArr[1] = lettersAndNumbers[thisNumber - 2];
				destinations[4] = preDestinationArr.join('');
			} else {
				inBoard[4] = false;
			}	
			if (thisLetter > 0) {
				inBoard[5] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter - 1];
				preDestinationArr[1] = lettersAndNumbers[thisNumber - 2];
				destinations[5] = preDestinationArr.join('');
			} else {
				inBoard[5] = false;
			}
		}
		if (thisNumber < 14) {
			if (thisLetter < 7) {
				inBoard[6] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter + 1];
				preDestinationArr[1] = lettersAndNumbers[thisNumber + 2];
				destinations[6] = preDestinationArr.join('');
			} else {
				inBoard[6] = false;
			}
			if (thisLetter > 0) {
				inBoard[7] = true;
				preDestinationArr[0] = lettersAndNumbers[thisLetter - 1];
				preDestinationArr[1] = lettersAndNumbers[thisNumber + 2];
				destinations[7] = preDestinationArr.join('');
			} else {
				inBoard[7] = false;
			}
		} else {
			inBoard[6] = false;
			inBoard[7] = false;
		}
		var bAtCounter = 0;
		for(bAtCounter = 0; bAtCounter < 8; bAtCounter++) {
			destinations2[bAtCounter] = destinations[bAtCounter];
			destinations[bAtCounter] = destinations2[bAtCounter];
			checkWhiteFreeAt(destinations[bAtCounter]);
		}
		console.log("destinations2:");
		console.log(destinations2);
		console.log("destinations:");
		console.log(destinations);
		console.log("whiteAtCheckList:");
		console.log(whiteAtCheckList);
		if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 8; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if (whiteAtCheckList[0] && itWillDefendList[0]) {
				if (destinations2[0]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteAtCheckList[1] && itWillDefendList[1]) {
				if (destinations2[1]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteAtCheckList[2] && itWillDefendList[2]) {
				if (destinations2[2]) {			
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteAtCheckList[3] && itWillDefendList[3]) {
				if (destinations2[3]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteAtCheckList[4] && itWillDefendList[4]) {
				if (destinations2[4]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteAtCheckList[5] && itWillDefendList[5]) {
				if (destinations2[5]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteAtCheckList[6] && itWillDefendList[6]) {
				if (destinations2[6]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteAtCheckList[7] && itWillDefendList[7]) {
				if (destinations2[7]) {
					console.log("Burası mati engelledi ");
					beyazShahMatOldu = false;
					return 5;
				}
			}
		}
	  }
	  break;
	case "b.fil":
	if(BwhiteTurn) {
		console.log("hop fil tiklandi");
	    clickedThing = "b.fil";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		filCounter = 0;
		// sıfır-yedi arası arka-sağ
		for (filCounter = 0; filCounter < 7; filCounter++) {
		  thisLetter--;
		  thisNumber++;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preDestinationArr.join('');
		  destinations2[filCounter] = destinations[filCounter];
		  checkWhiteFreeFil(destinations[filCounter]);
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		// yedi-on üç arası arka sol
		for (filCounter = 7; filCounter < 13; filCounter++) {
		  thisLetter--;
		  thisNumber--;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preDestinationArr.join('');
		  destinations2[filCounter] = destinations[filCounter];
		  checkWhiteFreeFil(destinations[filCounter]);
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		// on üç - yirmi arası ön sol
		for (filCounter = 13; filCounter < 20; filCounter++) {
		  thisLetter++;
		  thisNumber--;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preDestinationArr.join('');
		  destinations2[filCounter] = destinations[filCounter];
		  checkWhiteFreeFil(destinations[filCounter]);
		  checkPieceFreeFil(destinations[filCounter]);
		}
		preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		// yirmi - yirmi yedi arası ön sağ
		for (filCounter = 20; filCounter < 27; filCounter++) {
		  thisLetter++;
		  thisNumber++;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinations[filCounter] = preDestinationArr.join('');
		  destinations2[filCounter] = destinations[filCounter];
		  checkWhiteFreeFil(destinations[filCounter]);
		  checkPieceFreeFil(destinations[filCounter]);
		}
	    checkDiagonalObstacleFree(id);
		console.log("destinations:");
		console.log(destinations);
		console.log("destinations2");
		console.log(destinations2);
		console.log("whiteAtCheckList:");
		console.log(whiteAtCheckList);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		 if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 27; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if (destinations2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[0].split("")[1]) > 7)) {
				if (whiteAtCheckList[0] && itWillDefendList[0]) {
					if (diagonalObstacleFreeList[0]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinations2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1] && itWillDefendList[1]) {
					if (diagonalObstacleFreeList[1]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2] && itWillDefendList[2]) {
					if (diagonalObstacleFreeList[2]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3] && itWillDefendList[3]) {
					if (diagonalObstacleFreeList[3]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4] && itWillDefendList[4]) {
					if (diagonalObstacleFreeList[4]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinations2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5] && itWillDefendList[5]) {
					if (diagonalObstacleFreeList[5]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6] && itWillDefendList[6]) {
					if (diagonalObstacleFreeList[6]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7] && itWillDefendList[7]) {
					if (diagonalObstacleFreeList[7]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinations2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinations2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[8].split("")[1]) > 7)) {
				if (whiteAtCheckList[8] && itWillDefendList[8]) {
					if (diagonalObstacleFreeList[8]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[9].split("")[1]) > 7)) {
				if (whiteAtCheckList[9] && itWillDefendList[9]) {
					if (diagonalObstacleFreeList[9]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[10].split("")[1]) > 7)) {
				if (whiteAtCheckList[10] && itWillDefendList[10]) {
					if (diagonalObstacleFreeList[10]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[11].split("")[1]) > 7)) {
				if (whiteAtCheckList[11] && itWillDefendList[11]) {
					if (diagonalObstacleFreeList[11]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[12].split("")[1]) > 7)) {
				if (whiteAtCheckList[12] && itWillDefendList[12]) {
					if (diagonalObstacleFreeList[12]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinations2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[13].split("")[1]) > 7)) {
				if (whiteAtCheckList[13] && itWillDefendList[13]) {
					if (diagonalObstacleFreeList[13]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[14].split("")[1]) > 7)) {
				if (whiteAtCheckList[14] && itWillDefendList[14]) {
					if (diagonalObstacleFreeList[14]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[15].split("")[1]) > 7)) {
				if (whiteAtCheckList[15] && itWillDefendList[15]) {
					if (diagonalObstacleFreeList[15]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[16].split("")[1]) > 7)) {
				if (whiteAtCheckList[16] && itWillDefendList[16]) {
					if (diagonalObstacleFreeList[16]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[17].split("")[1]) > 7)) {
				if (whiteAtCheckList[17] && itWillDefendList[17]) {
					if (diagonalObstacleFreeList[17]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[18].split("")[1]) > 7)) {
				if (whiteAtCheckList[18] && itWillDefendList[18]) {
					if (diagonalObstacleFreeList[18]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[19].split("")[1]) > 7)) {
				if (whiteAtCheckList[19] && itWillDefendList[19]) {
					if (diagonalObstacleFreeList[19]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinations2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[20].split("")[1]) > 7)) {
				if (whiteAtCheckList[20] && itWillDefendList[20]) {
					if (diagonalObstacleFreeList[20]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			
			if (destinations2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[21].split("")[1]) > 7)) {
				if (whiteAtCheckList[21] && itWillDefendList[21]) {
					if (diagonalObstacleFreeList[21]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[22].split("")[1]) > 7)) {
				if (whiteAtCheckList[22] && itWillDefendList[22]) {
					if (diagonalObstacleFreeList[22]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[23].split("")[1]) > 7)) {
				if (whiteAtCheckList[23] && itWillDefendList[23]) {
					if (diagonalObstacleFreeList[23]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[24].split("")[1]) > 7)) {
				if (whiteAtCheckList[24] && itWillDefendList[24]) {
					if (diagonalObstacleFreeList[24]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[25].split("")[1]) > 7)) {
				if (whiteAtCheckList[25] && itWillDefendList[25]) {
					if (diagonalObstacleFreeList[25]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinations2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[26].split("")[1]) > 7)) {
				if (whiteAtCheckList[26] && itWillDefendList[26]) {
					if (diagonalObstacleFreeList[26]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
		}
	}
	  break;
	case "b.shah":
	if(BwhiteTurn) {
	    clickedThing = "b.shah";
	    idHolder = kareler[i4];
	    oldPlace = kareler[i4];
	    preDestinationArr = idHolder.split("");
		var shahCounter = 0;
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisLetter++;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		preDestinationArr = idHolder.split("");
		thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisLetter--;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		preDestinationArr = idHolder.split("");
		thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisNumber++;
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		preDestinationArr = idHolder.split("");
		thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisNumber--;
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		preDestinationArr = idHolder.split("");
		thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisNumber--;
		thisLetter--;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		preDestinationArr = idHolder.split("");
		thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisNumber++;
		thisLetter++;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		preDestinationArr = idHolder.split("");
		thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisNumber++;
		thisLetter--;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		preDestinationArr = idHolder.split("");
		thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		thisNumber--;
		thisLetter++;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[shahCounter] = preDestinationArr.join('');
		shahCounter++
		
		for (i = 0; i < 8; i++) {
			checkWhiteFreeFil(destinations[i]);
		}
		console.log("destinations:");
		console.log(destinations);
		console.log("whiteAtCheckList:");
		console.log(whiteAtCheckList);
		isItSafeWhiteShahDestination(destinations[0]);
			if (itsSafeWhiteShahDestination && destinations[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[0].split("")[1]) > 7)) {
				if (whiteAtCheckList[0]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			isItSafeWhiteShahDestination(destinations[1]);
			if (itsSafeWhiteShahDestination && destinations[1].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			isItSafeWhiteShahDestination(destinations[2]);
			if (itsSafeWhiteShahDestination && destinations[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			isItSafeWhiteShahDestination(destinations[3]);
			if (itsSafeWhiteShahDestination && destinations[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			isItSafeWhiteShahDestination(destinations[4]);
			if (itsSafeWhiteShahDestination && destinations[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			isItSafeWhiteShahDestination(destinations[5]);
			if (itsSafeWhiteShahDestination && destinations[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			//console.log("5")
			//return 5;
			isItSafeWhiteShahDestination(destinations[6]);
			if (itsSafeWhiteShahDestination && destinations[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6]) {
					console.log("5")
					beyazShahMatOldu = false;
					return 5;
				}
			}
			isItSafeWhiteShahDestination(destinations[7]);
			if (itsSafeWhiteShahDestination && destinations[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7]) {
					console.log("5")
					beyazShahMatOldu = false;
					return 5;
				}
			}
		
	}
	  break;
	case "b.vezir":
	if(BwhiteTurn) {
	    clickedThing = "b.vezir";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
		i = 0;
		for (i = 0; i < 8; i++) {
		  preDestinationArr[0] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkWhiteFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		preDestinationArr = idHolder.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preDestinationArr[1] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkWhiteFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		checkStraightObstacleFree(id);
		if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 16; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if (whiteKaleCheckList[0] && itWillDefendList[0]) {
				if (straightObstacleFreeList[0]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[1] && itWillDefendList[1]) {
				if (straightObstacleFreeList[1]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			
			if (whiteKaleCheckList[2] && itWillDefendList[2]) {
				if (straightObstacleFreeList[2]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[3] && itWillDefendList[3]) {
				if (straightObstacleFreeList[3]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[4] && itWillDefendList[4]) {
				if (straightObstacleFreeList[4]) {
					beyazShahMatOldu = false;
					return 5;
				}
			} 
			if (whiteKaleCheckList[5] && itWillDefendList[5]) {
				if (straightObstacleFreeList[5]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[6] && itWillDefendList[6]) {
				if (straightObstacleFreeList[6]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[7] && itWillDefendList[7]) {
				if (straightObstacleFreeList[7]) {
					beyazShahMatOldu = false;
					return 5;
				}
			} 
			if (whiteKaleCheckList[8] && itWillDefendList[8]) {
				if (straightObstacleFreeList[8]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[9] && itWillDefendList[9]) {
				if (straightObstacleFreeList[9]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			
			if (whiteKaleCheckList[10] && itWillDefendList[10]) {
				if (straightObstacleFreeList[10]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[11] && itWillDefendList[11]) {
				if (straightObstacleFreeList[11]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[12] && itWillDefendList[12]) {
				if (straightObstacleFreeList[12]) {
					beyazShahMatOldu = false;
					return 5;
				}
			} 
			if (whiteKaleCheckList[13] && itWillDefendList[13]) {
				if (straightObstacleFreeList[13]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[14] && itWillDefendList[14]) {
				if (straightObstacleFreeList[14]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
			if (whiteKaleCheckList[15] && itWillDefendList[15]) {
				if (straightObstacleFreeList[0]) {
					beyazShahMatOldu = false;
					return 5;
				}
			}
		}
		preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		filCounter = 0;
		for (filCounter = 0; filCounter < 7; filCounter++) {
		  thisLetter--;
		  thisNumber++;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preDestinationArr.join('');
		  destinationsVezir2[filCounter] = destinationsVezir[filCounter];
		  checkWhiteFreeFil(destinationsVezir[filCounter]);
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		for (filCounter = 7; filCounter < 13; filCounter++) {
		  thisLetter--;
		  thisNumber--;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preDestinationArr.join('');
		  destinationsVezir2[filCounter] = destinationsVezir[filCounter];
		  checkWhiteFreeFil(destinationsVezir[filCounter]);
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		for (filCounter = 13; filCounter < 20; filCounter++) {
		  thisLetter++;
		  thisNumber--;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preDestinationArr.join('');
		  destinationsVezir2[filCounter] = destinationsVezir[filCounter];
		  checkWhiteFreeFil(destinationsVezir[filCounter]);
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
		preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		for (filCounter = 20; filCounter < 27; filCounter++) {
		  thisLetter++;
		  thisNumber++;
		  preDestinationArr[0] = lettersAndNumbers[thisLetter];
		  preDestinationArr[1] = lettersAndNumbers[thisNumber];
		  destinationsVezir[filCounter] = preDestinationArr.join('');
		  destinationsVezir2[filCounter] = destinationsVezir[filCounter];
		  checkWhiteFreeFil(destinationsVezir[filCounter]);
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
	    checkDiagonalObstacleFree(id);
		console.log("destinationsVezir:");
		console.log(destinationsVezir);
		console.log("destinationsVezir2");
		console.log(destinationsVezir2);
		console.log("whiteAtCheckList:");
		console.log(whiteAtCheckList);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 27; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if (destinationsVezir2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[1]) > 7)) {
				if (whiteAtCheckList[0] && itWillDefendList[0]) {
					if (diagonalObstacleFreeList[0]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1] && itWillDefendList[1]) {
					if (diagonalObstacleFreeList[1]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2] && itWillDefendList[2]) {
					if (diagonalObstacleFreeList[2]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3] && itWillDefendList[3]) {
					if (diagonalObstacleFreeList[3]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4] && itWillDefendList[4]) {
					if (diagonalObstacleFreeList[4]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinationsVezir2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5] && itWillDefendList[5]) {
					if (diagonalObstacleFreeList[5]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6] && itWillDefendList[6]) {
					if (diagonalObstacleFreeList[6]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7] && itWillDefendList[7]) {
					if (diagonalObstacleFreeList[7]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinationsVezir2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[1]) > 7)) {
				if (whiteAtCheckList[8] && itWillDefendList[8]) {
					if (diagonalObstacleFreeList[8]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[1]) > 7)) {
				if (whiteAtCheckList[9] && itWillDefendList[9]) {
					if (diagonalObstacleFreeList[9]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[1]) > 7)) {
				if (whiteAtCheckList[10] && itWillDefendList[10]) {
					if (diagonalObstacleFreeList[10]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[1]) > 7)) {
				if (whiteAtCheckList[11] && itWillDefendList[11]) {
					if (diagonalObstacleFreeList[11]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[1]) > 7)) {
				if (whiteAtCheckList[12] && itWillDefendList[12]) {
					if (diagonalObstacleFreeList[12]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinationsVezir2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[1]) > 7)) {
				if (whiteAtCheckList[13] && itWillDefendList[13]) {
					if (diagonalObstacleFreeList[13]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[1]) > 7)) {
				if (whiteAtCheckList[14] && itWillDefendList[14]) {
					if (diagonalObstacleFreeList[14]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[1]) > 7)) {
				if (whiteAtCheckList[15] && itWillDefendList[15]) {
					if (diagonalObstacleFreeList[15]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[1]) > 7)) {
				if (whiteAtCheckList[16] && itWillDefendList[16]) {
					if (diagonalObstacleFreeList[16]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[1]) > 7)) {
				if (whiteAtCheckList[17] && itWillDefendList[17]) {
					if (diagonalObstacleFreeList[17]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[1]) > 7)) {
				if (whiteAtCheckList[18] && itWillDefendList[18]) {
					if (diagonalObstacleFreeList[18]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[1]) > 7)) {
				if (whiteAtCheckList[19] && itWillDefendList[19]) {
					if (diagonalObstacleFreeList[19]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			} 
			if (destinationsVezir2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[1]) > 7)) {
				if (whiteAtCheckList[20] && itWillDefendList[20]) {
					if (diagonalObstacleFreeList[20]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			
			if (destinationsVezir2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[1]) > 7)) {
				if (whiteAtCheckList[21] && itWillDefendList[21]) {
					if (diagonalObstacleFreeList[21]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[1]) > 7)) {
				if (whiteAtCheckList[22] && itWillDefendList[22]) {
					if (diagonalObstacleFreeList[22]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[1]) > 7)) {
				if (whiteAtCheckList[23] && itWillDefendList[23]) {
					if (diagonalObstacleFreeList[23]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[1]) > 7)) {
				if (whiteAtCheckList[24] && itWillDefendList[24]) {
					if (diagonalObstacleFreeList[24]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[1]) > 7)) {
				if (whiteAtCheckList[25] && itWillDefendList[25]) {
					if (diagonalObstacleFreeList[22]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			if (destinationsVezir2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[1]) > 7)) {
				if (whiteAtCheckList[26] && itWillDefendList[26]) {
					if (diagonalObstacleFreeList[26]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
		}
	}
	  break;
	  case "b.piyon":
	if(BwhiteTurn) {
	    clickedThing = "b.piyon";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
	    thisLetter = 1 + lettersAndNumbers.indexOf(preDestinationArr[0]);
	    preDestinationArr[0] = lettersAndNumbers[thisLetter];
	    destinations[0] = preDestinationArr.join('');
		thisLetter++;
		preDestinationArr = idHolder.split("");
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
	    destinations[1] = preDestinationArr.join('');
		thisLetter--;
		thisNumber = 1 + lettersAndNumbers.indexOf(preDestinationArr[1]);
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[2] = preDestinationArr.join('');
		thisNumber = thisNumber - 2;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[3] = preDestinationArr.join('');
	    checkWhiteFreeKale(destinations[0]);
		if (idHolder.split("")[0] != "g") {
		  checkWhiteFreeKale(destinations[1]);
		}
		blackPieceCheckList = [];
		blackPieceFreeCounterFil = 0;
		checkBlackPieceFreeFil(destinations[2]);
		checkBlackPieceFreeFil(destinations[3]);
		checkBlackPieceFreeFil(destinations[0]);
		if (idHolder.split("")[0] != "g") {
		  checkBlackPieceFreeFil(destinations[1]);
		}
		console.log("destinations:");
		console.log(destinations);
		console.log("whiteKaleCheckList:");
		console.log(whiteKaleCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 4; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			console.log("Piyon kontrol.WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
			console.log("Destinations.");
			console.log(destinations);
			console.log("whiteKaleCheckList");
			console.log(whiteKaleCheckList);
			console.log("blackPieceCheckList");
			console.log(blackPieceCheckList);
			console.log("itWillDefendList");
			console.log(itWillDefendList);
			if (whiteKaleCheckList[0] && idHolder.split("")[0] != "g") {
				if (blackPieceCheckList[2] && itWillDefendList[0]) {
					beyazShahMatOldu = false;
						return 5;
				}
			}
			if (idHolder.split("")[0] == "g") {
				if (whiteKaleCheckList[0]) {
					if (blackPieceCheckList[2] && itWillDefendList[0]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}	
			}
			
			
			if (idHolder.split("")[0] == "b") {
				if (whiteKaleCheckList[1] && whiteKaleCheckList[0]) {
					if (blackPieceCheckList[3] && blackPieceCheckList[2] && itWillDefendList[1]) {
						beyazShahMatOldu = false;
						return 5;
					}
				}
			}
			
			
			
			
			if (!blackPieceCheckList[0] && idHolder.split("")[0] != "g" && itWillDefendList[2]) {
				beyazShahMatOldu = false;
				return 5;
			}
			if (idHolder.split("")[0] == "e" && gecerkenAlmaSiyahList[numbers.indexOf(destinations[2].split("")[1])] && itWillDefendList[2]) {
				beyazShahMatOldu = false;
				return 5;
			}
			if (!blackPieceCheckList[0] && idHolder.split("")[0] == "g" && itWillDefendList[2]) {
				beyazShahMatOldu = false;
				return 5;
			}
			
			
			
			if (!blackPieceCheckList[1] && idHolder.split("")[0] != "g" && itWillDefendList[3]) {
				beyazShahMatOldu = false;
				return 5;
			}
			if (idHolder.split("")[0] == "e" && gecerkenAlmaSiyahList[numbers.indexOf(destinations[3].split("")[1])] && itWillDefendList[3]) {
				beyazShahMatOldu = false;
				return 5;
			}
			if (!blackPieceCheckList[1] && idHolder.split("")[0] == "g" && itWillDefendList[3]) {
				beyazShahMatOldu = false;
				return 5;
			}
		}
	}
	  break;
	  default:
	  console.log("Bos kare." + kareler[i]);
	  break;
		}
	}
	if (beyazShahMatOldu == "evet") {
		console.log("Hayt huyt");
		beyazShahMatOldu = true;
	}
}

function patOlduMu() {

}