
//son olan kod
case "b.kale":
	  if(BwhiteTurn2) {
	    clickedThing = "b.kale";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
		console.log(preDestinationArr);
	    thisLetter = letters.indexOf(preDestinationArr[0]);
		for (i = 0; i < 8; i++) {
		  preDestinationArr[0] = letters[i];
		  destinations[i] = preDestinationArr.join('');
		  destinations2[i] = destinations[i]
		  checkWhiteFreeKale(destinations[i]);
		}
		if (whiteKaleCheckList[0]) {
	        document.getElementById(destinations2[0]).onclick = function() {write(destinations[0], clickedThing)};
		}
		if (whiteKaleCheckList[1]) {
	        document.getElementById(destinations2[1]).onclick = function() {write(destinations[1], clickedThing)};
		}
		
		if (whiteKaleCheckList[2]) {
	        document.getElementById(destinations2[2]).onclick = function() {write(destinations[2], clickedThing)};
		}
		if (whiteKaleCheckList[3]) {
	        document.getElementById(destinations2[3]).onclick = function() {write(destinations[3], clickedThing)};
		}
		if (whiteKaleCheckList[4]) {
	        document.getElementById(destinations2[4]).onclick = function() {write(destinations[4], clickedThing)};
		} 
		if (whiteKaleCheckList[5]) {
	        document.getElementById(destinations2[5]).onclick = function() {write(destinations[5], clickedThing)};
		}
		if (whiteKaleCheckList[6]) {
	        document.getElementById(destinations2[6]).onclick = function() {write(destinations[6], clickedThing)};
		}
		if (whiteKaleCheckList[7]) {
	        document.getElementById(destinations2[7]).onclick = function() {write(destinations[7], clickedThing)};
		} 
	    BwhiteTurn2 = false;
	  }
	  break;



//looplu kod
case "b.kale":
	  if(BwhiteTurn2) {
	    clickedThing = "b.kale";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
		console.log(preDestinationArr);
	    thisLetter = letters.indexOf(preDestinationArr[0]);
		var i = 3;
		for (i = 0; i < 8; i++) {
		  if (i == thisLetter) { continue; }
		  preDestinationArr[0] = letters[i];
		  destinations[i] = preDestinationArr.join('');
		  checkWhiteFree(destinations[i]);
	      if (whiteFree) {
	        document.getElementById(destinations[i]).onclick = function() {write(destinations[i], clickedThing)};
		  }
		  console.log(destinations[i]);
		  console.log(i);
	    }
	
		BwhiteTurn2 = false;
	  }
	  break;
	  
	  //teker teker kod
	  case "b.kale":
	  if(BwhiteTurn2) {
	    clickedThing = "b.kale";
	    idHolder = id;
	    oldPlace = id;
	    preDestinationArr = idHolder.split("");
	    thisLetter = letters.indexOf(preDestinationArr[0]);
		thisNumber = numbers.indexOf(preDestinationArr[1]);
		//for (i = 0; i < 8; i++) {
		  preDestinationArr[0] = letters[0];
		  destinations[0] = preDestinationArr.join('');
		  preDestinationArr[0] = letters[1];
		  destinations[1] = preDestinationArr.join('');
		  preDestinationArr[0] = letters[2];
		  destinations[2] = preDestinationArr.join('');
		  preDestinationArr[0] = letters[3];
		  destinations[3] = preDestinationArr.join('');
		  preDestinationArr[0] = letters[4];
		  destinations[4] = preDestinationArr.join('');
		  preDestinationArr[0] = letters[5];
		  destinations[5] = preDestinationArr.join('');
		  preDestinationArr[0] = letters[6];
		  destinations[6] = preDestinationArr.join('');
		  preDestinationArr[0] = letters[7];
		  destinations[7] = preDestinationArr.join('');
		 // preDestinationArr[0] = letters[8];
		//  destinations[8] = preDestinationArr.join('');
		checkWhiteFree(destinations[0]);
		if (whiteKaleCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = function() {write(destinations[0], clickedThing)};
		}
	    checkWhiteFree(destinations[1]);
		if (whiteKaleCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = function() {write(destinations[1], clickedThing)};
		}
		checkWhiteFree(destinations[2]);
		if (whiteKaleCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = function() {write(destinations[2], clickedThing)};
		}
		checkWhiteFree(destinations[3]);
		if (whiteKaleCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = function() {write(destinations[3], clickedThing)};
		}
		checkWhiteFree(destinations[4]);
		if (whiteKaleCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = function() {write(destinations[4], clickedThing)};
		} 
		checkWhiteFree(destinations[5]);
		if (whiteKaleCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = function() {write(destinations[5], clickedThing)};
		}
		checkWhiteFree(destinations[6]);
		if (whiteKaleCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = function() {write(destinations[6], clickedThing)};
		}
		checkWhiteFree(destinations[7]);
		if (whiteKaleCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = function() {write(destinations[7], clickedThing)};
		}
		//checkWhiteFree(destinations[8]);
		//if (whiteFree) {
	     //   document.getElementById(destinations[8]).onclick = function() {write(destinations[8], clickedThing)};
		//}
		BwhiteTurn2 = false;
	  }
	  break;