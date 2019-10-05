

var BwhiteTurn;
var BblackTurn;

var whiteFree;
var blackFree;

var BwhiteTurn2;
var BblackTurn2;

var whiteKaleCheckList = [];
var whiteKaleCheckCounter = 0;

var blackKaleCheckList = [];
var blackKaleCheckCounter = 0;

var whiteAtCheckList = [];
var whiteAtCheckCounter = 0;

var blackAtCheckList = [];
var blackAtCheckCounter = 0;

var pieceFreeCheckList = [];
var pieceFreeCounter = 0;

var pieceFreeCheckListFil = [];

var blackPieceCheckList = [];
var blackPieceFreeCounter = 0;

var whitePieceCheckList = [];
var whitePieceFreeCounter = 0;

var blackPieceFreeCounterAt = 0;
var pieceFreeCounterAt = 0;
var whitePieceFreeCounterAt = 0;

var straightObstacleFreeList = [];
var straightObstacleFreeNumbers = [];
var firstObstacleLetterBackwards;
var firstObstacleLetterForwards;
var firstObstacleNumberLeft;
var firstObstacleNumberRight;
var obstacleFreeCounter;

var diagonalObstacleFreeList = [];
var diagonalObstacleFreeNumbers = [];
var firstDiagonalObstacleLeftUp;
var firstDiagonalObstacleRightUp;
var firstDiagonalObstacleLeftDown;
var firstDiagonalObstacleRightDown;
var diagonalObstacleFreeCounter = 0;

var numberHolder;
var letterHolder;

var whitePieceFreeCounterFil = 0;
var blackPieceFreeCounterFil = 0;
var pieceFreeCounterFil = 0;

var lettersAndNumbersAtBoleans = ["a", "b", "c", "d", "e", "f", "g", "i", "1", "2", "3", "4", "5", "6", "7", "8"];


function checkDiagonalObstacleFree($checkDiagonalObstacleId) {
	var diagonalIdCheckHolder = $checkDiagonalObstacleId;
	var currentDiagonalPlaceLetterAndNumber = diagonalIdCheckHolder.split("");
	for(firstDiagonalObstacleRightUp = 0; firstDiagonalObstacleRightUp < 7; firstDiagonalObstacleRightUp++){
		if (!pieceFreeCheckList[firstDiagonalObstacleRightUp]) { break; }
	}
	for(firstDiagonalObstacleLeftUp = 7; firstDiagonalObstacleLeftUp < 13; firstDiagonalObstacleLeftUp++){
		if (!pieceFreeCheckList[firstDiagonalObstacleLeftUp]) { break; }
	}
	for(firstDiagonalObstacleLeftDown = 13; firstDiagonalObstacleLeftDown < 20; firstDiagonalObstacleLeftDown++){
		if (!pieceFreeCheckList[firstDiagonalObstacleLeftDown]) { break; }
	}
	for(firstDiagonalObstacleRightDown = 20; firstDiagonalObstacleRightDown < 27; firstDiagonalObstacleRightDown++){
		if (!pieceFreeCheckList[firstDiagonalObstacleRightDown]) { break; }
	}
	for(diagonalObstacleFreeCounter = 0; diagonalObstacleFreeCounter < 7; diagonalObstacleFreeCounter++){
		if (diagonalObstacleFreeCounter <= firstDiagonalObstacleRightUp) {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = true;
		} else {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = false;
		}
	}
	for(diagonalObstacleFreeCounter = 7; diagonalObstacleFreeCounter < 13; diagonalObstacleFreeCounter++){
		if (diagonalObstacleFreeCounter <= firstDiagonalObstacleLeftUp) {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = true;
		} else {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = false;
		}
	}
	for(diagonalObstacleFreeCounter = 13; diagonalObstacleFreeCounter < 20; diagonalObstacleFreeCounter++){
		if (diagonalObstacleFreeCounter <= firstDiagonalObstacleLeftDown) {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = true;
		} else {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = false;
		}
	}
	for(diagonalObstacleFreeCounter = 20; diagonalObstacleFreeCounter < 27; diagonalObstacleFreeCounter++){
		if (diagonalObstacleFreeCounter <= firstDiagonalObstacleRightDown) {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = true;
		} else {
			diagonalObstacleFreeList[diagonalObstacleFreeCounter] = false;
		}
	}
}



