


var destination = "";
var lettersAndNumbers = ["a", "b", "c", "d", "e", "f", "g", "i", "1", "2", "3", "4", "5", "6", "7", "8"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
var clickedThing = "";
var oldPlace;
var destinations = [];
var thisLetter;
var thisNumber;
var inBoard = [];
var destinations2 = [];
var idHolder;
var preDestinationArr;
var destinationsVezir = [];
var destinationsVezir2 = [];
var filCounter = 0;

var rokDestination = {
	whiteDuzRok: "a2",
	whiteVezirRok: "a6",
	
	blackDuzRok: "i2",
	blackVezirRok: "i6",
}
function move(id) {
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
	itWillDefendList = [];
	itWillDefendCounter = 0;
	if(clickedThing) {
		moveClear();
	}
	pieceFreeCheckList = [];
	pieceFreeCounter = 0;
	pieceFreeCounterFil = 0;
	itWillDefendList = [];
	itWillDefendCounter = 0;
	switch (document.getElementById(id).innerHTML) {
      case "b.kale":
	  if(BwhiteTurn) {
	  console.log("hop kale tiklandi");
	    clickedThing = "b.kale";
	    idHolder = id;
	    oldPlace = id;
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
		checkStraightObstacleFree(id);
		console.log("destinations:");
		console.log(destinations);
		console.log("destinations2:");
		console.log(destinations2);
		console.log("whiteKaleCheckList:");
		console.log(whiteKaleCheckList);
		console.log("straightObstacleFreeList:");
		console.log(straightObstacleFreeList);
		willItExposeWhiteShahPiece.piecePlace = id;
			willItExposeWhiteShahPiece.doesItExposesRight();
			willItExposeWhiteShahPiece.doesItExposesLeft();
			willItExposeWhiteShahPiece.doesItExposesDownRight();
			willItExposeWhiteShahPiece.doesItExposesDownLeft();
			willItExposeWhiteShahPiece.doesItExposesUpRight();
			willItExposeWhiteShahPiece.doesItExposesUpLeft();
		if (!shahMatBooleans.siyahShahCekti) {
			if(!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteKaleCheckList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					};
				}
			}
			if (whiteKaleCheckList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			
			if (whiteKaleCheckList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			} 
			if (whiteKaleCheckList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			} 
			} willItExposeWhiteShahPiece.doesItExposesUp();
			willItExposeWhiteShahPiece.doesItExposesDown();
			if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteKaleCheckList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			
			if (whiteKaleCheckList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			} 
			if (whiteKaleCheckList[13]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}};
				}
			}
			if (whiteKaleCheckList[15]) {
				if (straightObstacleFreeList[15]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing)};
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					};
				}
			}
			}
		} else if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 16; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			willItExposeWhiteShahPiece.piecePlace = id;
			willItExposeWhiteShahPiece.doesItExposesRight();
			willItExposeWhiteShahPiece.doesItExposesLeft();
			willItExposeWhiteShahPiece.doesItExposesDownRight();
			willItExposeWhiteShahPiece.doesItExposesDownLeft();
			willItExposeWhiteShahPiece.doesItExposesUpRight();
			willItExposeWhiteShahPiece.doesItExposesUpLeft();
			if(!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
		if (whiteKaleCheckList[0] && itWillDefendList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[1] && itWillDefendList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			
			if (whiteKaleCheckList[2] && itWillDefendList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[3] && itWillDefendList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[4] && itWillDefendList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			} 
			if (whiteKaleCheckList[5] && itWillDefendList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[6] && itWillDefendList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[7] && itWillDefendList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			} 
			} willItExposeWhiteShahPiece.doesItExposesUp();
			willItExposeWhiteShahPiece.doesItExposesDown();
			if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteKaleCheckList[8] && itWillDefendList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[9] && itWillDefendList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			
			if (whiteKaleCheckList[10] && itWillDefendList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[11] && itWillDefendList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[12] && itWillDefendList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			} 
			if (whiteKaleCheckList[13] && itWillDefendList[2]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[14] && itWillDefendList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[15] && itWillDefendList[15]) {
				if (straightObstacleFreeList[15]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing);
					if (idHolder == "a1") {
						rok.whiteA1KaleDidNotMove = false;
					} else if (idHolder == "a8") {
						rok.whiteA8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Beyaz kale shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			}
		}
	  }
	  break;
	  case "b.at":
	  if(BwhiteTurn) {
		console.log("hop at tiklandi.");
	    clickedThing = "b.at";
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
		willItExposeWhiteShahPiece.piecePlace = id;
		willItExposeWhiteShahPiece.doesItExposesRight();
		willItExposeWhiteShahPiece.doesItExposesLeft();
		willItExposeWhiteShahPiece.doesItExposesDownRight();
		willItExposeWhiteShahPiece.doesItExposesDownLeft();
		willItExposeWhiteShahPiece.doesItExposesUpRight();
		willItExposeWhiteShahPiece.doesItExposesUpLeft();
		willItExposeWhiteShahPiece.doesItExposesUp();
		willItExposeWhiteShahPiece.doesItExposesDown();
		if (!shahMatBooleans.siyahShahCekti) {
		if(!willItExposeWhiteShahPiece.itExposesDown &&
		!willItExposeWhiteShahPiece.itExposesUp &&
		!willItExposeWhiteShahPiece.itExposesRight && 
		!willItExposeWhiteShahPiece.itExposesLeft &&
		!willItExposeWhiteShahPiece.itExposesDownRight &&
		!willItExposeWhiteShahPiece.itExposesDownLeft &&
		!willItExposeWhiteShahPiece.itExposesUpRight &&
		!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteAtCheckList[0]) {
				if (destinations2[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing)};
				}
			}
			if (whiteAtCheckList[1]) {
				if (destinations2[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing)};
				}
			}
			if (whiteAtCheckList[2]) {
				if (destinations2[2]) {			
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing)};
				}
			}
			if (whiteAtCheckList[3]) {
				if (destinations2[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing)};
				}
			}
			if (whiteAtCheckList[4]) {
				if (destinations2[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing)};
				}
			}
			if (whiteAtCheckList[5]) {
				if (destinations2[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing)};
				}
			}
			if (whiteAtCheckList[6]) {
				if (destinations2[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing)};
				}
			}
			if (whiteAtCheckList[7]) {
				if (destinations2[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing)};
				}
			}
			}
		} else if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 8; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteAtCheckList[0] && itWillDefendList[0]) {
				if (destinations2[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteAtCheckList[1] && itWillDefendList[1]) {
				if (destinations2[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteAtCheckList[2] && itWillDefendList[2]) {
				if (destinations2[2]) {			
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteAtCheckList[3] && itWillDefendList[3]) {
				if (destinations2[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteAtCheckList[4] && itWillDefendList[4]) {
				if (destinations2[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteAtCheckList[5] && itWillDefendList[5]) {
				if (destinations2[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteAtCheckList[6] && itWillDefendList[6]) {
				if (destinations2[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteAtCheckList[7] && itWillDefendList[7]) {
				if (destinations2[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz at shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			}
		}
	  }
	  break;
	case "b.fil":
	if(BwhiteTurn) {
		//console.log("hop fil tiklandi");
	    clickedThing = "b.fil";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		filCounter = 0;
		// sıfır-yedi arası üst-sağ
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
		// yedi-on üç arası üst sol
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
		// on üç - yirmi arası alt sol
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
		// yirmi - yirmi yedi arası alt sağ
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
		/*console.log("destinations:");
		console.log(destinations);
		console.log("destinations2");
		console.log(destinations2);
		console.log("whiteAtCheckList:");
		console.log(whiteAtCheckList);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		*/
		willItExposeWhiteShahPiece.piecePlace = id;
		willItExposeWhiteShahPiece.doesItExposesRight();
		willItExposeWhiteShahPiece.doesItExposesLeft();
		willItExposeWhiteShahPiece.doesItExposesDownRight();
		willItExposeWhiteShahPiece.doesItExposesDownLeft();
		willItExposeWhiteShahPiece.doesItExposesUpRight();
		willItExposeWhiteShahPiece.doesItExposesUpLeft();
		willItExposeWhiteShahPiece.doesItExposesUp();
		willItExposeWhiteShahPiece.doesItExposesDown();
		if (!shahMatBooleans.siyahShahCekti) {
			if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinations2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[0].split("")[1]) > 7)) {
				if (whiteAtCheckList[0]) {
					if (diagonalObstacleFreeList[0]) {
						document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing)};
					}
				}
			}
			if (destinations2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinations2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing)};
					}
				}
			}
			if (destinations2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing)};
					}
				}
			}
			if (destinations2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing)};
					}
				}
			}
			if (destinations2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing)};
					}
				}
			} 
			if (destinations2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing)};
					}
				}
			}
			if (destinations2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing)};
					}
				}
			}
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinations2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing)};
					}
				}
			} 
			if (destinations2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinations2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[8].split("")[1]) > 7)) {
				if (whiteAtCheckList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing)};
					}
				}
			}
			if (destinations2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[9].split("")[1]) > 7)) {
				if (whiteAtCheckList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing)};
					}
				}
			}
			if (destinations2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[10].split("")[1]) > 7)) {
				if (whiteAtCheckList[10]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing)};
					}
				}
			}
			if (destinations2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[11].split("")[1]) > 7)) {
				if (whiteAtCheckList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing)};
					}
				}
			}
			if (destinations2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[12].split("")[1]) > 7)) {
				if (whiteAtCheckList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing)};
					}
				}
			} 
			if (destinations2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[13].split("")[1]) > 7)) {
				if (whiteAtCheckList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing)};
					}
				}
			}
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinations2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[14].split("")[1]) > 7)) {
				if (whiteAtCheckList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing)};
					}
				}
			}
			if (destinations2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[15].split("")[1]) > 7)) {
				if (whiteAtCheckList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing)};
					}
				}
			}
			if (destinations2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[16].split("")[1]) > 7)) {
				if (whiteAtCheckList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinations2[16]).onclick = function() {write(destinations[16], clickedThing)};
					}
				}
			}
			if (destinations2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[17].split("")[1]) > 7)) {
				if (whiteAtCheckList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinations2[17]).onclick = function() {write(destinations[17], clickedThing)};
					}
				}
			}
			if (destinations2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[18].split("")[1]) > 7)) {
				if (whiteAtCheckList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinations2[18]).onclick = function() {write(destinations[18], clickedThing)};
					}
				}
			}
			if (destinations2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[19].split("")[1]) > 7)) {
				if (whiteAtCheckList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinations2[19]).onclick = function() {write(destinations[19], clickedThing)};
					}
				}
			} 
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinations2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[20].split("")[1]) > 7)) {
				if (whiteAtCheckList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinations2[20]).onclick = function() {write(destinations[20], clickedThing)};
					}
				}
			}
			
			if (destinations2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[21].split("")[1]) > 7)) {
				if (whiteAtCheckList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinations2[21]).onclick = function() {write(destinations[21], clickedThing)};
					}
				}
			}
			if (destinations2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[22].split("")[1]) > 7)) {
				if (whiteAtCheckList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinations2[22]).onclick = function() {write(destinations[22], clickedThing)};
					}
				}
			}
			if (destinations2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[23].split("")[1]) > 7)) {
				if (whiteAtCheckList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinations2[23]).onclick = function() {write(destinations[23], clickedThing)};
					}
				}
			}
			if (destinations2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[24].split("")[1]) > 7)) {
				if (whiteAtCheckList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinations2[24]).onclick = function() {write(destinations[24], clickedThing)};
					}
				}
			}
			if (destinations2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[25].split("")[1]) > 7)) {
				if (whiteAtCheckList[25]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinations2[25]).onclick = function() {write(destinations[25], clickedThing)};
					}
				}
			}
			if (destinations2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[26].split("")[1]) > 7)) {
				if (whiteAtCheckList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinations2[26]).onclick = function() {write(destinations[26], clickedThing)};
					}
				}
			}
			}
		
		} else if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 27; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinations2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[0].split("")[1]) > 7)) {
				if (whiteAtCheckList[0] && itWillDefendList[0]) {
					if (diagonalObstacleFreeList[0]) {
						document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinations2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1] && itWillDefendList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2] && itWillDefendList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3] && itWillDefendList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4] && itWillDefendList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			if (destinations2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5] && itWillDefendList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6] && itWillDefendList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7] && itWillDefendList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinations2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinations2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[8].split("")[1]) > 7)) {
				if (whiteAtCheckList[8] && itWillDefendList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[9].split("")[1]) > 7)) {
				if (whiteAtCheckList[9] && itWillDefendList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[10].split("")[1]) > 7)) {
				if (whiteAtCheckList[10] && itWillDefendList[10]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[11].split("")[1]) > 7)) {
				if (whiteAtCheckList[11] && itWillDefendList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[12].split("")[1]) > 7)) {
				if (whiteAtCheckList[12] && itWillDefendList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			if (destinations2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[13].split("")[1]) > 7)) {
				if (whiteAtCheckList[13] && itWillDefendList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinations2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[14].split("")[1]) > 7)) {
				if (whiteAtCheckList[14] && itWillDefendList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[15].split("")[1]) > 7)) {
				if (whiteAtCheckList[15] && itWillDefendList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[16].split("")[1]) > 7)) {
				if (whiteAtCheckList[16] && itWillDefendList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinations2[16]).onclick = function() {write(destinations[16], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[17].split("")[1]) > 7)) {
				if (whiteAtCheckList[17] && itWillDefendList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinations2[17]).onclick = function() {write(destinations[17], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[18].split("")[1]) > 7)) {
				if (whiteAtCheckList[18] && itWillDefendList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinations2[18]).onclick = function() {write(destinations[18], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[19].split("")[1]) > 7)) {
				if (whiteAtCheckList[19] && itWillDefendList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinations2[19]).onclick = function() {write(destinations[19], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			}
			if (destinations2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[20].split("")[1]) > 7)) {
				if (whiteAtCheckList[20] && itWillDefendList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinations2[20]).onclick = function() {write(destinations[20], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			}if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinations2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[21].split("")[1]) > 7)) {
				if (whiteAtCheckList[21] && itWillDefendList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinations2[21]).onclick = function() {write(destinations[21], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[22].split("")[1]) > 7)) {
				if (whiteAtCheckList[22] && itWillDefendList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinations2[22]).onclick = function() {write(destinations[22], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[23].split("")[1]) > 7)) {
				if (whiteAtCheckList[23] && itWillDefendList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinations2[23]).onclick = function() {write(destinations[23], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[24].split("")[1]) > 7)) {
				if (whiteAtCheckList[24] && itWillDefendList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinations2[24]).onclick = function() {write(destinations[24], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[25].split("")[1]) > 7)) {
				if (whiteAtCheckList[25] && itWillDefendList[25]) {
					if (diagonalObstacleFreeList[25]) {
						document.getElementById(destinations2[25]).onclick = function() {write(destinations[25], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinations2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[26].split("")[1]) > 7)) {
				if (whiteAtCheckList[26] && itWillDefendList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinations2[26]).onclick = function() {write(destinations[26], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz fil shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			
		}
	}
	break;
		case "b.shah":
	if(BwhiteTurn) {
	    clickedThing = "b.shah";
	    idHolder = id;
	    oldPlace = id;
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
					document.getElementById(destinations[0]).onclick = function() {write(destinations[0], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			isItSafeWhiteShahDestination(destinations[1]);
			if (itsSafeWhiteShahDestination && destinations[1].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1]) {
					document.getElementById(destinations[1]).onclick = function() {write(destinations[1], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			isItSafeWhiteShahDestination(destinations[2]);
			if (itsSafeWhiteShahDestination && destinations[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2]) {
					document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			isItSafeWhiteShahDestination(destinations[3]);
			if (itsSafeWhiteShahDestination && destinations[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3]) {
					document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			isItSafeWhiteShahDestination(destinations[4]);
			if (itsSafeWhiteShahDestination && destinations[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4]) {
					document.getElementById(destinations[4]).onclick = function() {write(destinations[4], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			isItSafeWhiteShahDestination(destinations[5]);
			if (itsSafeWhiteShahDestination && destinations[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5]) {
					document.getElementById(destinations[5]).onclick = function() {write(destinations[5], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			isItSafeWhiteShahDestination(destinations[6]);
			if (itsSafeWhiteShahDestination && destinations[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6]) {
					document.getElementById(destinations[6]).onclick = function() {write(destinations[6], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			isItSafeWhiteShahDestination(destinations[7]);
			if (itsSafeWhiteShahDestination && destinations[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7]) {
					document.getElementById(destinations[7]).onclick = function() {write(destinations[7], clickedThing);
					rok.whiteShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Beyaz shah kendini kurtardi!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (!shahMatBooleans.siyahShahCekti) {
				pieceFreeCheckList = [];
				pieceFreeCounter = 0;
				checkPieceFree("a2");
				checkPieceFree("a3");
				if (rok.whiteA1KaleDidNotMove && rok.whiteShahDidNotMove && pieceFreeCheckList[0] && pieceFreeCheckList[1]) {
					document.getElementById("a2").onclick = function() {write("a2", clickedThing);
					document.getElementById("a3").innerHTML = "b.kale";
					document.getElementById("a1").innerHTML = "";
					}
				}
				checkPieceFree("a7");
				checkPieceFree("a6");
				checkPieceFree("a5");
				if (rok.whiteA8KaleDidNotMove && rok.whiteShahDidNotMove && pieceFreeCheckList[2] && pieceFreeCheckList[3] && pieceFreeCheckList[4]) {
					document.getElementById("a6").onclick = function() {write("a6", clickedThing);
					document.getElementById("a5").innerHTML = "b.kale";
					document.getElementById("a8").innerHTML = "";
					}
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
		

		
		
		
		willItExposeWhiteShahPiece.piecePlace = id;
		willItExposeWhiteShahPiece.doesItExposesRight();
		willItExposeWhiteShahPiece.doesItExposesLeft();
		willItExposeWhiteShahPiece.doesItExposesDownRight();
		willItExposeWhiteShahPiece.doesItExposesDownLeft();
		willItExposeWhiteShahPiece.doesItExposesUpRight();
		willItExposeWhiteShahPiece.doesItExposesUpLeft();
		willItExposeWhiteShahPiece.doesItExposesUp();
		willItExposeWhiteShahPiece.doesItExposesDown();
		
		if (!shahMatBooleans.siyahShahCekti) {
			if(!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteKaleCheckList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing)};
				}
			}
			if (whiteKaleCheckList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing)};
				}
			}
			
			if (whiteKaleCheckList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing)};
				}
			}
			if (whiteKaleCheckList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing)};
				}
			}
			if (whiteKaleCheckList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing)};
				}
			} 
			if (whiteKaleCheckList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing)};
				}
			}
			if (whiteKaleCheckList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing)};
				}
			}
			if (whiteKaleCheckList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing)};
				}
			} 
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteKaleCheckList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing)};
				}
			}
			if (whiteKaleCheckList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing)};
				}
			}
			
			if (whiteKaleCheckList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing)};
				}
			}
			if (whiteKaleCheckList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing)};
				}
			}
			if (whiteKaleCheckList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing)};
				}
			} 
			if (whiteKaleCheckList[13]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing)};
				}
			}
			if (whiteKaleCheckList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing)};
				}
			}
			if (whiteKaleCheckList[15]) {
				if (straightObstacleFreeList[15]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing)};
				}
			}
			}
		} else if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 16; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteKaleCheckList[0] && itWillDefendList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[1] && itWillDefendList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			
			if (whiteKaleCheckList[2] && itWillDefendList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[3] && itWillDefendList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[4] && itWillDefendList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			} 
			if (whiteKaleCheckList[5] && itWillDefendList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[6] && itWillDefendList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[7] && itWillDefendList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			} 
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (whiteKaleCheckList[8] && itWillDefendList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[9] && itWillDefendList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			
			if (whiteKaleCheckList[10] && itWillDefendList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[11] && itWillDefendList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[12] && itWillDefendList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			} 
			if (whiteKaleCheckList[13] && itWillDefendList[13]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[14] && itWillDefendList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
			if (whiteKaleCheckList[15] && itWillDefendList[15]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing);
					document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
					shahMatBooleans.siyahShahCekti = false;
					};
				}
			}
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
		/*console.log("destinationsVezir:");
		console.log(destinationsVezir);
		console.log("destinationsVezir2");
		console.log(destinationsVezir2);
		console.log("whiteAtCheckList:");
		console.log(whiteAtCheckList);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		*/
		if (!shahMatBooleans.siyahShahCekti) {
			if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[1]) > 7)) {
				if (whiteAtCheckList[0]) {
					if (diagonalObstacleFreeList[0]) {
						document.getElementById(destinationsVezir2[0]).onclick = function() {write(destinationsVezir[0], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinationsVezir2[1]).onclick = function() {write(destinationsVezir[1], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinationsVezir2[2]).onclick = function() {write(destinationsVezir[2], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinationsVezir2[3]).onclick = function() {write(destinationsVezir[3], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinationsVezir2[4]).onclick = function() {write(destinationsVezir[4], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinationsVezir2[5]).onclick = function() {write(destinationsVezir[5], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinationsVezir2[6]).onclick = function() {write(destinationsVezir[6], clickedThing)};
					}
				}
			}
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinationsVezir2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinationsVezir2[7]).onclick = function() {write(destinationsVezir[7], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[1]) > 7)) {
				if (whiteAtCheckList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinationsVezir2[8]).onclick = function() {write(destinationsVezir[8], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[1]) > 7)) {
				if (whiteAtCheckList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinationsVezir2[9]).onclick = function() {write(destinationsVezir[9], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[1]) > 7)) {
				if (whiteAtCheckList[10]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinationsVezir2[10]).onclick = function() {write(destinationsVezir[10], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[1]) > 7)) {
				if (whiteAtCheckList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinationsVezir2[11]).onclick = function() {write(destinationsVezir[11], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[1]) > 7)) {
				if (whiteAtCheckList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinationsVezir2[12]).onclick = function() {write(destinationsVezir[12], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[1]) > 7)) {
				if (whiteAtCheckList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinationsVezir2[13]).onclick = function() {write(destinationsVezir[13], clickedThing)};
					}
				}
			} 
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[1]) > 7)) {
				if (whiteAtCheckList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinationsVezir2[14]).onclick = function() {write(destinationsVezir[14], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[1]) > 7)) {
				if (whiteAtCheckList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinationsVezir2[15]).onclick = function() {write(destinationsVezir[15], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[1]) > 7)) {
				if (whiteAtCheckList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinationsVezir2[16]).onclick = function() {write(destinationsVezir[16], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[1]) > 7)) {
				if (whiteAtCheckList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinationsVezir2[17]).onclick = function() {write(destinationsVezir[17], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[1]) > 7)) {
				if (whiteAtCheckList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinationsVezir2[18]).onclick = function() {write(destinationsVezir[18], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[1]) > 7)) {
				if (whiteAtCheckList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinationsVezir2[19]).onclick = function() {write(destinationsVezir[19], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[1]) > 7)) {
				if (whiteAtCheckList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinationsVezir2[20]).onclick = function() {write(destinationsVezir[20], clickedThing)};
					}
				}
			}
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinationsVezir2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[1]) > 7)) {
				if (whiteAtCheckList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinationsVezir2[21]).onclick = function() {write(destinationsVezir[21], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[1]) > 7)) {
				if (whiteAtCheckList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[22]).onclick = function() {write(destinationsVezir[22], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[1]) > 7)) {
				if (whiteAtCheckList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinationsVezir2[23]).onclick = function() {write(destinationsVezir[23], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[1]) > 7)) {
				if (whiteAtCheckList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinationsVezir2[24]).onclick = function() {write(destinationsVezir[24], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[1]) > 7)) {
				if (whiteAtCheckList[25]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[25]).onclick = function() {write(destinationsVezir[25], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[1]) > 7)) {
				if (whiteAtCheckList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinationsVezir2[26]).onclick = function() {write(destinationsVezir[26], clickedThing)};
					}
				}
			}
			}
		} else if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			itWillDefendList = [];
			itWillDefendCounter = 0;
			var a = 0;
			for(a = 0; a < 27; a++) {
				controlWillItDefendShah(destinationsVezir2[a]);
			} 
			if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[1]) > 7)) {
				if (whiteAtCheckList[0] && itWillDefendList[0]) {
					if (diagonalObstacleFreeList[0]) {
						document.getElementById(destinationsVezir2[0]).onclick = function() {write(destinationsVezir[0], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[1]) > 7)) {
				if (whiteAtCheckList[1] && itWillDefendList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinationsVezir2[1]).onclick = function() {write(destinationsVezir[1], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[1]) > 7)) {
				if (whiteAtCheckList[2] && itWillDefendList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinationsVezir2[2]).onclick = function() {write(destinationsVezir[2], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[1]) > 7)) {
				if (whiteAtCheckList[3] && itWillDefendList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinationsVezir2[3]).onclick = function() {write(destinationsVezir[3], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[1]) > 7)) {
				if (whiteAtCheckList[4] && itWillDefendList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinationsVezir2[4]).onclick = function() {write(destinationsVezir[4], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			if (destinationsVezir2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[1]) > 7)) {
				if (whiteAtCheckList[5] && itWillDefendList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinationsVezir2[5]).onclick = function() {write(destinationsVezir[5], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[1]) > 7)) {
				if (whiteAtCheckList[6] && itWillDefendList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinationsVezir2[6]).onclick = function() {write(destinationsVezir[6], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinationsVezir2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[1]) > 7)) {
				if (whiteAtCheckList[7] && itWillDefendList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinationsVezir2[7]).onclick = function() {write(destinationsVezir[7], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			if (destinationsVezir2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[1]) > 7)) {
				if (whiteAtCheckList[8] && itWillDefendList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinationsVezir2[8]).onclick = function() {write(destinationsVezir[8], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[1]) > 7)) {
				if (whiteAtCheckList[9] && itWillDefendList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinationsVezir2[9]).onclick = function() {write(destinationsVezir[9], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[1]) > 7)) {
				if (whiteAtCheckList[10] && itWillDefendList[10]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinationsVezir2[10]).onclick = function() {write(destinationsVezir[10], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[1]) > 7)) {
				if (whiteAtCheckList[11] && itWillDefendList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinationsVezir2[11]).onclick = function() {write(destinationsVezir[11], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[1]) > 7)) {
				if (whiteAtCheckList[12] && itWillDefendList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinationsVezir2[12]).onclick = function() {write(destinationsVezir[12], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			if (destinationsVezir2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[1]) > 7)) {
				if (whiteAtCheckList[13] && itWillDefendList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinationsVezir2[13]).onclick = function() {write(destinationsVezir[13], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			} if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[1]) > 7)) {
				if (whiteAtCheckList[14] && itWillDefendList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinationsVezir2[14]).onclick = function() {write(destinationsVezir[14], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[1]) > 7)) {
				if (whiteAtCheckList[15] && itWillDefendList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinationsVezir2[15]).onclick = function() {write(destinationsVezir[15], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[1]) > 7)) {
				if (whiteAtCheckList[16] && itWillDefendList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinationsVezir2[16]).onclick = function() {write(destinationsVezir[16], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[1]) > 7)) {
				if (whiteAtCheckList[17] && itWillDefendList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinationsVezir2[17]).onclick = function() {write(destinationsVezir[17], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[1]) > 7)) {
				if (whiteAtCheckList[18] && itWillDefendList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinationsVezir2[18]).onclick = function() {write(destinationsVezir[18], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[1]) > 7)) {
				if (whiteAtCheckList[19] && itWillDefendList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinationsVezir2[19]).onclick = function() {write(destinationsVezir[19], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			} 
			}
			if (destinationsVezir2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[1]) > 7)) {
				if (whiteAtCheckList[20] && itWillDefendList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinationsVezir2[20]).onclick = function() {write(destinationsVezir[20], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			}  if(!willItExposeWhiteShahPiece.itExposesDown &&
			!willItExposeWhiteShahPiece.itExposesUp &&
			!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpRight) {
			if (destinationsVezir2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[1]) > 7)) {
				if (whiteAtCheckList[21] && itWillDefendList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinationsVezir2[21]).onclick = function() {write(destinationsVezir[21], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[1]) > 7)) {
				if (whiteAtCheckList[22] && itWillDefendList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[22]).onclick = function() {write(destinationsVezir[22], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[1]) > 7)) {
				if (whiteAtCheckList[23] && itWillDefendList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinationsVezir2[23]).onclick = function() {write(destinationsVezir[23], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[1]) > 7)) {
				if (whiteAtCheckList[24] && itWillDefendList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinationsVezir2[24]).onclick = function() {write(destinationsVezir[24], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[1]) > 7)) {
				if (whiteAtCheckList[25] && itWillDefendList[25]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[25]).onclick = function() {write(destinationsVezir[25], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[1]) > 7)) {
				if (whiteAtCheckList[26] && itWillDefendList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinationsVezir2[26]).onclick = function() {write(destinationsVezir[26], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
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
		/*console.log("destinations:");
		console.log(destinations);
		console.log("whiteKaleCheckList:");
		console.log(whiteKaleCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		*/
		willItExposeWhiteShahPiece.piecePlace = id;
			willItExposeWhiteShahPiece.doesItExposesUp();
			willItExposeWhiteShahPiece.doesItExposesDown();
			willItExposeWhiteShahPiece.doesItExposesRight();
			willItExposeWhiteShahPiece.doesItExposesLeft();
			willItExposeWhiteShahPiece.doesItExposesDownRight();
			willItExposeWhiteShahPiece.doesItExposesDownLeft();
			willItExposeWhiteShahPiece.doesItExposesUpRight();
			willItExposeWhiteShahPiece.doesItExposesUpLeft();
		if (!shahMatBooleans.siyahShahCekti) {
			if(!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpright &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
				if (whiteKaleCheckList[0] && idHolder.split("")[0] != "g") {
					if (blackPieceCheckList[2]) {
						document.getElementById(destinations[0]).onclick = function() {write(destinations[0], clickedThing)};
					}
				}
				if (idHolder.split("")[0] == "g") {
					if (whiteKaleCheckList[0]) {
						if (blackPieceCheckList[2]) {
							document.getElementById(destinations[0]).onclick = function() {write(destinations[0], "b.vezir")};
						}
					}	
				}
				
				
				if (idHolder.split("")[0] == "b") {
					if (whiteKaleCheckList[1] && whiteKaleCheckList[0]) {
						if (blackPieceCheckList[3] && blackPieceCheckList[2]) {
							document.getElementById(destinations[1]).onclick = function() {write(destinations[1], clickedThing); 
							gecerkenAlmaBeyazList[numbers.indexOf(destinations[1].split("")[1])] = true; };
						}
					}
				}
				
			}
			if(!willItExposeWhiteShahPiece.itExposesDown &&
		!willItExposeWhiteShahPiece.itExposesUp &&
		!willItExposeWhiteShahPiece.itExposesRight && 
		!willItExposeWhiteShahPiece.itExposesLeft &&
		!willItExposeWhiteShahPiece.itExposesDownLeft &&
		!willItExposeWhiteShahPiece.itExposesUpRight) {
			
			
			if (!blackPieceCheckList[0] && idHolder.split("")[0] != "g") {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing)};
			}
			if (idHolder.split("")[0] == "e" && gecerkenAlmaSiyahList[numbers.indexOf(destinations[2].split("")[1])]) {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing)
				preDestinationArr = destinations[2].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber--;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				};
			}
			if (!blackPieceCheckList[0] && idHolder.split("")[0] == "g") {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], "b.vezir")};
			}
		}
			
			if(!willItExposeWhiteShahPiece.itExposesDown &&
		!willItExposeWhiteShahPiece.itExposesUp &&
		!willItExposeWhiteShahPiece.itExposesRight && 
		!willItExposeWhiteShahPiece.itExposesLeft &&
		!willItExposeWhiteShahPiece.itExposesDownRight &&
		!willItExposeWhiteShahPiece.itExposesUpLeft) {
			
			if (!blackPieceCheckList[1] && idHolder.split("")[0] != "g") {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing)};
			}
			if (idHolder.split("")[0] == "e" && gecerkenAlmaSiyahList[numbers.indexOf(destinations[3].split("")[1])]) {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing)
				preDestinationArr = destinations[3].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber--;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				};
			}
			if (!blackPieceCheckList[1] && idHolder.split("")[0] == "g") {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], "b.vezir")};
			}
		}
		} else if (shahMatBooleans.siyahShahCekti) {
			shahDefenderPlaces();
			itWillDefendList = [];
			itWillDefendCounter = 0;
			var a = 0;
			for(a = 0; a < 4; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeWhiteShahPiece.itExposesRight && 
			!willItExposeWhiteShahPiece.itExposesLeft &&
			!willItExposeWhiteShahPiece.itExposesDownRight &&
			!willItExposeWhiteShahPiece.itExposesDownLeft &&
			!willItExposeWhiteShahPiece.itExposesUpright &&
			!willItExposeWhiteShahPiece.itExposesUpLeft) {
			
				if (whiteKaleCheckList[0] && idHolder.split("")[0] != "g") {
					if (blackPieceCheckList[2] && itWillDefendList[0]) {
						document.getElementById(destinations[0]).onclick = function() {write(destinations[0], clickedThing);
						document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
						shahMatBooleans.siyahShahCekti = false;
						};
					}
				}
				if (idHolder.split("")[0] == "g") {
					if (whiteKaleCheckList[0]) {
						if (blackPieceCheckList[2] && itWillDefendList[0]) {
							document.getElementById(destinations[0]).onclick = function() {write(destinations[0], "b.vezir");
							document.getElementById("shah").innerHTML = "Beyaz vezir shahi korudu!";
							shahMatBooleans.siyahShahCekti = false;
							};
						}
					}	
				}
				
				
				if (idHolder.split("")[0] == "b") {
					if (whiteKaleCheckList[1] && whiteKaleCheckList[0]) {
						if (blackPieceCheckList[3] && blackPieceCheckList[2] && itWillDefendList[1]) {
							document.getElementById(destinations[1]).onclick = function() {write(destinations[1], clickedThing); 
							gecerkenAlmaBeyazList[numbers.indexOf(destinations[1].split("")[1])] = true; 
							document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
							shahMatBooleans.siyahShahCekti = false;
							};
						}
					}
				}
			}
			if(!willItExposeWhiteShahPiece.itExposesDown &&
		!willItExposeWhiteShahPiece.itExposesUp &&
		!willItExposeWhiteShahPiece.itExposesRight && 
		!willItExposeWhiteShahPiece.itExposesLeft &&
		!willItExposeWhiteShahPiece.itExposesDownLeft &&
		!willItExposeWhiteShahPiece.itExposesUpRight) {
			
			
			
			if (!blackPieceCheckList[0] && idHolder.split("")[0] != "g" && itWillDefendList[2]) {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing);
				document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
				shahMatBooleans.siyahShahCekti = false;
				};
			}
			if (idHolder.split("")[0] == "e" && gecerkenAlmaSiyahList[numbers.indexOf(destinations[2].split("")[1])] && itWillDefendList[2]) {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing)
				preDestinationArr = destinations[2].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber--;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
				shahMatBooleans.siyahShahCekti = false;
				};
			}
			if (!blackPieceCheckList[0] && idHolder.split("")[0] == "g" && itWillDefendList[2]) {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], "b.vezir");
				document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
				shahMatBooleans.siyahShahCekti = false;
				};
			}
		}
			
			if(!willItExposeWhiteShahPiece.itExposesDown &&
		!willItExposeWhiteShahPiece.itExposesUp &&
		!willItExposeWhiteShahPiece.itExposesRight && 
		!willItExposeWhiteShahPiece.itExposesLeft &&
		!willItExposeWhiteShahPiece.itExposesDownRight &&
		!willItExposeWhiteShahPiece.itExposesUpLeft) {
			
			if (!blackPieceCheckList[1] && idHolder.split("")[0] != "g" && itWillDefendList[3]) {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing);
				document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
				shahMatBooleans.siyahShahCekti = false;
				};
			}
			if (idHolder.split("")[0] == "e" && gecerkenAlmaSiyahList[numbers.indexOf(destinations[3].split("")[1])] && itWillDefendList[3]) {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing)
				preDestinationArr = destinations[3].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber--;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
				shahMatBooleans.siyahShahCekti = false;
				};
			}
			if (!blackPieceCheckList[1] && idHolder.split("")[0] == "g" && itWillDefendList[3]) {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], "b.vezir");
				document.getElementById("shah").innerHTML = "Beyaz piyon shahi korudu!";
				shahMatBooleans.siyahShahCekti = false;
				};
			}
		}
		}
	}
	  break;
	case "s.kale":
	if(BblackTurn) {
	    clickedThing = "s.kale";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
		var i = 0;
		for (i = 0; i < 8; i++) {
		  preDestinationArr[0] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkBlackFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		preDestinationArr = idHolder.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preDestinationArr[1] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkBlackFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		checkStraightObstacleFree(id);
		console.log("destinations:");
		console.log(destinations);
		console.log("destinations2");
		console.log(destinations2);
		console.log("blackKaleCheckList:");
		console.log(blackKaleCheckList);
		console.log("straightObstacleFreeList:");
		console.log(straightObstacleFreeList);
		willItExposeBlackShahPiece.piecePlace = id;
			willItExposeBlackShahPiece.doesItExposesRight();
			willItExposeBlackShahPiece.doesItExposesLeft();
			willItExposeBlackShahPiece.doesItExposesDownRight();
			willItExposeBlackShahPiece.doesItExposesDownLeft();
			willItExposeBlackShahPiece.doesItExposesUpRight();
			willItExposeBlackShahPiece.doesItExposesUpLeft();
			willItExposeBlackShahPiece.doesItExposesUp();
			willItExposeBlackShahPiece.doesItExposesDown();
		if (!shahMatBooleans.beyazShahCekti) {
			if(!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			
			if (blackKaleCheckList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			} 
			if (blackKaleCheckList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			} 
			} if(!willItExposeBlackShahPiece.itExposesDown &&
			!willItExposeBlackShahPiece.itExposesUp &&
			!willItExposeBlackShahPiece.itExposesDownRight &&
			!willItExposeBlackShahPiece.itExposesDownLeft &&
			!willItExposeBlackShahPiece.itExposesUpRight &&
			!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			
			if (blackKaleCheckList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			} 
			if (blackKaleCheckList[13]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			if (blackKaleCheckList[15]) {
				if (straightObstacleFreeList[15]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}};
				}
			}
			}
		} else if (shahMatBooleans.beyazShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 16; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[0] && itWillDefendList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[1] && itWillDefendList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			
			if (blackKaleCheckList[2] && itWillDefendList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[3] && itWillDefendList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[4] && itWillDefendList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			} 
			if (blackKaleCheckList[5] && itWillDefendList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[6] && itWillDefendList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[7] && itWillDefendList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			} 
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[8] && itWillDefendList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[9] && itWillDefendList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			
			if (blackKaleCheckList[10] && itWillDefendList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[11] && itWillDefendList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[12] && itWillDefendList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			} 
			if (blackKaleCheckList[13] && itWillDefendList[13]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[14] && itWillDefendList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[15] && itWillDefendList[15]) {
				if (straightObstacleFreeList[15]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing);
					if (idHolder == "i1") {
						rok.blackI1KaleDidNotMove = false;
					} else if (idHolder == "i8") {
						rok.blackI8KaleDidNotMove = false;
					}
					document.getElementById("shah").innerHTML = "Siyah kale shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
		}
		}
	}
	  break;
	case "s.at":
	  if(BblackTurn) {
	    clickedThing = "s.at";
	    //console.log("clickedThing:" + clickedThing);
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
		//console.log("preDestinationArr:" + preDestinationArr);
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]);
		thisNumber = lettersAndNumbers.indexOf(preDestinationArr[1]);
		//console.log("thisLetter:" + thisLetter);
		//console.log("thisNumber:" + thisNumber);
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
		var sAtCounter = 0;
		for(sAtCounter = 0; sAtCounter < 8; sAtCounter++) {
			destinations2[sAtCounter] = destinations[sAtCounter];
			destinations[sAtCounter] = destinations2[sAtCounter];
			checkBlackFreeAt(destinations[sAtCounter]);
		}
		/*console.log("destinations2:");
		console.log(destinations2);
		console.log("destinations:");
		console.log(destinations);
		console.log("blackAtCheckList:");
		console.log(blackAtCheckList);
		*/
		willItExposeBlackShahPiece.piecePlace = id;
			willItExposeBlackShahPiece.doesItExposesRight();
			willItExposeBlackShahPiece.doesItExposesLeft();
			willItExposeBlackShahPiece.doesItExposesDownRight();
			willItExposeBlackShahPiece.doesItExposesDownLeft();
			willItExposeBlackShahPiece.doesItExposesUpRight();
			willItExposeBlackShahPiece.doesItExposesUpLeft();
			willItExposeBlackShahPiece.doesItExposesUp();
			willItExposeBlackShahPiece.doesItExposesDown();
		if (!shahMatBooleans.beyazShahCekti) {
			if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackAtCheckList[0]) {
				if (destinations2[0]) {
					//console.log("0");
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing)};
				}
			}
			if (blackAtCheckList[1]) {
				if (destinations2[1]) {
					//console.log("1");
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing)};
				}
			}
			if (blackAtCheckList[2]) {
				if (destinations2[2]) {			
					//console.log("2");
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing)};
				}
			}
			if (blackAtCheckList[3]) {
				if (destinations2[3]) {
					//console.log("3");
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing)};
				}
			}
			if (blackAtCheckList[4]) {
				if (destinations2[4]) {
					//console.log("4");
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing)};
				}
			}
			if (blackAtCheckList[5]) {
				if (destinations2[5]) {
					//console.log("5");
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing)};
				}
			}
			if (blackAtCheckList[6]) {
				if (destinations2[6]) {
					//console.log("6");
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing)};
				}
			}
			if (blackAtCheckList[7]) {
				if (destinations2[7]) {
					//console.log("7");
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing)};
				}
			}
		}
		} else if (shahMatBooleans.beyazShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 8; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackAtCheckList[0] && itWillDefendList[0]) {
				if (destinations2[0]) {
					//console.log("0");
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackAtCheckList[1] && itWillDefendList[1]) {
				if (destinations2[1]) {
					//console.log("1");
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackAtCheckList[2] && itWillDefendList[2]) {
				if (destinations2[2]) {			
					//console.log("2");
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackAtCheckList[3] && itWillDefendList[3]) {
				if (destinations2[3]) {
					//console.log("3");
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackAtCheckList[4] && itWillDefendList[4]) {
				if (destinations2[4]) {
					//console.log("4");
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackAtCheckList[5] && itWillDefendList[5]) {
				if (destinations2[5]) {
					//console.log("5");
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackAtCheckList[6] && itWillDefendList[6]) {
				if (destinations2[6]) {
					//console.log("6");
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackAtCheckList[7] && itWillDefendList[7]) {
				if (destinations2[7]) {
					//console.log("7");
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah at shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
		}
		}
		//console.log("");
		//console.log("");
		//console.log("");
		//console.log("");
	  }
	  break;
	case "s.fil":
	  if(BblackTurn) {
	    clickedThing = "s.fil";
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
		  checkBlackFreeFil(destinations[filCounter]);
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
		  checkBlackFreeFil(destinations[filCounter]);
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
		  checkBlackFreeFil(destinations[filCounter]);
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
		  checkBlackFreeFil(destinations[filCounter]);
		  checkPieceFreeFil(destinations[filCounter]);
		}
	    checkDiagonalObstacleFree(id);
		console.log("destinations2:");
		console.log(destinations2);
		console.log("destinations:");
		console.log(destinations);
		console.log("blackAtCheckList:");
		console.log(blackAtCheckList);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		willItExposeBlackShahPiece.piecePlace = id;
			willItExposeBlackShahPiece.doesItExposesRight();
			willItExposeBlackShahPiece.doesItExposesLeft();
			willItExposeBlackShahPiece.doesItExposesDownRight();
			willItExposeBlackShahPiece.doesItExposesDownLeft();
			willItExposeBlackShahPiece.doesItExposesUpRight();
			willItExposeBlackShahPiece.doesItExposesUpLeft();
			willItExposeBlackShahPiece.doesItExposesUp();
			willItExposeBlackShahPiece.doesItExposesDown();
		if (!shahMatBooleans.beyazShahCekti) {
			if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinations2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[0].split("")[1]) > 7)) {
				if (blackAtCheckList[0]) {
					if (diagonalObstacleFreeList[0]) {
						document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing)};
					}
				}
			}
			if (destinations2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinations2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[1].split("")[1]) > 7)) {
				if (blackAtCheckList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing)};
					}
				}
			}
			if (destinations2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[2].split("")[1]) > 7)) {
				if (blackAtCheckList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing)};
					}
				}
			}
			if (destinations2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[3].split("")[1]) > 7)) {
				if (blackAtCheckList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing)};
					}
				}
			}
			if (destinations2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[4].split("")[1]) > 7)) {
				if (blackAtCheckList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing)};
					}
				}
			} 
			if (destinations2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[5].split("")[1]) > 7)) {
				if (blackAtCheckList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing)};
					}
				}
			}
			if (destinations2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[6].split("")[1]) > 7)) {
				if (blackAtCheckList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing)};
					}
				}
			}
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight) {
			if (destinations2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[7].split("")[1]) > 7)) {
				if (blackAtCheckList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing)};
					}
				}
			} 
			if (destinations2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinations2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[8].split("")[1]) > 7)) {
				if (blackAtCheckList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing)};
					}
				}
			}
			if (destinations2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[9].split("")[1]) > 7)) {
				if (blackAtCheckList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing)};
					}
				}
			}
			if (destinations2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[10].split("")[1]) > 7)) {
				if (blackAtCheckList[10]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing)};
					}
				}
			}
			if (destinations2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[11].split("")[1]) > 7)) {
				if (blackAtCheckList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing)};
					}
				}
			}
			if (destinations2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[12].split("")[1]) > 7)) {
				if (blackAtCheckList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing)};
					}
				}
			} 
			if (destinations2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[13].split("")[1]) > 7)) {
				if (blackAtCheckList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing)};
					}
				}
			}
			}  if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinations2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[14].split("")[1]) > 7)) {
				if (blackAtCheckList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing)};
					}
				}
			}
			if (destinations2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[15].split("")[1]) > 7)) {
				if (blackAtCheckList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing)};
					}
				}
			}
			if (destinations2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[16].split("")[1]) > 7)) {
				if (blackAtCheckList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinations2[16]).onclick = function() {write(destinations[16], clickedThing)};
					}
				}
			}
			if (destinations2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[17].split("")[1]) > 7)) {
				if (blackAtCheckList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinations2[17]).onclick = function() {write(destinations[17], clickedThing)};
					}
				}
			}
			if (destinations2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[18].split("")[1]) > 7)) {
				if (blackAtCheckList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinations2[18]).onclick = function() {write(destinations[18], clickedThing)};
					}
				}
			}
			if (destinations2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[19].split("")[1]) > 7)) {
				if (blackAtCheckList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinations2[19]).onclick = function() {write(destinations[19], clickedThing)};
					}
				}
			} 
			if (destinations2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[20].split("")[1]) > 7)) {
				if (blackAtCheckList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinations2[20]).onclick = function() {write(destinations[20], clickedThing)};
					}
				}
			}
			}  if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			if (destinations2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[21].split("")[1]) > 7)) {
				if (blackAtCheckList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinations2[21]).onclick = function() {write(destinations[21], clickedThing)};
					}
				}
			}
			if (destinations2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[22].split("")[1]) > 7)) {
				if (blackAtCheckList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinations2[22]).onclick = function() {write(destinations[22], clickedThing)};
					}
				}
			}
			if (destinations2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[23].split("")[1]) > 7)) {
				if (blackAtCheckList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinations2[23]).onclick = function() {write(destinations[23], clickedThing)};
					}
				}
			}
			if (destinations2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[24].split("")[1]) > 7)) {
				if (blackAtCheckList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinations2[24]).onclick = function() {write(destinations[24], clickedThing)};
					}
				}
			}
			if (destinations2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[25].split("")[1]) > 7)) {
				if (blackAtCheckList[25]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinations2[25]).onclick = function() {write(destinations[25], clickedThing)};
					}
				}
			}
			if (destinations2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[26].split("")[1]) > 7)) {
				if (blackAtCheckList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinations2[26]).onclick = function() {write(destinations[26], clickedThing)};
					}
				}
			}
		}
		} else if (shahMatBooleans.beyazShahCekti) { 
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 27; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinations2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[0].split("")[1]) > 7)) {
				if (blackAtCheckList[0] && itWillDefendList[0]) {
					if (diagonalObstacleFreeList[0]) {
							document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinations2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[1].split("")[1]) > 7)) {
				if (blackAtCheckList[1] && itWillDefendList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[2].split("")[1]) > 7)) {
				if (blackAtCheckList[2] && itWillDefendList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[3].split("")[1]) > 7)) {
				if (blackAtCheckList[3] && itWillDefendList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[4].split("")[1]) > 7)) {
				if (blackAtCheckList[4] && itWillDefendList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinations2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[5].split("")[1]) > 7)) {
				if (blackAtCheckList[5] && itWillDefendList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[6].split("")[1]) > 7)) {
				if (blackAtCheckList[6] && itWillDefendList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight) {
			if (destinations2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[7].split("")[1]) > 7)) {
				if (blackAtCheckList[7] && itWillDefendList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinations2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinations2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[8].split("")[1]) > 7)) {
				if (blackAtCheckList[8] && itWillDefendList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[9].split("")[1]) > 7)) {
				if (blackAtCheckList[9] && itWillDefendList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[10].split("")[1]) > 7)) {
				if (blackAtCheckList[10 && itWillDefendList[10]]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[11].split("")[1]) > 7)) {
				if (blackAtCheckList[11] && itWillDefendList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[12].split("")[1]) > 7)) {
				if (blackAtCheckList[12] && itWillDefendList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinations2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[13].split("")[1]) > 7)) {
				if (blackAtCheckList[13] && itWillDefendList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinations2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[14].split("")[1]) > 7)) {
				if (blackAtCheckList[14] && itWillDefendList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[15].split("")[1]) > 7)) {
				if (blackAtCheckList[15] && itWillDefendList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[16].split("")[1]) > 7)) {
				if (blackAtCheckList[16] && itWillDefendList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinations2[16]).onclick = function() {write(destinations[16], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[17].split("")[1]) > 7)) {
				if (blackAtCheckList[17] && itWillDefendList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinations2[17]).onclick = function() {write(destinations[17], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[18].split("")[1]) > 7)) {
				if (blackAtCheckList[18] && itWillDefendList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinations2[18]).onclick = function() {write(destinations[18], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[19].split("")[1]) > 7)) {
				if (blackAtCheckList[19] && itWillDefendList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinations2[19]).onclick = function() {write(destinations[19], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinations2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[20].split("")[1]) > 7)) {
				if (blackAtCheckList[20] && itWillDefendList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinations2[20]).onclick = function() {write(destinations[20], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			if (destinations2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[21].split("")[1]) > 7)) {
				if (blackAtCheckList[21] && itWillDefendList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinations2[21]).onclick = function() {write(destinations[21], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[22].split("")[1]) > 7)) {
				if (blackAtCheckList[22] && itWillDefendList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinations2[22]).onclick = function() {write(destinations[22], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[23].split("")[1]) > 7)) {
				if (blackAtCheckList[23] && itWillDefendList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinations2[23]).onclick = function() {write(destinations[23], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[24].split("")[1]) > 7)) {
				if (blackAtCheckList[24] && itWillDefendList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinations2[24]).onclick = function() {write(destinations[24], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[25].split("")[1]) > 7)) {
				if (blackAtCheckList[25] && itWillDefendList[25]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinations2[25]).onclick = function() {write(destinations[25], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinations2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinations2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations2[26].split("")[1]) > 7)) {
				if (blackAtCheckList[26] && itWillDefendList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinations2[26]).onclick = function() {write(destinations[26], clickedThing);
							document.getElementById("shah").innerHTML = "Siyah fil shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
		}
		}
	}
	  break;
	case "s.shah":
	  if(BblackTurn) {
	    clickedThing = "s.shah";
	    idHolder = id;
	    oldPlace = id;
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
			checkBlackFreeFil(destinations[i]);
		}
		console.log("destinations:");
		console.log(destinations);
		console.log("blackAtCheckList:");
		console.log(blackAtCheckList);
		isItSafeBlackShahDestination(destinations[0]);
			if (itsSafeBlackShahDestination && destinations[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[0].split("")[1]) > 7)) {
				if (blackAtCheckList[0]) {
					document.getElementById(destinations[0]).onclick = function() {write(destinations[0], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			isItSafeBlackShahDestination(destinations[1]);
			if (itsSafeBlackShahDestination && destinations[1].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[1].split("")[1]) > 7)) {
				if (blackAtCheckList[1]) {
					document.getElementById(destinations[1]).onclick = function() {write(destinations[1], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			isItSafeBlackShahDestination(destinations[2]);
			if (itsSafeBlackShahDestination && destinations[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[2].split("")[1]) > 7)) {
				if (blackAtCheckList[2]) {
					document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			isItSafeBlackShahDestination(destinations[3]);
			if (itsSafeBlackShahDestination && destinations[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[3].split("")[1]) > 7)) {
				if (blackAtCheckList[3]) {
					document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			isItSafeBlackShahDestination(destinations[4]);
			if (itsSafeBlackShahDestination && destinations[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[4].split("")[1]) > 7)) {
				if (blackAtCheckList[4]) {
					document.getElementById(destinations[4]).onclick = function() {write(destinations[4], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			isItSafeBlackShahDestination(destinations[5]);
			if (itsSafeBlackShahDestination && destinations[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[5].split("")[1]) > 7)) {
				if (blackAtCheckList[5]) {
					document.getElementById(destinations[5]).onclick = function() {write(destinations[5], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			isItSafeBlackShahDestination(destinations[6]);
			if (itsSafeBlackShahDestination && destinations[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[6].split("")[1]) > 7)) {
				if (blackAtCheckList[6]) {
					document.getElementById(destinations[6]).onclick = function() {write(destinations[6], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			isItSafeBlackShahDestination(destinations[7]);
			if (itsSafeBlackShahDestination && destinations[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinations[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinations[7].split("")[1]) > 7)) {
				if (blackAtCheckList[7]) {
					document.getElementById(destinations[7]).onclick = function() {write(destinations[7], clickedThing);
					rok.blackShahDidNotMove = false;
					document.getElementById("shah").innerHTML = "Siyah shah kendini kurtardi!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (!shahMatBooleans.beyazShahCekti) {
				pieceFreeCheckList = [];
				pieceFreeCounter = 0;
				checkPieceFree("i2");
				checkPieceFree("i3");
				if (rok.blackI1KaleDidNotMove && rok.blackShahDidNotMove && pieceFreeCheckList[0] && pieceFreeCheckList[1]) {
					document.getElementById("i2").onclick = function() {write("i2", clickedThing);
					document.getElementById("i3").innerHTML = "s.kale"; 
					document.getElementById("i1").innerHTML = "";
					}
				}
				checkPieceFree("i7");
				checkPieceFree("i6");
				checkPieceFree("i5");
				if (rok.blackI8KaleDidNotMove && rok.blackShahDidNotMove && pieceFreeCheckList[2] && pieceFreeCheckList[3] && pieceFreeCheckList[4]) {
					document.getElementById("i6").onclick = function() {write("i6", clickedThing);
					document.getElementById("i5").innerHTML = "s.kale"; 
					document.getElementById("i8").innerHTML = "";
					}
				}
			}

	}
	  break;
	case "s.vezir":
	  if(BblackTurn) {
	    clickedThing = "s.vezir";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
		i = 0;
		for (i = 0; i < 8; i++) {
		  preDestinationArr[0] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkBlackFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		preDestinationArr = idHolder.split("");
		i = 8;
	    for (i = 8; i < 16; i++) {
		  preDestinationArr[1] = lettersAndNumbers[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i];
		  checkBlackFreeKale(destinations[i]);
		  checkPieceFree(destinations[i]);
		}
		checkStraightObstacleFree(id);
		willItExposeBlackShahPiece.piecePlace = id;
			willItExposeBlackShahPiece.doesItExposesRight();
			willItExposeBlackShahPiece.doesItExposesLeft();
			willItExposeBlackShahPiece.doesItExposesDownRight();
			willItExposeBlackShahPiece.doesItExposesDownLeft();
			willItExposeBlackShahPiece.doesItExposesUpRight();
			willItExposeBlackShahPiece.doesItExposesUpLeft();
			willItExposeBlackShahPiece.doesItExposesUp();
			willItExposeBlackShahPiece.doesItExposesDown();
		if (!shahMatBooleans.beyazShahCekti) {
			if(!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing)};
				}
			}
			if (blackKaleCheckList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing)};
				}
			}
			
			if (blackKaleCheckList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing)};
				}
			}
			if (blackKaleCheckList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing)};
				}
			}
			if (blackKaleCheckList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing)};
				}
			} 
			if (blackKaleCheckList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing)};
				}
			}
			if (blackKaleCheckList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing)};
				}
			}
			if (blackKaleCheckList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing)};
				}
			} 
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing)};
				}
			}
			if (blackKaleCheckList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing)};
				}
			}
			
			if (blackKaleCheckList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing)};
				}
			}
			if (blackKaleCheckList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing)};
				}
			}
			if (blackKaleCheckList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing)};
				}
			} 
			if (blackKaleCheckList[13]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing)};
				}
			}
			if (blackKaleCheckList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing)};
				}
			}
			if (blackKaleCheckList[15]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing)};
				}
			}
			}
		} else if (shahMatBooleans.beyazShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 16; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[0] && itWillDefendList[0]) {
				if (straightObstacleFreeList[0]) {
					document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[1] && itWillDefendList[1]) {
				if (straightObstacleFreeList[1]) {
					document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			
			if (blackKaleCheckList[2] && itWillDefendList[2]) {
				if (straightObstacleFreeList[2]) {
					document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[3] && itWillDefendList[3]) {
				if (straightObstacleFreeList[3]) {
					document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[4] && itWillDefendList[4]) {
				if (straightObstacleFreeList[4]) {
					document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			} 
			if (blackKaleCheckList[5] && itWillDefendList[5]) {
				if (straightObstacleFreeList[5]) {
					document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[6] && itWillDefendList[6]) {
				if (straightObstacleFreeList[6]) {
					document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[7] && itWillDefendList[7]) {
				if (straightObstacleFreeList[7]) {
					document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			} 
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[8] && itWillDefendList[8]) {
				if (straightObstacleFreeList[8]) {
					document.getElementById(destinations2[8]).onclick = function() {write(destinations[8], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[9] && itWillDefendList[9]) {
				if (straightObstacleFreeList[9]) {
					document.getElementById(destinations2[9]).onclick = function() {write(destinations[9], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			
			if (blackKaleCheckList[10] && itWillDefendList[10]) {
				if (straightObstacleFreeList[10]) {
					document.getElementById(destinations2[10]).onclick = function() {write(destinations[10], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[11] && itWillDefendList[11]) {
				if (straightObstacleFreeList[11]) {
					document.getElementById(destinations2[11]).onclick = function() {write(destinations[11], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[12] && itWillDefendList[12]) {
				if (straightObstacleFreeList[12]) {
					document.getElementById(destinations2[12]).onclick = function() {write(destinations[12], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			} 
			if (blackKaleCheckList[13] && itWillDefendList[13]) {
				if (straightObstacleFreeList[13]) {
					document.getElementById(destinations2[13]).onclick = function() {write(destinations[13], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[14] && itWillDefendList[14]) {
				if (straightObstacleFreeList[14]) {
					document.getElementById(destinations2[14]).onclick = function() {write(destinations[14], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (blackKaleCheckList[15] && itWillDefendList[15]) {
				if (straightObstacleFreeList[15]) {
					document.getElementById(destinations2[15]).onclick = function() {write(destinations[15], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
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
		  checkBlackFreeFil(destinationsVezir[filCounter]);
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
		  checkBlackFreeFil(destinationsVezir[filCounter]);
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
		  checkBlackFreeFil(destinationsVezir[filCounter]);
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
		  checkBlackFreeFil(destinationsVezir[filCounter]);
		  checkPieceFreeFil(destinationsVezir[filCounter]);
		}
	    checkDiagonalObstacleFree(id);
		/*console.log("destinationsVezir:");
		console.log(destinationsVezir);
		console.log("destinationsVezir2:");
		console.log(destinationsVezir2);
		console.log("blackKaleCheckList:");
		console.log(blackKaleCheckList);
		console.log("diagonalObstacleFreeList:");
		console.log(diagonalObstacleFreeList);
		*/
		if (!shahMatBooleans.beyazShahCekti) {
			if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[1]) > 7)) {
				if (blackAtCheckList[0]) {
					if (diagonalObstacleFreeList[0]) {
						document.getElementById(destinationsVezir2[0]).onclick = function() {write(destinationsVezir[0], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[1]) > 7)) {
				if (blackAtCheckList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinationsVezir2[1]).onclick = function() {write(destinationsVezir[1], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[1]) > 7)) {
				if (blackAtCheckList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinationsVezir2[2]).onclick = function() {write(destinationsVezir[2], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[1]) > 7)) {
				if (blackAtCheckList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinationsVezir2[3]).onclick = function() {write(destinationsVezir[3], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[1]) > 7)) {
				if (blackAtCheckList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinationsVezir2[4]).onclick = function() {write(destinationsVezir[4], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[1]) > 7)) {
				if (blackAtCheckList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinationsVezir2[5]).onclick = function() {write(destinationsVezir[5], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[1]) > 7)) {
				if (blackAtCheckList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinationsVezir2[6]).onclick = function() {write(destinationsVezir[6], clickedThing)};
					}
				}
			}
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			if (destinationsVezir2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[1]) > 7)) {
				if (blackAtCheckList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinationsVezir2[7]).onclick = function() {write(destinationsVezir[7], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[1]) > 7)) {
				if (blackAtCheckList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinationsVezir2[8]).onclick = function() {write(destinationsVezir[8], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[1]) > 7)) {
				if (blackAtCheckList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinationsVezir2[9]).onclick = function() {write(destinationsVezir[9], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[1]) > 7)) {
				if (blackAtCheckList[10]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinationsVezir2[10]).onclick = function() {write(destinationsVezir[10], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[1]) > 7)) {
				if (blackAtCheckList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinationsVezir2[11]).onclick = function() {write(destinationsVezir[11], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[1]) > 7)) {
				if (blackAtCheckList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinationsVezir2[12]).onclick = function() {write(destinationsVezir[12], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[1]) > 7)) {
				if (blackAtCheckList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinationsVezir2[13]).onclick = function() {write(destinationsVezir[13], clickedThing)};
					}
				}
			}
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[1]) > 7)) {
				if (blackAtCheckList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinationsVezir2[14]).onclick = function() {write(destinationsVezir[14], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[1]) > 7)) {
				if (blackAtCheckList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinationsVezir2[15]).onclick = function() {write(destinationsVezir[15], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[1]) > 7)) {
				if (blackAtCheckList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinationsVezir2[16]).onclick = function() {write(destinationsVezir[16], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[1]) > 7)) {
				if (blackAtCheckList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinationsVezir2[17]).onclick = function() {write(destinationsVezir[17], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[1]) > 7)) {
				if (blackAtCheckList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinationsVezir2[18]).onclick = function() {write(destinationsVezir[18], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[1]) > 7)) {
				if (blackAtCheckList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinationsVezir2[19]).onclick = function() {write(destinationsVezir[19], clickedThing)};
					}
				}
			} 
			if (destinationsVezir2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[1]) > 7)) {
				if (blackAtCheckList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinationsVezir2[20]).onclick = function() {write(destinationsVezir[20], clickedThing)};
					}
				}
			}
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			if (destinationsVezir2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[1]) > 7)) {
				if (blackAtCheckList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinationsVezir2[21]).onclick = function() {write(destinationsVezir[21], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[1]) > 7)) {
				if (blackAtCheckList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[22]).onclick = function() {write(destinationsVezir[22], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[1]) > 7)) {
				if (blackAtCheckList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinationsVezir2[23]).onclick = function() {write(destinationsVezir[23], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[1]) > 7)) {
				if (blackAtCheckList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinationsVezir2[24]).onclick = function() {write(destinationsVezir[24], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[1]) > 7)) {
				if (blackAtCheckList[25]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[25]).onclick = function() {write(destinationsVezir[25], clickedThing)};
					}
				}
			}
			if (destinationsVezir2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[1]) > 7)) {
				if (blackAtCheckList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinationsVezir2[26]).onclick = function() {write(destinationsVezir[26], clickedThing)};
					}
				}
			}
		}
		} else if (shahMatBooleans.beyazShahCekti) {
			shahDefenderPlaces();
			itWillDefendList = [];
			itWillDefendCounter = 0;
			var a = 0;
			for(a = 0; a < 27; a++) {
				controlWillItDefendShah(destinationsVezir2[a]);
			} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[0].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[0].split("")[1]) > 7)) {
				if (blackAtCheckList[0] && itWillDefendList[0]) {
					if (diagonalObstacleFreeList[0]) {
						document.getElementById(destinationsVezir2[0]).onclick = function() {write(destinationsVezir[0], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[1].split("").length > 1 && 
			(lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[1].split("")[1]) > 7)) {
				if (blackAtCheckList[1] && itWillDefendList[1]) {
					if (diagonalObstacleFreeList[1]) {
						document.getElementById(destinationsVezir2[1]).onclick = function() {write(destinationsVezir[1], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[2].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[2].split("")[1]) > 7)) {
				if (blackAtCheckList[2] && itWillDefendList[2]) {
					if (diagonalObstacleFreeList[2]) {
						document.getElementById(destinationsVezir2[2]).onclick = function() {write(destinationsVezir[2], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[3].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[3].split("")[1]) > 7)) {
				if (blackAtCheckList[3] && itWillDefendList[3]) {
					if (diagonalObstacleFreeList[3]) {
						document.getElementById(destinationsVezir2[3]).onclick = function() {write(destinationsVezir[3], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[4].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[4].split("")[1]) > 7)) {
				if (blackAtCheckList[4] && itWillDefendList[4]) {
					if (diagonalObstacleFreeList[4]) {
						document.getElementById(destinationsVezir2[4]).onclick = function() {write(destinationsVezir[4], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinationsVezir2[5].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[5].split("")[1]) > 7)) {
				if (blackAtCheckList[5] && itWillDefendList[5]) {
					if (diagonalObstacleFreeList[5]) {
						document.getElementById(destinationsVezir2[5]).onclick = function() {write(destinationsVezir[5], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[6].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[6].split("")[1]) > 7)) {
				if (blackAtCheckList[6] && itWillDefendList[6]) {
					if (diagonalObstacleFreeList[6]) {
						document.getElementById(destinationsVezir2[6]).onclick = function() {write(destinationsVezir[6], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
		}if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			if (destinationsVezir2[7].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[7].split("")[1]) > 7)) {
				if (blackAtCheckList[7] && itWillDefendList[7]) {
					if (diagonalObstacleFreeList[7]) {
						document.getElementById(destinationsVezir2[7]).onclick = function() {write(destinationsVezir[7], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinationsVezir2[8].split("").length > 1&& (lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[8].split("")[1]) > 7)) {
				if (blackAtCheckList[8] && itWillDefendList[8]) {
					if (diagonalObstacleFreeList[8]) {
						document.getElementById(destinationsVezir2[8]).onclick = function() {write(destinationsVezir[8], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[9].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[9].split("")[1]) > 7)) {
				if (blackAtCheckList[9] && itWillDefendList[9]) {
					if (diagonalObstacleFreeList[9]) {
						document.getElementById(destinationsVezir2[9]).onclick = function() {write(destinationsVezir[9], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[10].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[10].split("")[1]) > 7)) {
				if (blackAtCheckList[10] && itWillDefendList[10]) {
					if (diagonalObstacleFreeList[10]) {
						document.getElementById(destinationsVezir2[10]).onclick = function() {write(destinationsVezir[10], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[11].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[11].split("")[1]) > 7)) {
				if (blackAtCheckList[11] && itWillDefendList[11]) {
					if (diagonalObstacleFreeList[11]) {
						document.getElementById(destinationsVezir2[11]).onclick = function() {write(destinationsVezir[11], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[12].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[12].split("")[1]) > 7)) {
				if (blackAtCheckList[12] && itWillDefendList[12]) {
					if (diagonalObstacleFreeList[12]) {
						document.getElementById(destinationsVezir2[12]).onclick = function() {write(destinationsVezir[12], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinationsVezir2[13].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[13].split("")[1]) > 7)) {
				if (blackAtCheckList[13] && itWillDefendList[13]) {
					if (diagonalObstacleFreeList[13]) {
						document.getElementById(destinationsVezir2[13]).onclick = function() {write(destinationsVezir[13], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
		} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (destinationsVezir2[14].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[14].split("")[1]) > 7)) {
				if (blackAtCheckList[14] && itWillDefendList[14]) {
					if (diagonalObstacleFreeList[14]) {
						document.getElementById(destinationsVezir2[14]).onclick = function() {write(destinationsVezir[14], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[15].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[15].split("")[1]) > 7)) {
				if (blackAtCheckList[15] && itWillDefendList[15]) {
					if (diagonalObstacleFreeList[15]) {
						document.getElementById(destinationsVezir2[15]).onclick = function() {write(destinationsVezir[15], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[16].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[16].split("")[1]) > 7)) {
				if (blackAtCheckList[16] && itWillDefendList[16]) {
					if (diagonalObstacleFreeList[16]) {
						document.getElementById(destinationsVezir2[16]).onclick = function() {write(destinationsVezir[16], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[17].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[17].split("")[1]) > 7)) {
				if (blackAtCheckList[17] && itWillDefendList[17]) {
					if (diagonalObstacleFreeList[17]) {
						document.getElementById(destinationsVezir2[17]).onclick = function() {write(destinationsVezir[17], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[18].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[18].split("")[1]) > 7)) {
				if (blackAtCheckList[18] && itWillDefendList[18]) {
					if (diagonalObstacleFreeList[18]) {
						document.getElementById(destinationsVezir2[18]).onclick = function() {write(destinationsVezir[18], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[19].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[19].split("")[1]) > 7)) {
				if (blackAtCheckList[19] && itWillDefendList[19]) {
					if (diagonalObstacleFreeList[19]) {
						document.getElementById(destinationsVezir2[19]).onclick = function() {write(destinationsVezir[19], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			} 
			if (destinationsVezir2[20].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[20].split("")[1]) > 7)) {
				if (blackAtCheckList[20] && itWillDefendList[20]) {
					if (diagonalObstacleFreeList[20]) {
						document.getElementById(destinationsVezir2[20]).onclick = function() {write(destinationsVezir[20], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
		}if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			if (destinationsVezir2[21].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[21].split("")[1]) > 7)) {
				if (blackAtCheckList[21] && itWillDefendList[21]) {
					if (diagonalObstacleFreeList[21]) {
						document.getElementById(destinationsVezir2[21]).onclick = function() {write(destinationsVezir[21], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[22].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[22].split("")[1]) > 7)) {
				if (blackAtCheckList[22] && itWillDefendList[22]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[22]).onclick = function() {write(destinationsVezir[22], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[23].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[23].split("")[1]) > 7)) {
				if (blackAtCheckList[23] && itWillDefendList[23]) {
					if (diagonalObstacleFreeList[23]) {
						document.getElementById(destinationsVezir2[23]).onclick = function() {write(destinationsVezir[23], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[24].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[24].split("")[1]) > 7)) {
				if (blackAtCheckList[24] && itWillDefendList[24]) {
					if (diagonalObstacleFreeList[24]) {
						document.getElementById(destinationsVezir2[24]).onclick = function() {write(destinationsVezir[24], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[25].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[25].split("")[1]) > 7)) {
				if (blackAtCheckList[25] && itWillDefendList[25]) {
					if (diagonalObstacleFreeList[22]) {
						document.getElementById(destinationsVezir2[25]).onclick = function() {write(destinationsVezir[25], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
			if (destinationsVezir2[26].split("").length > 1 && (lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[0]) < 8 &&
			lettersAndNumbers.indexOf(destinationsVezir2[26].split("")[1]) > 7)) {
				if (blackAtCheckList[26] && itWillDefendList[26]) {
					if (diagonalObstacleFreeList[26]) {
						document.getElementById(destinationsVezir2[26]).onclick = function() {write(destinationsVezir[26], clickedThing);
						document.getElementById("shah").innerHTML = "Siyah vezir shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
		}
		}
	}
	  break;
	case "s.piyon":
	if(BblackTurn) {
	    clickedThing = "s.piyon";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
	    thisLetter = lettersAndNumbers.indexOf(preDestinationArr[0]) - 1;
	    preDestinationArr[0] = lettersAndNumbers[thisLetter];
	    destinations[0] = preDestinationArr.join('');
		thisLetter--;
		preDestinationArr = idHolder.split("");
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
	    destinations[1] = preDestinationArr.join('');
		thisLetter++;
		thisNumber = 1 + lettersAndNumbers.indexOf(preDestinationArr[1]);
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[2] = preDestinationArr.join('');
		thisNumber = thisNumber - 2;
		preDestinationArr[0] = lettersAndNumbers[thisLetter];
		preDestinationArr[1] = lettersAndNumbers[thisNumber];
		destinations[3] = preDestinationArr.join('');
	    checkBlackFreeKale(destinations[0]);
		if (idHolder.split("")[0] != "b") {
		  checkBlackFreeKale(destinations[1]);
		}
		whitePieceCheckList = [];
		whitePieceFreeCounterFil = 0;
		checkWhitePieceFreeFil(destinations[2]);
		checkWhitePieceFreeFil(destinations[3]);
		checkWhitePieceFreeFil(destinations[0]);
		if (idHolder.split("")[0] != "b") {
		  checkWhitePieceFreeFil(destinations[1]);
		}
		/*console.log("destinations:");
		console.log(destinations);
		console.log("blackKaleCheckList:");
		console.log(blackKaleCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		*/
		willItExposeBlackShahPiece.piecePlace = id;
			willItExposeBlackShahPiece.doesItExposesRight();
			willItExposeBlackShahPiece.doesItExposesLeft();
			willItExposeBlackShahPiece.doesItExposesDownRight();
			willItExposeBlackShahPiece.doesItExposesDownLeft();
			willItExposeBlackShahPiece.doesItExposesUpRight();
			willItExposeBlackShahPiece.doesItExposesUpLeft();
			willItExposeBlackShahPiece.doesItExposesUp();
			willItExposeBlackShahPiece.doesItExposesDown();
			//console.log("Assagi sagi expose ediyor mu?");
			//console.log(willItExposeBlackShahPiece.itExposesDownRight);
		if (!shahMatBooleans.beyazShahCekti) {
		if(!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[0]) {
				if (whitePieceCheckList[2] && idHolder.split("")[0] != "b") {
					document.getElementById(destinations[0]).onclick = function() {write(destinations[0], clickedThing)};
				}
			}
			if (idHolder.split("")[0] == "b") {
				if (blackKaleCheckList[0]) {
					if (whitePieceCheckList[2]) {
						document.getElementById(destinations[0]).onclick = function() {write(destinations[0], "s.vezir");};
					}
				}
			}
			
			
			if (idHolder.split("")[0] == "g") {
				if (blackKaleCheckList[1] && blackKaleCheckList[0]) {
					if (whitePieceCheckList[3] && whitePieceCheckList[2]) {
						document.getElementById(destinations[1]).onclick = function() {write(destinations[1], clickedThing); 
						gecerkenAlmaSiyahList[numbers.indexOf(destinations[1].split("")[1])] = true; };
					}
				}
			}
		} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			
			
			if (!whitePieceCheckList[0] && idHolder.split("")[0] != "b") {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing)};
			}
			if (idHolder.split("")[0] == "d" && gecerkenAlmaBeyazList[numbers.indexOf(destinations[2].split("")[1])]) {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing);
				preDestinationArr = destinations[2].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber++;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				};
			}
			if (idHolder.split("")[0] == "b") {
				if (!whitePieceCheckList[2]) {
					document.getElementById(destinations[2]).onclick = function() {write(destinations[2], "s.vezir");};
				}
			}
		} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			
			
			if (!whitePieceCheckList[1] && idHolder.split("")[0] != "b") {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing)};
			}
			if (idHolder.split("")[0] == "d" && gecerkenAlmaBeyazList[numbers.indexOf(destinations[3].split("")[1])]) {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing)
				preDestinationArr = destinations[3].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber++;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				};
			}
			if (idHolder.split("")[0] == "b" ) {
				if (!whitePieceCheckList[2]) {
					document.getElementById(destinations[3]).onclick = function() {write(destinations[3], "s.vezir");};
				}
				
			}
		}
		} if (shahMatBooleans.beyazShahCekti) {
			shahDefenderPlaces();
			var a = 0;
			for(a = 0; a < 4; a++) {
				controlWillItDefendShah(destinations[a]);
			}
			if(!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			if (blackKaleCheckList[0] && itWillDefendList[0]) {
				if (whitePieceCheckList[2] && idHolder.split("")[0] != "b") {
					document.getElementById(destinations[0]).onclick = function() {write(destinations[0], clickedThing);
					document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
			if (idHolder.split("")[0] == "b") {
				if (blackKaleCheckList[0] && itWillDefendList[0]) {
					if (whitePieceCheckList[2]) {
							document.getElementById(destinations[0]).onclick = function() {write(destinations[0], "s.vezir");
							document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
							shahMatBooleans.beyazShahCekti = false;
					    };
					}
				}
			}
			
			
			if (idHolder.split("")[0] == "g") {
				if (blackKaleCheckList[1] && blackKaleCheckList[0] && itWillDefendList[1]) {
					if (whitePieceCheckList[3] && whitePieceCheckList[2]) {
						document.getElementById(destinations[1]).onclick = function() {write(destinations[1], clickedThing); 
						gecerkenAlmaSiyahList[numbers.indexOf(destinations[1].split("")[1])] = true; 
						document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
						shahMatBooleans.beyazShahCekti = false;
						};
					}
				}
			}
		} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownRight &&
		!willItExposeBlackShahPiece.itExposesUpLeft) {
			
			
			if (!whitePieceCheckList[0] && idHolder.split("")[0] != "b" && itWillDefendList[2]) {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing);
				document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
				shahMatBooleans.beyazShahCekti = false;
				};
			}
			if (idHolder.split("")[0] == "d" && gecerkenAlmaBeyazList[numbers.indexOf(destinations[2].split("")[1])] && itWillDefendList[2]) {
				document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing);
				preDestinationArr = destinations[2].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber++;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
				shahMatBooleans.beyazShahCekti = false;
				};
			}
			if (idHolder.split("")[0] == "b" && itWillDefendList[2]) {
				if (!whitePieceCheckList[2]) {
					document.getElementById(destinations[2]).onclick = function() {write(destinations[2], "s.vezir");
					document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
			}
		} if(!willItExposeBlackShahPiece.itExposesDown &&
		!willItExposeBlackShahPiece.itExposesUp &&
		!willItExposeBlackShahPiece.itExposesRight && 
		!willItExposeBlackShahPiece.itExposesLeft &&
		!willItExposeBlackShahPiece.itExposesDownLeft &&
		!willItExposeBlackShahPiece.itExposesUpRight ) {
			
			
			if (!whitePieceCheckList[1] && idHolder.split("")[0] != "b" && itWillDefendList[3]) {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing);
				document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
				shahMatBooleans.beyazShahCekti = false;
				};
			}
			if (idHolder.split("")[0] == "d" && gecerkenAlmaBeyazList[numbers.indexOf(destinations[3].split("")[1])] && itWillDefendList[3]) {
				document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing)
				preDestinationArr = destinations[3].split("");
				var letterNumber = lettersAndNumbers.indexOf(preDestinationArr[0]);
				letterNumber++;
				preDestinationArr[0] = lettersAndNumbers[letterNumber];
				var deleted = preDestinationArr.join("");
				document.getElementById(deleted).innerHTML = "";
				document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
				shahMatBooleans.beyazShahCekti = false;
				};
			}
			if (idHolder.split("")[0] == "b" && itWillDefendList[3]) {
				if (!whitePieceCheckList[2]) {
					document.getElementById(destinations[3]).onclick = function() {write(destinations[3], "s.vezir");
					document.getElementById("shah").innerHTML = "Siyah piyon shahi korudu!";
					shahMatBooleans.beyazShahCekti = false;
					};
				}
				
			}
		}
		}
	}
	  break;
	default:
	console.log("Bosluga tiklandi.");
	  break;
	}
}

