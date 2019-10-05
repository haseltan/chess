
var safeIdHoldersBeyazKale = []; 
var safeIdHoldersBeyazAt = []; 
var safeIdHoldersBeyazFil = []; 
var safeIdHoldersBeyazVezir = []; 
var safeIdHoldersBeyazShah = []; 
var safeIdHoldersBeyazPiyon = []; 

var safeIdHoldersSiyahKale = []; 
var safeIdHoldersSiyahAt = []; 
var safeIdHoldersSiyahFil = []; 
var safeIdHoldersSiyahVezir = []; 
var safeIdHoldersSiyahShah = []; 
var safeIdHoldersSiyahPiyon = []; 




function reBindingThePieces ($pieceId) {
	switch (document.getElementById($pieceId).innerHTML) {
	  case "b.kale":
		if (safeIdHoldersBeyazKale[0] == $pieceId && document.getElementById(safeIdHoldersBeyazKale[0]).innerHTML == "b.kale") {
			safeIdHoldersBeyazKale[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[0]).onclick = function() {move(safeIdHoldersBeyazKale[0])};
		} else if (safeIdHoldersBeyazKale[0] != $pieceId && safeIdHoldersBeyazKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.kale" ){
			safeIdHoldersBeyazKale[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[0]).onclick = function() {move(safeIdHoldersBeyazKale[0])};
		} else if (safeIdHoldersBeyazKale[0] != $pieceId && safeIdHoldersBeyazKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.kale" &&
		document.getElementById(safeIdHoldersBeyazKale[0]).innerHTML == "b.kale"){
			safeIdHoldersBeyazKale[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[1]).onclick = function() {move(safeIdHoldersBeyazKale[1])};
		} else if (safeIdHoldersBeyazKale[1] == $pieceId && document.getElementById(safeIdHoldersBeyazKale[1]).innerHTML == "b.kale") {
			safeIdHoldersBeyazKale[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[1]).onclick = function() {move(safeIdHoldersBeyazKale[1])};
		}
	  break;
	  case "b.at":
	    if (safeIdHoldersBeyazAt[0] == $pieceId && document.getElementById(safeIdHoldersBeyazAt[0]).innerHTML == "b.at") {
			safeIdHoldersBeyazAt[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[0]).onclick = function() {move(safeIdHoldersBeyazAt[0])};
		} else if (safeIdHoldersBeyazAt[0] != $pieceId && safeIdHoldersBeyazAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.at" ){
			safeIdHoldersBeyazAt[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[0]).onclick = function() {move(safeIdHoldersBeyazAt[0])};
		} else if (safeIdHoldersBeyazAt[0] != $pieceId && safeIdHoldersBeyazAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.at" &&
		document.getElementById(safeIdHoldersBeyazAt[0]).innerHTML == "b.at"){
			safeIdHoldersBeyazAt[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[1]).onclick = function() {move(safeIdHoldersBeyazAt[1])};
		} else if (safeIdHoldersBeyazAt[1] == $pieceId && document.getElementById(safeIdHoldersBeyazAt[1]).innerHTML == "b.at") {
			safeIdHoldersBeyazAt[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[1]).onclick = function() {move(safeIdHoldersBeyazAt[1])};
		}
	  case "b.fil":
	  	if (safeIdHoldersBeyazFil[0] == $pieceId && document.getElementById(safeIdHoldersBeyazFil[0]).innerHTML == "b.fil") {
			safeIdHoldersBeyazFil[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[0]).onclick = function() {move(safeIdHoldersBeyazFil[0])};
		} else if (safeIdHoldersBeyazFil[0] != $pieceId && safeIdHoldersBeyazFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.fil" ){
			safeIdHoldersBeyazFil[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[0]).onclick = function() {move(safeIdHoldersBeyazFil[0])};
		} else if (safeIdHoldersBeyazFil[0] != $pieceId && safeIdHoldersBeyazFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.fil" &&
		document.getElementById(safeIdHoldersBeyazFil[0]).innerHTML == "b.fil"){
			safeIdHoldersBeyazFil[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[1]).onclick = function() {move(safeIdHoldersBeyazFil[1])};
		} else if (safeIdHoldersBeyazFil[1] == $pieceId && document.getElementById(safeIdHoldersBeyazFil[1]).innerHTML == "b.fil") {
			safeIdHoldersBeyazFil[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[1]).onclick = function() {move(safeIdHoldersBeyazFil[1])};
		}
	  case "b.vezir":
	    if (safeIdHoldersBeyazVezir[0] == $pieceId && document.getElementById(safeIdHoldersBeyazVezir[0]).innerHTML == "b.vezir") {
			safeIdHoldersBeyazVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazVezir[0]).onclick = function() {move(safeIdHoldersBeyazVezir[0])};
		} else if (safeIdHoldersBeyazVezir[0] != $pieceId && document.getElementById($pieceId).innerHTML == "b.vezir" ){
			safeIdHoldersBeyazVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazVezir[0]).onclick = function() {move(safeIdHoldersBeyazVezir[0])};
		}
	  case "b.shah":
	    if (safeIdHoldersBeyazShah[0] == $pieceId && document.getElementById(safeIdHoldersBeyazShah[0]).innerHTML == "b.shah") {
			safeIdHoldersBeyazShah[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazShah[0]).onclick = function() {move(safeIdHoldersBeyazShah[0])};
		} else if (safeIdHoldersBeyazShah[0] != $pieceId && document.getElementById($pieceId).innerHTML == "b.shah" ){
			safeIdHoldersBeyazShah[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazShah[0]).onclick = function() {move(safeIdHoldersBeyazShah[0])};
		}
	  case "b.piyon":
	    if (safeIdHoldersBeyazPiyon[0] == $pieceId && document.getElementById(safeIdHoldersSiyahKale[0]).innerHTML == "s.kale") {
			safeIdHoldersSiyahKale[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[0]).onclick = function() {move(safeIdHoldersSiyahKale[0])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && ){
			
		}
	  case "s.kale":
		if (safeIdHoldersSiyahKale[0] == $pieceId && document.getElementById(safeIdHoldersSiyahKale[0]).innerHTML == "s.kale") {
			safeIdHoldersSiyahKale[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[0]).onclick = function() {move(safeIdHoldersSiyahKale[0])};
		} else if (safeIdHoldersSiyahKale[0] != $pieceId && safeIdHoldersSiyahKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.kale" ){
			safeIdHoldersSiyahKale[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[0]).onclick = function() {move(safeIdHoldersSiyahKale[0])};
		} else if (safeIdHoldersSiyahKale[0] != $pieceId && safeIdHoldersSiyahKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.kale" &&
		document.getElementById(safeIdHoldersSiyahKale[0]).innerHTML == "s.kale"){
			safeIdHoldersSiyahKale[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[1]).onclick = function() {move(safeIdHoldersSiyahKale[1])};
		} else if (safeIdHoldersSiyahKale[1] == $pieceId && document.getElementById(safeIdHoldersSiyahKale[1]).innerHTML == "s.kale") {
			safeIdHoldersSiyahKale[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[1]).onclick = function() {move(safeIdHoldersSiyahKale[1])};
		}
	  break;
	  case "s.at":
	    if (safeIdHoldersSiyahAt[0] == $pieceId && document.getElementById(safeIdHoldersSiyahAt[0]).innerHTML == "s.at") {
			safeIdHoldersSiyahAt[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[0]).onclick = function() {move(safeIdHoldersSiyahAt[0])};
		} else if (safeIdHoldersSiyahAt[0] != $pieceId && safeIdHoldersSiyahAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.at" ){
			safeIdHoldersSiyahAt[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[0]).onclick = function() {move(safeIdHoldersSiyahAt[0])};
		} else if (safeIdHoldersSiyahAt[0] != $pieceId && safeIdHoldersSiyahAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.at" &&
		document.getElementById(safeIdHoldersSiyahAt[0]).innerHTML == "s.at"){
			safeIdHoldersSiyahAt[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[1]).onclick = function() {move(safeIdHoldersSiyahAt[1])};
		} else if (safeIdHoldersSiyahAt[1] == $pieceId && document.getElementById(safeIdHoldersSiyahAt[1]).innerHTML == "s.at") {
			safeIdHoldersSiyahAt[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[1]).onclick = function() {move(safeIdHoldersSiyahAt[1])};
		}
	  case "s.fil":
	  	if (safeIdHoldersSiyahFil[0] == $pieceId && document.getElementById(safeIdHoldersSiyahFil[0]).innerHTML == "s.fil") {
			safeIdHoldersSiyahFil[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[0]).onclick = function() {move(safeIdHoldersSiyahFil[0])};
		} else if (safeIdHoldersSiyahFil[0] != $pieceId && safeIdHoldersSiyahFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.fil" ){
			safeIdHoldersSiyahFil[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[0]).onclick = function() {move(safeIdHoldersSiyahFil[0])};
		} else if (safeIdHoldersSiyahFil[0] != $pieceId && safeIdHoldersSiyahFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.fil" &&
		document.getElementById(safeIdHoldersSiyahFil[0]).innerHTML == "s.fil"){
			safeIdHoldersSiyahFil[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[1]).onclick = function() {move(safeIdHoldersSiyahFil[1])};
		} else if (safeIdHoldersSiyahFil[1] == $pieceId && document.getElementById(safeIdHoldersSiyahFil[1]).innerHTML == "s.fil") {
			safeIdHoldersSiyahFil[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[1]).onclick = function() {move(safeIdHoldersSiyahFil[1])};
		}
	  case "s.vezir":
	    if (safeIdHoldersSiyahVezir[0] == $pieceId && document.getElementById(safeIdHoldersSiyahVezir[0]).innerHTML == "s.vezir") {
			safeIdHoldersSiyahVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahVezir[0]).onclick = function() {move(safeIdHoldersSiyahVezir[0])};
		} else if (safeIdHoldersSiyahVezir[0] != $pieceId && document.getElementById($pieceId).innerHTML == "s.vezir" ){
			safeIdHoldersSiyahVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahVezir[0]).onclick = function() {move(safeIdHoldersSiyahVezir[0])};
		}
	  case "s.shah":
	    if (safeIdHoldersSiyahShah[0] == $pieceId && document.getElementById(safeIdHoldersSiyahShah[0]).innerHTML == "s.shah") {
			safeIdHoldersSiyahShah[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahShah[0]).onclick = function() {move(safeIdHoldersSiyahShah[0])};
		} else if (safeIdHoldersSiyahShah[0] != $pieceId && document.getElementById($pieceId).innerHTML == "s.shah" ){
			safeIdHoldersSiyahShah[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahShah[0]).onclick = function() {move(safeIdHoldersSiyahShah[0])};
		}
	  case "s.piyon":
	}
}