/*Düz yoldaki engelleri belirleyen fonksiyon mesela kale ve vezir taş atlayamadığı için kale ve vezirin yolunun üstünde
taş var mı diye bakmak gerekiyor.
*/
function checkStraightObstacleFree($checkObstacleId) {
	//console.log("$checkObstacleId:" + $checkObstacleId);
	var idCheckHolder = $checkObstacleId;
	//console.log("idCheckHolder:" + idCheckHolder);
	var currentPlaceLetterAndNumber = idCheckHolder.split("");
	//console.log("currentPlaceLetterAndNumber:" + currentPlaceLetterAndNumber);
	firstObstacleLetterBackwards = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[0]);
	firstObstacleLetterForwards = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[0]);
	firstObstacleLetterBackwards--;
	firstObstacleLetterForwards++;
	//console.log("firstObstacleLetterBackwards:" + firstObstacleLetterBackwards);
	//console.log("firstObstacleLetterForwards:" + firstObstacleLetterForwards);
	for(firstObstacleLetterBackwards; firstObstacleLetterBackwards > -1; firstObstacleLetterBackwards--){
		//console.log("pieceFreeCheckList[firstObstacleLetterBackwards]:" + pieceFreeCheckList[firstObstacleLetterBackwards]);
		if (!pieceFreeCheckList[firstObstacleLetterBackwards]) { break; }
		//console.log("1");
	}
	for(firstObstacleLetterForwards; firstObstacleLetterForwards < 8; firstObstacleLetterForwards++){
		//console.log("pieceFreeCheckList[firstObstacleLetterForwards]:" + pieceFreeCheckList[firstObstacleLetterForwards]);
		if (!pieceFreeCheckList[firstObstacleLetterForwards]) { break; }
		//console.log("2");
	}
	obstacleFreeCounter = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[0]);
	//console.log("obstacleFreeCounter:" + obstacleFreeCounter);
	obstacleFreeCounter--;
	//console.log("obstacleFreeCounter:" + obstacleFreeCounter);
	for(obstacleFreeCounter; obstacleFreeCounter >= 0; obstacleFreeCounter--) {
		if(obstacleFreeCounter >= firstObstacleLetterBackwards) {
			straightObstacleFreeList[obstacleFreeCounter] = true;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]" + straightObstacleFreeList[obstacleFreeCounter]);
		} else {
			straightObstacleFreeList[obstacleFreeCounter] = false;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]" + straightObstacleFreeList[obstacleFreeCounter]);
		}
	}
	//console.log("straightObstacleFreeList:" + straightObstacleFreeList);
	//console.log("obstacleFreeCounter:" + obstacleFreeCounter);
	obstacleFreeCounter = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[0]);
	obstacleFreeCounter++;
	//console.log("obstacleFreeCounter:" + obstacleFreeCounter);
	for(obstacleFreeCounter; obstacleFreeCounter <= 7; obstacleFreeCounter++) {
		if(obstacleFreeCounter <= firstObstacleLetterForwards) {
			straightObstacleFreeList[obstacleFreeCounter] = true;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]:" + straightObstacleFreeList[obstacleFreeCounter]);
		} else {
			straightObstacleFreeList[obstacleFreeCounter] = false;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]:" + straightObstacleFreeList[obstacleFreeCounter]);
		}
	}
	firstObstacleNumberLeft = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[1]);
	firstObstacleNumberRight = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[1]);
	firstObstacleNumberLeft--;
	firstObstacleNumberRight++;
	//console.log("firstObstacleNumberLeft:" + firstObstacleNumberLeft);
	//console.log("firstObstacleNumberRight:" + firstObstacleNumberRight );
	for(firstObstacleNumberLeft; firstObstacleNumberLeft > 7; firstObstacleNumberLeft--){
		//console.log("!!!!!!!pieceFreeCheckList[firstObstacleNumberLeft]:" + pieceFreeCheckList[firstObstacleNumberLeft]);
		if (!pieceFreeCheckList[firstObstacleNumberLeft]) { break; }
	}
	obstacleFreeCounter = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[1]);
	obstacleFreeCounter--;
	//console.log("obstacleFreeCounter:" + obstacleFreeCounter);
	for(obstacleFreeCounter; obstacleFreeCounter >= 8; obstacleFreeCounter--) {
		if(obstacleFreeCounter >= firstObstacleNumberLeft) {
			straightObstacleFreeList[obstacleFreeCounter] = true;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]:" + straightObstacleFreeList[obstacleFreeCounter]);
		} else {
			straightObstacleFreeList[obstacleFreeCounter] = false;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]:" + straightObstacleFreeList[obstacleFreeCounter]);
		}
	}
	for(firstObstacleNumberRight; firstObstacleNumberRight < 16; firstObstacleNumberRight++){
		//console.log("!!!!!!pieceFreeCheckList[firstObstacleNumberRight]:" + pieceFreeCheckList[firstObstacleNumberRight]);
		if (!pieceFreeCheckList[firstObstacleNumberRight]) { break; }
	}
	obstacleFreeCounter = lettersAndNumbersAtBoleans.indexOf(currentPlaceLetterAndNumber[1]);
	obstacleFreeCounter++;
	//console.log("obstacleFreeCounter:" + obstacleFreeCounter);
	for(obstacleFreeCounter; obstacleFreeCounter <= 15; obstacleFreeCounter++) {
		if(obstacleFreeCounter <= firstObstacleNumberRight) {
			straightObstacleFreeList[obstacleFreeCounter] = true;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]:" + straightObstacleFreeList[obstacleFreeCounter]);
		} else {
			straightObstacleFreeList[obstacleFreeCounter] = false;
			//console.log("straightObstacleFreeList[obstacleFreeCounter]:" + straightObstacleFreeList[obstacleFreeCounter]);
		}
	}
}

