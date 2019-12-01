

function siyahShahGuvendeMi() {
	var t = kareler.length;
	i4 = 0;
	
			
	
	
	
	
	for(i4 = 0; i4 < t; i4++) {
		console.log("Hey siyah shah");
		console.log(kareler[i4]);
		if (document.getElementById(kareler[i4]).innerHTML == "s.shah") {
			console.log(kareler[i4]);
			console.log(document.getElementById(kareler[i4]).innerHTML);
					//üst ve alt düz
			placeDeneme = kareler[i4].split("");
			var i = lettersAndNumbers.indexOf(placeDeneme[0]);
			i++;
			if(i < 8) {
				for(i; i < 8; i++) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.kale") {
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "b.kale";
								document.getElementById("shah").innerHTML = "Beyaz kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				}
			}
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[0]);
			i--;
			if(i >= 0) {
				for(i; i >= 0; i--) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.kale") {
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "b.kale";
								document.getElementById("shah").innerHTML = "Beyaz kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				}
			}
			//sağ ve sol düz
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i++;
			if(i < 16) {
				for(i; i < 16; i++) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.kale") {
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "b.kale";
								document.getElementById("shah").innerHTML = "Beyaz kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				}
			}
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i--;
			if(i >= 8) {
				for(i; i >= 8; i--) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.kale") {
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "b.kale";
								document.getElementById("shah").innerHTML = "Beyaz kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				}
			}
			
			
			
			//üst sağ
			placeDeneme = kareler[i4].split("");
			var i = lettersAndNumbers.indexOf(placeDeneme[0]);
			var i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
			i++;
			i2++;
			if(i < 8) {
				for(i; i < 8; i++) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDeneme[1] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							i2++;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.fil") {
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "b.fil";
								document.getElementById("shah").innerHTML = "Beyaz fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				i2++;
				}
			}
			
			//alt sol
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[0]);
			i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
			i--;
			i2--;
			if(i >= 0) {
				for(i; i >= 0; i--) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDeneme[1] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							i2--;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.fil") {
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "b.fil";
								document.getElementById("shah").innerHTML = "Beyaz fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				i2--;
				}
			}
			//sağ aşağı
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i++;
			i2 = lettersAndNumbers.indexOf(placeDeneme[0]);
			i2--;
			if(i < 16) {
				for(i; i < 16; i++) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDeneme[0] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							i2--;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.fil") {
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "b.fil";
								document.getElementById("shah").innerHTML = "Beyaz fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				i2--;
				}
			}
			//sol üst
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i2 = lettersAndNumbers.indexOf(placeDeneme[0]);
			i--;
			i2++;
			if(i >= 8) {
				for(i; i >= 8; i--) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDeneme[0] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
							i2++;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "b.fil") {
							console.log(placeDenemeJoin);
							console.log(document.getElementById(placeDenemeJoin).innerHTML);
							itsSafeBlackShahDestination = false;
							console.log("");
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "b.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "b.vezir";
								document.getElementById("shah").innerHTML = "Beyaz vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "b.fil";
								document.getElementById("shah").innerHTML = "Beyaz fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.beyazShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeBlackShahDestination = true;
							break;
						}
					}
				i2++;
				}
			}
			
			
			}
		
	
	}
		
}

function beyazShahGuvendeMi() {
	var t = kareler.length;
	i4 = 0;
	
	
	
	
	
	for(i4; i4 < t; i4++) {
		if (document.getElementById(kareler[i4]).innerHTML == "b.shah") {
					//üst ve alt düz
			placeDeneme = kareler[i4].split("");
			var i = lettersAndNumbers.indexOf(placeDeneme[0]);
			i++;
			if(i < 8) {
				for(i; i < 8; i++) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.kale") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "s.kale";
								document.getElementById("shah").innerHTML = "Siyah kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				}
			}
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[0]);
			i--;
			if(i >= 0) {
				for(i; i >= 0; i--) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.kale") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "s.kale";
								document.getElementById("shah").innerHTML = "Siyah kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				}
			}
			//sağ ve sol düz
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i++;
			if(i < 16) {
				for(i; i < 16; i++) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.kale") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "s.kale";
								document.getElementById("shah").innerHTML = "Siyah kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				}
			}
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i--;
			if(i >= 8) {
				for(i; i >= 8; i--) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.kale") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.kale"){
								shahCekmeDurumuBilgileri.pieceName = "s.kale";
								document.getElementById("shah").innerHTML = "Siyah kale shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				}
			}
			
			
			
			//üst sağ
			placeDeneme = kareler[i4].split("");
			var i = lettersAndNumbers.indexOf(placeDeneme[0]);
			var i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
			i++;
			i2++;
			if(i < 8) {
				for(i; i < 8; i++) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDeneme[1] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							i2++;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.fil") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "s.fil";
								document.getElementById("shah").innerHTML = "Siyah fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				i2++;
				}
			}
			
			//alt sol
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[0]);
			i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
			i--;
			i2--;
			if(i >= 0) {
				for(i; i >= 0; i--) {
					placeDeneme[0] = lettersAndNumbers[i];
					placeDeneme[1] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							i2--;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.fil") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "s.fil";
								document.getElementById("shah").innerHTML = "Siyah fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				i2--;
				}
			}
			//sağ aşağı
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i++;
			i2 = lettersAndNumbers.indexOf(placeDeneme[0]);
			i2--;
			if(i < 16) {
				for(i; i < 16; i++) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDeneme[0] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							i2--;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.fil") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "s.fil";
								document.getElementById("shah").innerHTML = "Siyah fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				i2--;
				}
			}
			//sol üst
			placeDeneme = kareler[i4].split("");
			i = lettersAndNumbers.indexOf(placeDeneme[1]);
			i2 = lettersAndNumbers.indexOf(placeDeneme[0]);
			i--;
			i2++;
			if(i >= 8) {
				for(i; i >= 8; i--) {
					placeDeneme[1] = lettersAndNumbers[i];
					placeDeneme[0] = lettersAndNumbers[i2];
					placeDenemeJoin = placeDeneme.join("");
					if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML) {
						if(document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
							i2++;
							continue;
						}
						if(document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" || document.getElementById(placeDenemeJoin).innerHTML == "s.fil") {
							itsSafeWhiteShahDestination = false;
							shahCekmeDurumuBilgileri.shahKonumu = kareler[i4];
							if (document.getElementById(placeDenemeJoin).innerHTML == "s.vezir" ) {
								shahCekmeDurumuBilgileri.pieceName = "s.vezir";
								document.getElementById("shah").innerHTML = "Siyah vezir shah cekti!";
							} else if (document.getElementById(placeDenemeJoin).innerHTML == "b.fil"){
								shahCekmeDurumuBilgileri.pieceName = "s.fil";
								document.getElementById("shah").innerHTML = "Siyah fil shah cekti!";
							}
							shahCekmeDurumuBilgileri.piecePlace = placeDenemeJoin;
							shahMatBooleans.siyahShahCekti = true;
							return 5;
							break;
						} else {
							itsSafeWhiteShahDestination = true;
							break;
						}
					}
				i2++;
				}
			}
		}
	
	}
}
