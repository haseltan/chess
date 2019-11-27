var reseterCounter;

function moveClear() {
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
	blackPieceFreeCounterAt = 0;
	whitePieceFreeCounterAt = 0;
	pieceFreeCounterAt = 0;
	switch (clickedThing) {
		case "b.kale":
		reseterCounter = 0;
		for (reseterCounter = 0; reseterCounter < 16; reseterCounter++) {
		  checkPieceFree(destinations[reseterCounter]);
		  checkBlackPieceFree(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!blackPieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!blackPieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!blackPieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!blackPieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!blackPieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!blackPieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!blackPieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!blackPieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinations[8]).onclick = "";
		} else if (!blackPieceCheckList[8]) {
			reBindingThePieces(destinations[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinations[9]).onclick = "";
		} else if (!blackPieceCheckList[9]) {
			reBindingThePieces(destinations[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinations[10]).onclick = "";
		} else if (!blackPieceCheckList[10]) {
			reBindingThePieces(destinations[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinations[11]).onclick = "";
		} else if (!blackPieceCheckList[11]) {
			reBindingThePieces(destinations[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinations[12]).onclick = "";
		} else if (!blackPieceCheckList[12]) {
			reBindingThePieces(destinations[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinations[13]).onclick = "";
		} else if (!blackPieceCheckList[13]) {
			reBindingThePieces(destinations[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinations[14]).onclick = "";
		} else if (!blackPieceCheckList[14]) {
			reBindingThePieces(destinations[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinations[15]).onclick = "";
		} else if (!blackPieceCheckList[15]) {
			reBindingThePieces(destinations[15]);
		}
		break;
		case "b.at":
		reseterCounter = 0;
		for (reseterCounter = 0; reseterCounter < 8; reseterCounter++) {
		  checkPieceFreeAt(destinations[reseterCounter]);
		  checkBlackPieceFreeAt(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		if (destinations[0]){
			if (pieceFreeCheckList[0]) {
				document.getElementById(destinations[0]).onclick = "";
			} else if (!blackPieceCheckList[0]) {
				reBindingThePieces(destinations[0]);
			}
		}
		if (destinations[1]){
			if (pieceFreeCheckList[1]) {
				document.getElementById(destinations[1]).onclick = "";
			} else if (!blackPieceCheckList[1]) {
				reBindingThePieces(destinations[1]);
			}
		}
		if (destinations[2]){
			if (pieceFreeCheckList[2]) {
				document.getElementById(destinations[2]).onclick = "";
			} else if (!blackPieceCheckList[2]) {
				reBindingThePieces(destinations[2]);
			}
		}
		if (destinations[3]){
			if (pieceFreeCheckList[3]) {
				document.getElementById(destinations[3]).onclick = "";
			} else if (!blackPieceCheckList[3]) {
				reBindingThePieces(destinations[3]);
			}
		}
		if (destinations[4]){
			if (pieceFreeCheckList[4]) {
				document.getElementById(destinations[4]).onclick = "";
			} else if (!blackPieceCheckList[4]) {
				reBindingThePieces(destinations[4]);
			}
		}
		if (destinations[5]){
			if (pieceFreeCheckList[5]) {
				document.getElementById(destinations[5]).onclick = "";
			} else if (!blackPieceCheckList[5]) {
				reBindingThePieces(destinations[5]);
			}
		}
		if (destinations[6]){
			if (pieceFreeCheckList[6]) {
				document.getElementById(destinations[6]).onclick = "";
			} else if (!blackPieceCheckList[6]) {
				reBindingThePieces(destinations[6]);
			}
		}
		if (destinations[7]){
			if (pieceFreeCheckList[7]) {
				document.getElementById(destinations[7]).onclick = "";
			} else if (!blackPieceCheckList[7]) {
				reBindingThePieces(destinations[7]);
			}
		}
	    break;
	    case "b.fil":
		for (reseterCounter = 0; reseterCounter < 27; reseterCounter++) {
		  checkPieceFreeFil(destinations[reseterCounter]);
		  checkBlackPieceFreeFil(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!blackPieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!blackPieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!blackPieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!blackPieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!blackPieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!blackPieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!blackPieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!blackPieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinations[8]).onclick = "";
		} else if (!blackPieceCheckList[8]) {
			reBindingThePieces(destinations[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinations[9]).onclick = "";
		} else if (!blackPieceCheckList[9]) {
			reBindingThePieces(destinations[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinations[10]).onclick = "";
		} else if (!blackPieceCheckList[10]) {
			reBindingThePieces(destinations[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinations[11]).onclick = "";
		} else if (!blackPieceCheckList[11]) {
			reBindingThePieces(destinations[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinations[12]).onclick = "";
		} else if (!blackPieceCheckList[12]) {
			reBindingThePieces(destinations[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinations[13]).onclick = "";
		} else if (!blackPieceCheckList[13]) {
			reBindingThePieces(destinations[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinations[14]).onclick = "";
		} else if (!blackPieceCheckList[14]) {
			reBindingThePieces(destinations[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinations[15]).onclick = "";
		} else if (!blackPieceCheckList[15]) {
			reBindingThePieces(destinations[15]);
		}
		if (pieceFreeCheckList[16]) {
	        document.getElementById(destinations[16]).onclick = "";
		} else if (!blackPieceCheckList[16]) {
			reBindingThePieces(destinations[16]);
		}
		if (pieceFreeCheckList[17]) {
	        document.getElementById(destinations[17]).onclick = "";
		} else if (!blackPieceCheckList[17]) {
			reBindingThePieces(destinations[17]);
		}
		if (pieceFreeCheckList[18]) {
	        document.getElementById(destinations[18]).onclick = "";
		} else if (!blackPieceCheckList[18]) {
			reBindingThePieces(destinations[18]);
		}
		if (pieceFreeCheckList[19]) {
	        document.getElementById(destinations[19]).onclick = "";
		} else if (!blackPieceCheckList[19]) {
			reBindingThePieces(destinations[19]);
		}
		if (pieceFreeCheckList[20]) {
	        document.getElementById(destinations[20]).onclick = "";
		} else if (!blackPieceCheckList[20]) {
			reBindingThePieces(destinations[20]);
		}
		if (pieceFreeCheckList[21]) {
	        document.getElementById(destinations[21]).onclick = "";
		} else if (!blackPieceCheckList[21]) {
			reBindingThePieces(destinations[21]);
		}
		if (pieceFreeCheckList[22]) {
	        document.getElementById(destinations[22]).onclick = "";
		} else if (!blackPieceCheckList[22]) {
			reBindingThePieces(destinations[22]);
		}
		if (pieceFreeCheckList[23]) {
	        document.getElementById(destinations[23]).onclick = "";
		} else if (!blackPieceCheckList[23]) {
			reBindingThePieces(destinations[23]);
		}
		if (pieceFreeCheckList[24]) {
	        document.getElementById(destinations[24]).onclick = "";
		} else if (!blackPieceCheckList[24]) {
			reBindingThePieces(destinations[24]);
		}
		if (pieceFreeCheckList[25]) {
	        document.getElementById(destinations[25]).onclick = "";
		} else if (!blackPieceCheckList[25]) {
			reBindingThePieces(destinations[25]);
		}
		if (pieceFreeCheckList[26]) {
	        document.getElementById(destinations[26]).onclick = "";
		} else if (!blackPieceCheckList[26]) {
			reBindingThePieces(destinations[26]);
		}
	    break;
	    case "b.shah":
		for (reseterCounter = 0; reseterCounter < 8; reseterCounter++) {
		  checkPieceFreeFil(destinations[reseterCounter]);
		  checkBlackPieceFreeFil(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!blackPieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!blackPieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!blackPieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!blackPieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!blackPieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!blackPieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!blackPieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!blackPieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
	    break;
	    case "b.vezir":
		reseterCounter = 0;
		for (reseterCounter = 0; reseterCounter < 16; reseterCounter++) {
		  checkPieceFree(destinations[reseterCounter]);
		  checkBlackPieceFree(destinations[reseterCounter]);
		}
		/*console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		*/
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!blackPieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!blackPieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!blackPieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!blackPieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!blackPieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!blackPieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!blackPieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!blackPieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinations[8]).onclick = "";
		} else if (!blackPieceCheckList[8]) {
			reBindingThePieces(destinations[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinations[9]).onclick = "";
		} else if (!blackPieceCheckList[9]) {
			reBindingThePieces(destinations[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinations[10]).onclick = "";
		} else if (!blackPieceCheckList[10]) {
			reBindingThePieces(destinations[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinations[11]).onclick = "";
		} else if (!blackPieceCheckList[11]) {
			reBindingThePieces(destinations[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinations[12]).onclick = "";
		} else if (!blackPieceCheckList[12]) {
			reBindingThePieces(destinations[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinations[13]).onclick = "";
		} else if (!blackPieceCheckList[13]) {
			reBindingThePieces(destinations[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinations[14]).onclick = "";
		} else if (!blackPieceCheckList[14]) {
			reBindingThePieces(destinations[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinations[15]).onclick = "";
		} else if (!blackPieceCheckList[15]) {
			reBindingThePieces(destinations[15]);
		}
		pieceFreeCheckList = [];
		pieceFreeCounter = 0;
		pieceFreeCounterFil = 0;
		blackPieceCheckList = [];
		blackPieceFreeCounter = 0;
		blackPieceFreeCounterFil = 0;
		for (reseterCounter = 0; reseterCounter < 27; reseterCounter++) {
		  checkPieceFreeFil(destinationsVezir[reseterCounter]);
		  checkBlackPieceFreeFil(destinationsVezir[reseterCounter]);
		}
		/*console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("blackPieceCheckList:");
		console.log(blackPieceCheckList);
		*/
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinationsVezir[0]).onclick = "";
		} else if (!blackPieceCheckList[0]) {
			reBindingThePieces(destinationsVezir[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinationsVezir[1]).onclick = "";
		} else if (!blackPieceCheckList[1]) {
			reBindingThePieces(destinationsVezir[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinationsVezir[2]).onclick = "";
		} else if (!blackPieceCheckList[2]) {
			reBindingThePieces(destinationsVezir[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinationsVezir[3]).onclick = "";
		} else if (!blackPieceCheckList[3]) {
			reBindingThePieces(destinationsVezir[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinationsVezir[4]).onclick = "";
		} else if (!blackPieceCheckList[4]) {
			reBindingThePieces(destinationsVezir[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinationsVezir[5]).onclick = "";
		} else if (!blackPieceCheckList[5]) {
			reBindingThePieces(destinationsVezir[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinationsVezir[6]).onclick = "";
		} else if (!blackPieceCheckList[6]) {
			reBindingThePieces(destinationsVezir[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinationsVezir[7]).onclick = "";
		} else if (!blackPieceCheckList[7]) {
			reBindingThePieces(destinationsVezir[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinationsVezir[8]).onclick = "";
		} else if (!blackPieceCheckList[8]) {
			reBindingThePieces(destinationsVezir[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinationsVezir[9]).onclick = "";
		} else if (!blackPieceCheckList[9]) {
			reBindingThePieces(destinationsVezir[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinationsVezir[10]).onclick = "";
		} else if (!blackPieceCheckList[10]) {
			reBindingThePieces(destinationsVezir[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinationsVezir[11]).onclick = "";
		} else if (!blackPieceCheckList[11]) {
			reBindingThePieces(destinationsVezir[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinationsVezir[12]).onclick = "";
		} else if (!blackPieceCheckList[12]) {
			reBindingThePieces(destinationsVezir[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinationsVezir[13]).onclick = "";
		} else if (!blackPieceCheckList[13]) {
			reBindingThePieces(destinationsVezir[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinationsVezir[14]).onclick = "";
		} else if (!blackPieceCheckList[14]) {
			reBindingThePieces(destinationsVezir[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinationsVezir[15]).onclick = "";
		} else if (!blackPieceCheckList[15]) {
			reBindingThePieces(destinationsVezir[15]);
		}
		if (pieceFreeCheckList[16]) {
	        document.getElementById(destinationsVezir[16]).onclick = "";
		} else if (!blackPieceCheckList[16]) {
			reBindingThePieces(destinationsVezir[16]);
		}
		if (pieceFreeCheckList[17]) {
	        document.getElementById(destinationsVezir[17]).onclick = "";
		} else if (!blackPieceCheckList[17]) {
			reBindingThePieces(destinationsVezir[17]);
		}
		if (pieceFreeCheckList[18]) {
	        document.getElementById(destinationsVezir[18]).onclick = "";
		} else if (!blackPieceCheckList[18]) {
			reBindingThePieces(destinationsVezir[18]);
		}
		if (pieceFreeCheckList[19]) {
	        document.getElementById(destinationsVezir[19]).onclick = "";
		} else if (!blackPieceCheckList[19]) {
			reBindingThePieces(destinationsVezir[19]);
		}
		if (pieceFreeCheckList[20]) {
	        document.getElementById(destinationsVezir[20]).onclick = "";
		} else if (!blackPieceCheckList[20]) {
			reBindingThePieces(destinationsVezir[20]);
		}
		if (pieceFreeCheckList[21]) {
	        document.getElementById(destinationsVezir[21]).onclick = "";
		} else if (!blackPieceCheckList[21]) {
			reBindingThePieces(destinationsVezir[21]);
		}
		if (pieceFreeCheckList[22]) {
	        document.getElementById(destinationsVezir[22]).onclick = "";
		} else if (!blackPieceCheckList[22]) {
			reBindingThePieces(destinationsVezir[22]);
		}
		if (pieceFreeCheckList[23]) {
	        document.getElementById(destinationsVezir[23]).onclick = "";
		} else if (!blackPieceCheckList[23]) {
			reBindingThePieces(destinationsVezir[23]);
		}
		if (pieceFreeCheckList[24]) {
	        document.getElementById(destinationsVezir[24]).onclick = "";
		} else if (!blackPieceCheckList[24]) {
			reBindingThePieces(destinationsVezir[24]);
		}
		if (pieceFreeCheckList[25]) {
	        document.getElementById(destinationsVezir[25]).onclick = "";
		} else if (!blackPieceCheckList[25]) {
			reBindingThePieces(destinationsVezir[25]);
		}
		if (pieceFreeCheckList[26]) {
	        document.getElementById(destinationsVezir[26]).onclick = "";
		} else if (!blackPieceCheckList[26]) {
			reBindingThePieces(destinationsVezir[26]);
		}
	    break;
        case "b.piyon":
		for (reseterCounter = 0; reseterCounter < 4; reseterCounter++) {
		  checkPieceFreeFil(destinations[reseterCounter]);
		  checkBlackPieceFreeFil(destinations[reseterCounter]);
		}
		//console.log("pieceFreeCheckList:");
		//console.log(pieceFreeCheckList);
		//console.log("blackPieceCheckList:");
		//console.log(blackPieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!blackPieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!blackPieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!blackPieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!blackPieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
        break;
	    case "s.kale":
		reseterCounter = 0;
		for (reseterCounter = 0; reseterCounter < 16; reseterCounter++) {
		  checkPieceFree(destinations[reseterCounter]);
		  checkWhitePieceFree(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!whitePieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!whitePieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!whitePieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!whitePieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!whitePieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!whitePieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!whitePieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!whitePieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinations[8]).onclick = "";
		} else if (!whitePieceCheckList[8]) {
			reBindingThePieces(destinations[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinations[9]).onclick = "";
		} else if (!whitePieceCheckList[9]) {
			reBindingThePieces(destinations[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinations[10]).onclick = "";
		} else if (!whitePieceCheckList[10]) {
			reBindingThePieces(destinations[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinations[11]).onclick = "";
		} else if (!whitePieceCheckList[11]) {
			reBindingThePieces(destinations[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinations[12]).onclick = "";
		} else if (!whitePieceCheckList[12]) {
			reBindingThePieces(destinations[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinations[13]).onclick = "";
		} else if (!whitePieceCheckList[13]) {
			reBindingThePieces(destinations[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinations[14]).onclick = "";
		} else if (!whitePieceCheckList[14]) {
			reBindingThePieces(destinations[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinations[15]).onclick = "";
		} else if (!whitePieceCheckList[15]) {
			reBindingThePieces(destinations[15]);
		}
	    break;
     	case "s.at":
		reseterCounter = 0;
		for (reseterCounter = 0; reseterCounter < 8; reseterCounter++) {
		  checkPieceFreeAt(destinations[reseterCounter]);
		  checkWhitePieceFreeAt(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		if (destinations[0]){
			if (pieceFreeCheckList[0]) {
				document.getElementById(destinations[0]).onclick = "";
			} else if (!whitePieceCheckList[0]) {
				reBindingThePieces(destinations[0]);
			}
		}
		if (destinations[1]){
			if (pieceFreeCheckList[1]) {
				document.getElementById(destinations[1]).onclick = "";
			} else if (!whitePieceCheckList[1]) {
				reBindingThePieces(destinations[1]);
			}
		}
		if (destinations[2]){
			if (pieceFreeCheckList[2]) {
				document.getElementById(destinations[2]).onclick = "";
			} else if (!whitePieceCheckList[2]) {
				reBindingThePieces(destinations[2]);
			}
		}
		if (destinations[3]){
			if (pieceFreeCheckList[3]) {
				document.getElementById(destinations[3]).onclick = "";
			} else if (!whitePieceCheckList[3]) {
				reBindingThePieces(destinations[3]);
			}
		}
		if (destinations[4]){
			if (pieceFreeCheckList[4]) {
				document.getElementById(destinations[4]).onclick = "";
			} else if (!whitePieceCheckList[4]) {
				reBindingThePieces(destinations[4]);
			}
		}
		if (destinations[5]){
			if (pieceFreeCheckList[5]) {
				document.getElementById(destinations[5]).onclick = "";
			} else if (!whitePieceCheckList[5]) {
				reBindingThePieces(destinations[5]);
			}
		}
		if (destinations[6]){
			if (pieceFreeCheckList[6]) {
				document.getElementById(destinations[6]).onclick = "";
			} else if (!whitePieceCheckList[6]) {
				reBindingThePieces(destinations[6]);
			}
		}
		if (destinations[7]){
			if (pieceFreeCheckList[7]) {
				document.getElementById(destinations[7]).onclick = "";
			} else if (!whitePieceCheckList[7]) {
				reBindingThePieces(destinations[7]);
			}
		}
        break;
		case "s.fil":
		for (reseterCounter = 0; reseterCounter < 27; reseterCounter++) {
		  checkPieceFreeFil(destinations[reseterCounter]);
		  checkWhitePieceFreeFil(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!whitePieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!whitePieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!whitePieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!whitePieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!whitePieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!whitePieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!whitePieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!whitePieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinations[8]).onclick = "";
		} else if (!whitePieceCheckList[8]) {
			reBindingThePieces(destinations[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinations[9]).onclick = "";
		} else if (!whitePieceCheckList[9]) {
			reBindingThePieces(destinations[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinations[10]).onclick = "";
		} else if (!whitePieceCheckList[10]) {
			reBindingThePieces(destinations[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinations[11]).onclick = "";
		} else if (!whitePieceCheckList[11]) {
			reBindingThePieces(destinations[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinations[12]).onclick = "";
		} else if (!whitePieceCheckList[12]) {
			reBindingThePieces(destinations[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinations[13]).onclick = "";
		} else if (!whitePieceCheckList[13]) {
			reBindingThePieces(destinations[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinations[14]).onclick = "";
		} else if (!whitePieceCheckList[14]) {
			reBindingThePieces(destinations[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinations[15]).onclick = "";
		} else if (!whitePieceCheckList[15]) {
			reBindingThePieces(destinations[15]);
		}
		if (pieceFreeCheckList[16]) {
	        document.getElementById(destinations[16]).onclick = "";
		} else if (!whitePieceCheckList[16]) {
			reBindingThePieces(destinations[16]);
		}
		if (pieceFreeCheckList[17]) {
	        document.getElementById(destinations[17]).onclick = "";
		} else if (!whitePieceCheckList[17]) {
			reBindingThePieces(destinations[17]);
		}
		if (pieceFreeCheckList[18]) {
	        document.getElementById(destinations[18]).onclick = "";
		} else if (!whitePieceCheckList[18]) {
			reBindingThePieces(destinations[18]);
		}
		if (pieceFreeCheckList[19]) {
	        document.getElementById(destinations[19]).onclick = "";
		} else if (!whitePieceCheckList[19]) {
			reBindingThePieces(destinations[19]);
		}
		if (pieceFreeCheckList[20]) {
	        document.getElementById(destinations[20]).onclick = "";
		} else if (!whitePieceCheckList[20]) {
			reBindingThePieces(destinations[20]);
		}
		if (pieceFreeCheckList[21]) {
	        document.getElementById(destinations[21]).onclick = "";
		} else if (!whitePieceCheckList[21]) {
			reBindingThePieces(destinations[21]);
		}
		if (pieceFreeCheckList[22]) {
	        document.getElementById(destinations[22]).onclick = "";
		} else if (!whitePieceCheckList[22]) {
			reBindingThePieces(destinations[22]);
		}
		if (pieceFreeCheckList[23]) {
	        document.getElementById(destinations[23]).onclick = "";
		} else if (!whitePieceCheckList[23]) {
			reBindingThePieces(destinations[23]);
		}
		if (pieceFreeCheckList[24]) {
	        document.getElementById(destinations[24]).onclick = "";
		} else if (!whitePieceCheckList[24]) {
			reBindingThePieces(destinations[24]);
		}
		if (pieceFreeCheckList[25]) {
	        document.getElementById(destinations[25]).onclick = "";
		} else if (!whitePieceCheckList[25]) {
			reBindingThePieces(destinations[25]);
		}
		if (pieceFreeCheckList[26]) {
	        document.getElementById(destinations[26]).onclick = "";
		} else if (!whitePieceCheckList[26]) {
			reBindingThePieces(destinations[26]);
		}
		break;
		case "s.shah":
		for (reseterCounter = 0; reseterCounter < 8; reseterCounter++) {
		  checkPieceFreeFil(destinations[reseterCounter]);
		  checkWhitePieceFreeFil(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!whitePieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!whitePieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!whitePieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!whitePieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!whitePieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!whitePieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!whitePieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!whitePieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
	    break;
	    case "s.vezir":
		reseterCounter = 0;
		for (reseterCounter = 0; reseterCounter < 16; reseterCounter++) {
		  checkPieceFree(destinations[reseterCounter]);
		  checkWhitePieceFree(destinations[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!whitePieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!whitePieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!whitePieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!whitePieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinations[4]).onclick = "";
		} else if (!whitePieceCheckList[4]) {
			reBindingThePieces(destinations[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinations[5]).onclick = "";
		} else if (!whitePieceCheckList[5]) {
			reBindingThePieces(destinations[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinations[6]).onclick = "";
		} else if (!whitePieceCheckList[6]) {
			reBindingThePieces(destinations[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinations[7]).onclick = "";
		} else if (!whitePieceCheckList[7]) {
			reBindingThePieces(destinations[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinations[8]).onclick = "";
		} else if (!whitePieceCheckList[8]) {
			reBindingThePieces(destinations[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinations[9]).onclick = "";
		} else if (!whitePieceCheckList[9]) {
			reBindingThePieces(destinations[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinations[10]).onclick = "";
		} else if (!whitePieceCheckList[10]) {
			reBindingThePieces(destinations[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinations[11]).onclick = "";
		} else if (!whitePieceCheckList[11]) {
			reBindingThePieces(destinations[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinations[12]).onclick = "";
		} else if (!whitePieceCheckList[12]) {
			reBindingThePieces(destinations[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinations[13]).onclick = "";
		} else if (!whitePieceCheckList[13]) {
			reBindingThePieces(destinations[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinations[14]).onclick = "";
		} else if (!whitePieceCheckList[14]) {
			reBindingThePieces(destinations[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinations[15]).onclick = "";
		} else if (!whitePieceCheckList[15]) {
			reBindingThePieces(destinations[15]);
		}
		pieceFreeCheckList = [];
		pieceFreeCounter = 0;
		pieceFreeCounterFil = 0;
		blackPieceCheckList = [];
		blackPieceFreeCounter = 0;
		blackPieceFreeCounterFil = 0;
		whitePieceCheckList = [];
		whitePieceFreeCounter = 0;
		whitePieceFreeCounterFil = 0;
		for (reseterCounter = 0; reseterCounter < 27; reseterCounter++) {
		  checkPieceFreeFil(destinationsVezir[reseterCounter]);
		  checkWhitePieceFreeFil(destinationsVezir[reseterCounter]);
		}
		console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinationsVezir[0]).onclick = "";
		} else if (!whitePieceCheckList[0]) {
			reBindingThePieces(destinationsVezir[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinationsVezir[1]).onclick = "";
		} else if (!whitePieceCheckList[1]) {
			reBindingThePieces(destinationsVezir[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinationsVezir[2]).onclick = "";
		} else if (!whitePieceCheckList[2]) {
			reBindingThePieces(destinationsVezir[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinationsVezir[3]).onclick = "";
		} else if (!whitePieceCheckList[3]) {
			reBindingThePieces(destinationsVezir[3]);
		}
		if (pieceFreeCheckList[4]) {
	        document.getElementById(destinationsVezir[4]).onclick = "";
		} else if (!whitePieceCheckList[4]) {
			reBindingThePieces(destinationsVezir[4]);
		}
		if (pieceFreeCheckList[5]) {
	        document.getElementById(destinationsVezir[5]).onclick = "";
		} else if (!whitePieceCheckList[5]) {
			reBindingThePieces(destinationsVezir[5]);
		}
		if (pieceFreeCheckList[6]) {
	        document.getElementById(destinationsVezir[6]).onclick = "";
		} else if (!whitePieceCheckList[6]) {
			reBindingThePieces(destinationsVezir[6]);
		}
		if (pieceFreeCheckList[7]) {
	        document.getElementById(destinationsVezir[7]).onclick = "";
		} else if (!whitePieceCheckList[7]) {
			reBindingThePieces(destinationsVezir[7]);
		}
		if (pieceFreeCheckList[8]) {
	        document.getElementById(destinationsVezir[8]).onclick = "";
		} else if (!whitePieceCheckList[8]) {
			reBindingThePieces(destinationsVezir[8]);
		}
		if (pieceFreeCheckList[9]) {
	        document.getElementById(destinationsVezir[9]).onclick = "";
		} else if (!whitePieceCheckList[9]) {
			reBindingThePieces(destinationsVezir[9]);
		}
		if (pieceFreeCheckList[10]) {
	        document.getElementById(destinationsVezir[10]).onclick = "";
		} else if (!whitePieceCheckList[10]) {
			reBindingThePieces(destinationsVezir[10]);
		}
		if (pieceFreeCheckList[11]) {
	        document.getElementById(destinationsVezir[11]).onclick = "";
		} else if (!whitePieceCheckList[11]) {
			reBindingThePieces(destinationsVezir[11]);
		}
		if (pieceFreeCheckList[12]) {
	        document.getElementById(destinationsVezir[12]).onclick = "";
		} else if (!whitePieceCheckList[12]) {
			reBindingThePieces(destinationsVezir[12]);
		}
		if (pieceFreeCheckList[13]) {
	        document.getElementById(destinationsVezir[13]).onclick = "";
		} else if (!whitePieceCheckList[13]) {
			reBindingThePieces(destinationsVezir[13]);
		}
		if (pieceFreeCheckList[14]) {
	        document.getElementById(destinationsVezir[14]).onclick = "";
		} else if (!whitePieceCheckList[14]) {
			reBindingThePieces(destinationsVezir[14]);
		}
		if (pieceFreeCheckList[15]) {
	        document.getElementById(destinationsVezir[15]).onclick = "";
		} else if (!whitePieceCheckList[15]) {
			reBindingThePieces(destinationsVezir[15]);
		}
		if (pieceFreeCheckList[16]) {
	        document.getElementById(destinationsVezir[16]).onclick = "";
		} else if (!whitePieceCheckList[16]) {
			reBindingThePieces(destinationsVezir[16]);
		}
		if (pieceFreeCheckList[17]) {
	        document.getElementById(destinationsVezir[17]).onclick = "";
		} else if (!whitePieceCheckList[17]) {
			reBindingThePieces(destinationsVezir[17]);
		}
		if (pieceFreeCheckList[18]) {
	        document.getElementById(destinationsVezir[18]).onclick = "";
		} else if (!whitePieceCheckList[18]) {
			reBindingThePieces(destinationsVezir[18]);
		}
		if (pieceFreeCheckList[19]) {
	        document.getElementById(destinationsVezir[19]).onclick = "";
		} else if (!whitePieceCheckList[19]) {
			reBindingThePieces(destinationsVezir[19]);
		}
		if (pieceFreeCheckList[20]) {
	        document.getElementById(destinationsVezir[20]).onclick = "";
		} else if (!whitePieceCheckList[20]) {
			reBindingThePieces(destinationsVezir[20]);
		}
		if (pieceFreeCheckList[21]) {
	        document.getElementById(destinationsVezir[21]).onclick = "";
		} else if (!whitePieceCheckList[21]) {
			reBindingThePieces(destinationsVezir[21]);
		}
		if (pieceFreeCheckList[22]) {
	        document.getElementById(destinationsVezir[22]).onclick = "";
		} else if (!whitePieceCheckList[22]) {
			reBindingThePieces(destinationsVezir[22]);
		}
		if (pieceFreeCheckList[23]) {
	        document.getElementById(destinationsVezir[23]).onclick = "";
		} else if (!whitePieceCheckList[23]) {
			reBindingThePieces(destinationsVezir[23]);
		}
		if (pieceFreeCheckList[24]) {
	        document.getElementById(destinationsVezir[24]).onclick = "";
		} else if (!whitePieceCheckList[24]) {
			reBindingThePieces(destinationsVezir[24]);
		}
		if (pieceFreeCheckList[25]) {
	        document.getElementById(destinationsVezir[25]).onclick = "";
		} else if (!whitePieceCheckList[25]) {
			reBindingThePieces(destinationsVezir[25]);
		}
		if (pieceFreeCheckList[26]) {
	        document.getElementById(destinationsVezir[26]).onclick = "";
		} else if (!whitePieceCheckList[26]) {
			reBindingThePieces(destinationsVezir[26]);
		}
	    break;
		case "s.piyon":
		for (reseterCounter = 0; reseterCounter < 4; reseterCounter++) {
		  checkPieceFreeFil(destinations[reseterCounter]);
		  checkWhitePieceFreeFil(destinations[reseterCounter]);
		}
		/*console.log("pieceFreeCheckList:");
		console.log(pieceFreeCheckList);
		console.log("whitePieceCheckList:");
		console.log(whitePieceCheckList);
		*/
		if (pieceFreeCheckList[0]) {
	        document.getElementById(destinations[0]).onclick = "";
		} else if (!whitePieceCheckList[0]) {
			reBindingThePieces(destinations[0]);
		}
		if (pieceFreeCheckList[1]) {
	        document.getElementById(destinations[1]).onclick = "";
		} else if (!whitePieceCheckList[1]) {
			reBindingThePieces(destinations[1]);
		}
		if (pieceFreeCheckList[2]) {
	        document.getElementById(destinations[2]).onclick = "";
		} else if (!whitePieceCheckList[2]) {
			reBindingThePieces(destinations[2]);
		}
		if (pieceFreeCheckList[3]) {
	        document.getElementById(destinations[3]).onclick = "";
		} else if (!whitePieceCheckList[3]) {
			reBindingThePieces(destinations[3]);
		}
		break;
	}
	realReBinding();
}