function checkBlackPieceFreeFil($blackPiecePlace) {
	if ($blackPiecePlace.split("").length > 1 && (lettersAndNumbers.indexOf($blackPiecePlace.split("")[0]) < 8 &&
		lettersAndNumbers.indexOf($blackPiecePlace.split("")[1]) > 7)) {
		var blackPieceChecker = document.getElementById($blackPiecePlace).innerHTML;
		var blackPieceChecker2 = blackPieceChecker.split("");
		if(blackPieceChecker2[0] == "s") {
			blackPieceCheckList[blackPieceFreeCounterFil] = false;
		} else {
			blackPieceCheckList[blackPieceFreeCounterFil] = true;
		}
	} else {
		blackPieceCheckList[blackPieceFreeCounterFil] = true;
	}
	blackPieceFreeCounterFil++;
	
}

function checkWhitePieceFreeFil($whitePiecePlace) {
	if ($whitePiecePlace.split("").length > 1 && (lettersAndNumbers.indexOf($whitePiecePlace.split("")[0]) < 8 &&
		lettersAndNumbers.indexOf($whitePiecePlace.split("")[1]) > 7)) {
		var whitePieceChecker = document.getElementById($whitePiecePlace).innerHTML;
		var whitePieceChecker2 = whitePieceChecker.split("");
		if(whitePieceChecker2[0] == "b") {
			whitePieceCheckList[whitePieceFreeCounterFil] = false;
		} else {
			whitePieceCheckList[whitePieceFreeCounterFil] = true;
		}
	} else {
		whitePieceCheckList[whitePieceFreeCounterFil] = true;
	}
	whitePieceFreeCounterFil++;
	
}

function checkBlackPieceFreeAt($blackPiecePlace) {
	if ($blackPiecePlace) {
		var blackPieceChecker = document.getElementById($blackPiecePlace).innerHTML;
		var blackPieceChecker2 = blackPieceChecker.split("");
		if(blackPieceChecker2[0] == "s") {
			blackPieceCheckList[blackPieceFreeCounterAt] = false;
		} else {
			blackPieceCheckList[blackPieceFreeCounterAt] = true;
		}
	} else {
		blackPieceCheckList[blackPieceFreeCounterAt] = true;
	}
	blackPieceFreeCounterAt++;
	
}

