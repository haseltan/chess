function write(writePlace, thing) {
  //console.log("write çalisiyor");
  document.getElementById(writePlace).innerHTML = thing;
  document.getElementById(writePlace + "img").src = thing + ".png";
   //document.getElementById(writePlace + "img").setAttribute("class", "c4img"); 
  moveClear();
  if(BwhiteTurn) {
    blackTurn();
  }else {
    whiteTurn();
  }
  document.getElementById(writePlace).onclick = function() {move(writePlace)};
  document.getElementById(oldPlace).onclick = "";
  document.getElementById(oldPlace).innerHTML = "";
  document.getElementById(oldPlace + "img").src = ""
  controlDidItBeAttackShah(writePlace, thing);

 if(BwhiteTurn && !shahMatBooleans.siyahShahCekti) {
	  beyazShahGuvendeMi();
  }
 
  if(BwhiteTurn && shahMatBooleans.siyahShahCekti) {
	  beyazShahMatOlduMu();
	    if (beyazShahMatOldu) {
	  document.getElementById("shah").innerHTML = "Beyaz mat oldu.";
	  endTheGame();
  }
  }
  
  if(BblackTurn && !shahMatBooleans.beyazShahCekti) {
	  siyahShahGuvendeMi();
  }
  
   if(BblackTurn && shahMatBooleans.beyazShahCekti) {
	  siyahShahMatOlduMu();
	   if (siyahShahMatOldu) {
	  document.getElementById("shah").innerHTML = "Siyah mat oldu.";
	  endTheGame();
  }
  }
 
 
}

function writeToConsol () {
	console.log("BwhiteTurn=" + BwhiteTurn);
	console.log("BblackTurn=" + BblackTurn);
	console.log("destination=" + destination);
	console.log("clickedThing=" + clickedThing);
	console.log("oldPlace=" + oldPlace);
	console.log("destinations=" + destinations);
	console.log("thisNumber=" + thisNumber);
	console.log("thisLetter=" + thisLetter);
	console.log("inBoard=" + inBoard);
	console.log("destinations2=" + destinations2);
	console.log("idHolder=" + idHolder);
	console.log("document.getElementById('a1').onclick=" + document.getElementById("a1").onclick);
	console.log("document.getElementById('a1').innerHTML=" + document.getElementById("a1").innerHTML);
	console.log("preDestinationArr=" + preDestinationArr);
	console.log("reseterCounter=" + reseterCounter);
	console.log("whiteFree=" + whiteFree);
	console.log("blackFree=" + blackFree);
	console.log("BwhiteTurn2=" + BwhiteTurn2);
	console.log("BblackTurn2=" + BblackTurn2);
	console.log("whiteKaleCheckList=" + whiteKaleCheckList);
	console.log("whiteKaleCheckCounter=" + whiteKaleCheckCounter);
	console.log("whiteAtCheckList=" + whiteAtCheckList);
	console.log("whiteAtCheckCounter=" + whiteAtCheckCounter);
	console.log("pieceFreeCheckList=" + pieceFreeCheckList);
	console.log("pieceFreeCounter=" + pieceFreeCounter);
	console.log("blackPieceCheckList=" + blackPieceCheckList);
	console.log("blackPieceFreeCounter=" + blackPieceFreeCounter);
	console.log("straightObstacleFreeList=" + straightObstacleFreeList);
}

function writeDestinationToConsol () {
	console.log("destinations" + destinations);
	console.log("destinations2" + destinations2);
}

