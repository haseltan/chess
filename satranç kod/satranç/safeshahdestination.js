
var placeDeneme;
var placeDenemeJoin;
var itsSafeWhiteShahDestination;

var itsSafeBlackShahDestination;

var safePlacesForWhiteShah = [];
var safePlacesWhiteCounter = 0;

var safePlacesForBlackShah = [];
var safePlacesBlackCounter = 0;

function isItSafeWhiteShahDestination ($placeWillBeControlled) {
	//üst ve alt düz
	placeDeneme = $placeWillBeControlled.split("");
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
					return 5;
					break;
				} else {
					itsSafeWhiteShahDestination = true;
					break;
				}
			}
		}
	}
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
					return 5;
					break;
				} else {
					itsSafeWhiteShahDestination = true;
					break;
				}
			}
		}
	}
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	
	//at arama
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i++;
	i++;
	i2++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i++;
	i++;
	i2--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i--;
	i--;
	i2++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i--;
	i--;
	i2--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i2++;
	i++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i2++;
	i--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i2--;
	i++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i2--;
	i--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.at") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}

	//piyon
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.piyon") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.piyon") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	//şah
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	//sağ
	placeDeneme = $placeWillBeControlled.split("");
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	
	placeDeneme = $placeWillBeControlled.split("");
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "s.shah") {
		itsSafeWhiteShahDestination = false;
		return 5;
	} else {
		itsSafeWhiteShahDestination = true;
	}
}

function isItSafeBlackShahDestination ($placeWillBeControlled) {
	//üst ve alt düz
	placeDeneme = $placeWillBeControlled.split("");
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
					return 5;
					break;
				} else {
					itsSafeBlackShahDestination = true;
					break;
				}
			}
		}
	}
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
					return 5;
					break;
				} else {
					itsSafeBlackShahDestination = true;
					break;
				}
			}
		}
	}
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	placeDeneme = $placeWillBeControlled.split("");
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
	
	//at arama
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i++;
	i++;
	i2++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i++;
	i++;
	i2--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i--;
	i--;
	i2++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i--;
	i--;
	i2--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i2++;
	i++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i2++;
	i--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i2--;
	i++;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i2--;
	i--;
	placeDeneme[1] = lettersAndNumbers[i];
	placeDeneme[0] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.at") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}

	//piyon
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.piyon") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.piyon") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	//şah
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i++;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	//sağ
	placeDeneme = $placeWillBeControlled.split("");
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	
	placeDeneme = $placeWillBeControlled.split("");
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
	
	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2--;
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}

	placeDeneme = $placeWillBeControlled.split("");
	i = lettersAndNumbers.indexOf(placeDeneme[0]);
	i2 = lettersAndNumbers.indexOf(placeDeneme[1]);
	i2++;
	i--;
	placeDeneme[0] = lettersAndNumbers[i];
	placeDeneme[1] = lettersAndNumbers[i2];
	placeDenemeJoin = placeDeneme.join("");
	if(document.getElementById(placeDenemeJoin) && document.getElementById(placeDenemeJoin).innerHTML == "b.shah") {
		itsSafeBlackShahDestination = false;
		console.log("");
		return 5;
	} else {
		itsSafeBlackShahDestination = true;
	}
}