function checkWhitePieceFreeAt($whitePiecePlace) {
	if ($whitePiecePlace) {
		var whitePieceChecker = document.getElementById($whitePiecePlace).innerHTML;
		var whitePieceChecker2 = whitePieceChecker.split("");
		if(whitePieceChecker2[0] == "b") {
			whitePieceCheckList[whitePieceFreeCounterAt] = false;
		} else {
			whitePieceCheckList[whitePieceFreeCounterAt] = true;
		}
	} else {
		whitePieceCheckList[whitePieceFreeCounterAt] = true;
	}
	whitePieceFreeCounterAt++;
	
}

function checkBlackPieceFree($blackPiecePlace) {
	var blackPieceChecker = document.getElementById($blackPiecePlace).innerHTML;
	var blackPieceChecker2 = blackPieceChecker.split("");
	if(blackPieceChecker2[0] == "s") {
	  blackPieceCheckList[blackPieceFreeCounter] = false;
	} else {
	  blackPieceCheckList[blackPieceFreeCounter] = true;
	}
	blackPieceFreeCounter++;
	
}

function checkWhitePieceFree($whitePiecePlace) {
	var whitePieceChecker = document.getElementById($whitePiecePlace).innerHTML;
	var whitePieceChecker2 = whitePieceChecker.split("");
	if(whitePieceChecker2[0] == "b") {
	  whitePieceCheckList[whitePieceFreeCounter] = false;
	} else {
	  whitePieceCheckList[whitePieceFreeCounter] = true;
	}
	whitePieceFreeCounter++;
	
}


function checkPieceFreeFil($piecePlace){
	var pieceChecker;
	if ($piecePlace.split("").length > 1 && (lettersAndNumbers.indexOf($piecePlace.split("")[0]) < 8 &&
		lettersAndNumbers.indexOf($piecePlace.split("")[1]) > 7)) {
		pieceChecker = document.getElementById($piecePlace).innerHTML;
		if (pieceChecker) {
			pieceFreeCheckList[pieceFreeCounterFil] = false;
		} else {
			pieceFreeCheckList[pieceFreeCounterFil] = true;
		}
	} else {
		pieceFreeCheckList[pieceFreeCounterFil] = false;
	}
	pieceFreeCounterFil++;
}

function checkPieceFreeAt($piecePlace){
	var pieceChecker;
	if ($piecePlace) {
		pieceChecker = document.getElementById($piecePlace).innerHTML;
		if (pieceChecker) {
			pieceFreeCheckList[pieceFreeCounterAt] = false;
		} else {
			pieceFreeCheckList[pieceFreeCounterAt] = true;
		}
	} else {
		pieceFreeCheckList[pieceFreeCounterAt] = false;
	}
	pieceFreeCounterAt++;
}

function checkPieceFree($piecePlace){
	var pieceChecker = document.getElementById($piecePlace).innerHTML;
	if (pieceChecker) {
		pieceFreeCheckList[pieceFreeCounter] = false;
	} else {
		pieceFreeCheckList[pieceFreeCounter] = true;
	}
	pieceFreeCounter++;
}

function whiteTurn() {
	BblackTurn = false;
	BwhiteTurn = true;
	BwhiteTurn2 = true;
}

function blackTurn() {
    BwhiteTurn = false;
	BblackTurn = true;
	BblackTurn2 = true;
}

function checkWhiteFreeFil ($filDestination) { 
	var whiteCheckerAt;
	var whiteCheckerAt2;
	if ($filDestination.split("").length > 1 && (lettersAndNumbers.indexOf($filDestination.split("")[0]) < 8 &&
		lettersAndNumbers.indexOf($filDestination.split("")[1]) > 7)) {
		whiteCheckerAt = document.getElementById($filDestination).innerHTML;
		whiteCheckerAt2 = whiteCheckerAt.split("");
		if(whiteCheckerAt2[0] == "b") {
			whiteAtCheckList[whiteAtCheckCounter] = false;
		} else {
			whiteAtCheckList[whiteAtCheckCounter] = true;
		}
	} else {
		whiteAtCheckList[whiteAtCheckCounter] = false;
	}
	whiteAtCheckCounter++;
}

function checkBlackFreeFil ($filDestination) { 
	var blackCheckerAt;
	var blackCheckerAt2;
	if ($filDestination.split("").length > 1 && (lettersAndNumbers.indexOf($filDestination.split("")[0]) < 8 &&
		lettersAndNumbers.indexOf($filDestination.split("")[1]) > 7)) {
		blackCheckerAt = document.getElementById($filDestination).innerHTML;
		blackCheckerAt2 = blackCheckerAt.split("");
		if(blackCheckerAt2[0] == "s") {
			blackAtCheckList[blackAtCheckCounter] = false;
		} else {
			blackAtCheckList[blackAtCheckCounter] = true;
		}
	} else {
		blackAtCheckList[blackAtCheckCounter] = false;
	}
	blackAtCheckCounter++;
}

function checkWhiteFreeAt ($atDestination) { 
	var whiteCheckerAt;
	var whiteCheckerAt2;
	if ($atDestination) {
		whiteCheckerAt = document.getElementById($atDestination).innerHTML;
		whiteCheckerAt2 = whiteCheckerAt.split("");
		if(whiteCheckerAt2[0] == "b") {
			whiteAtCheckList[whiteAtCheckCounter] = false;
		} else {
			whiteAtCheckList[whiteAtCheckCounter] = true;
		}
	} else {
		whiteAtCheckList[whiteAtCheckCounter] = false;
	}
	whiteAtCheckCounter++;
}

function checkBlackFreeAt ($BatDestination) { 
	var blackCheckerAt;
	var blackCheckerAt2;
	if ($BatDestination) {
		blackCheckerAt = document.getElementById($BatDestination).innerHTML;
		blackCheckerAt2 = blackCheckerAt.split("");
		if(blackCheckerAt2[0] == "s") {
			blackAtCheckList[blackAtCheckCounter] = false;
		} else {
			blackAtCheckList[blackAtCheckCounter] = true;
		}
	} else {
		blackAtCheckList[blackAtCheckCounter] = false;
	}
	blackAtCheckCounter++;
}

function checkWhiteFreeKale($checkWhitePlace) {
	
	var whiteChecker1 = document.getElementById($checkWhitePlace).innerHTML;
	var whiteChecker2 = whiteChecker1.split("");
	if(whiteChecker2[0] == "b") {
	  whiteKaleCheckList[whiteKaleCheckCounter] = false;
	} else {
	  whiteKaleCheckList[whiteKaleCheckCounter] = true;
	}
	whiteKaleCheckCounter++;
}

function checkBlackFreeKale($checkBlackPlace) {
	
	var blackChecker1 = document.getElementById($checkBlackPlace).innerHTML;
	var blackChecker2 = blackChecker1.split("");
	if(blackChecker2[0] == "s") {
	  blackKaleCheckList[blackKaleCheckCounter] = false;
	} else {
	  blackKaleCheckList[blackKaleCheckCounter] = true;
	}
	blackKaleCheckCounter++;
}



function checkBlackFree(checkBlackPlace) {
	var blackChecker1 = document.getElementById(checkBlackPlace).innerHTML;
	var blackChecker2 = blackChecker1.split("");
	if(blackChecker2[0] == "s") {
	  blackFree = false;
	} else {
	  blackFree = true;
	}
}

function checkWhiteFree(checkWhitePlace) {
	var whiteChecker1 = document.getElementById(checkWhitePlace).innerHTML;
	var whiteChecker2 = whiteChecker1.split("");
	if(whiteChecker2[0] == "b") {
	  whiteFree = false;
	} else {
	  whiteFree = true;
	}
}
/*
function kaleTester(letter, number){
  
}
*/