
var safeIdHoldersBeyazKale = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersBeyazAt = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersBeyazFil = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersBeyazVezir = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersBeyazShah = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersBeyazPiyon = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 

var safeIdHoldersSiyahKale = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersSiyahAt = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersSiyahFil = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersSiyahVezir = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersSiyahShah = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 
var safeIdHoldersSiyahPiyon = ["a1","a1","a1","a1","a1","a1","a1","a1"]; 


function realReBinding() {
	document.getElementById("a1").onclick= function() {move('a1')};
	document.getElementById("a2").onclick= function() {move('a2')};
	document.getElementById("a3").onclick= function() {move('a3')};
	document.getElementById("a4").onclick= function() {move('a4')};
	document.getElementById("a5").onclick= function() {move('a5')};
	document.getElementById("a6").onclick= function() {move('a6')};
	document.getElementById("a7").onclick= function() {move('a7')};
	document.getElementById("a8").onclick= function() {move('a8')};
	
	
	document.getElementById("b1").onclick= function() {move('b1')};
	document.getElementById("b2").onclick= function() {move('b2')};
	document.getElementById("b3").onclick= function() {move('b3')};
	document.getElementById("b4").onclick= function() {move('b4')};
	document.getElementById("b5").onclick= function() {move('b5')};
	document.getElementById("b6").onclick= function() {move('b6')};
	document.getElementById("b7").onclick= function() {move('b7')};
	document.getElementById("b8").onclick= function() {move('b8')};
	
	
	document.getElementById("c1").onclick= function() {move('c1')};
	document.getElementById("c2").onclick= function() {move('c2')};
	document.getElementById("c3").onclick= function() {move('c3')};
	document.getElementById("c4").onclick= function() {move('c4')};
	document.getElementById("c5").onclick= function() {move('c5')};
	document.getElementById("c6").onclick= function() {move('c6')};
	document.getElementById("c7").onclick= function() {move('c7')};
	document.getElementById("c8").onclick= function() {move('c8')};
	
	
	document.getElementById("d1").onclick= function() {move('d1')};
	document.getElementById("d2").onclick= function() {move('d2')};
	document.getElementById("d3").onclick= function() {move('d3')};
	document.getElementById("d4").onclick= function() {move('d4')};
	document.getElementById("d5").onclick= function() {move('d5')};
	document.getElementById("d6").onclick= function() {move('d6')};
	document.getElementById("d7").onclick= function() {move('d7')};
	document.getElementById("d8").onclick= function() {move('d8')};
	
	
	document.getElementById("e1").onclick= function() {move('e1')};
	document.getElementById("e2").onclick= function() {move('e2')};
	document.getElementById("e3").onclick= function() {move('e3')};
	document.getElementById("e4").onclick= function() {move('e4')};
	document.getElementById("e5").onclick= function() {move('e5')};
	document.getElementById("e6").onclick= function() {move('e6')};
	document.getElementById("e7").onclick= function() {move('e7')};
	document.getElementById("e8").onclick= function() {move('e8')};
	
	
	document.getElementById("f1").onclick= function() {move('f1')};
	document.getElementById("f2").onclick= function() {move('f2')};
	document.getElementById("f3").onclick= function() {move('f3')};
	document.getElementById("f4").onclick= function() {move('f4')};
	document.getElementById("f5").onclick= function() {move('f5')};
	document.getElementById("f6").onclick= function() {move('f6')};
	document.getElementById("f7").onclick= function() {move('f7')};
	document.getElementById("f8").onclick= function() {move('f8')};
	
	
	document.getElementById("g1").onclick= function() {move('g1')};
	document.getElementById("g2").onclick= function() {move('g2')};
	document.getElementById("g3").onclick= function() {move('g3')};
	document.getElementById("g4").onclick= function() {move('g4')};
	document.getElementById("g5").onclick= function() {move('g5')};
	document.getElementById("g6").onclick= function() {move('g6')};
	document.getElementById("g7").onclick= function() {move('g7')};
	document.getElementById("g8").onclick= function() {move('g8')};
	
	document.getElementById("i1").onclick= function() {move('i1')};
	document.getElementById("i2").onclick= function() {move('i2')};
	document.getElementById("i3").onclick= function() {move('i3')};
	document.getElementById("i4").onclick= function() {move('i4')};
	document.getElementById("i5").onclick= function() {move('i5')};
	document.getElementById("i6").onclick= function() {move('i6')};
	document.getElementById("i7").onclick= function() {move('i7')};
	document.getElementById("i8").onclick= function() {move('i8')};

}

function reBindingThePieces ($pieceId) {
	
	//console.log("Boşuna çalışan kod");
	
	/*
	switch (document.getElementById($pieceId).innerHTML) {
	  case "b.kale":
		if (safeIdHoldersBeyazKale[0] == $pieceId && document.getElementById(safeIdHoldersBeyazKale[0]).innerHTML == "b.kale") {
			document.getElementById(safeIdHoldersBeyazKale[0]).onclick = "";
			safeIdHoldersBeyazKale[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[0]).onclick = function() {move(safeIdHoldersBeyazKale[0])};
		} else if (safeIdHoldersBeyazKale[0] != $pieceId && safeIdHoldersBeyazKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.kale" ){
			document.getElementById(safeIdHoldersBeyazKale[0]).onclick = "";
			safeIdHoldersBeyazKale[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[0]).onclick = function() {move(safeIdHoldersBeyazKale[0])};
		} else if (safeIdHoldersBeyazKale[0] != $pieceId && safeIdHoldersBeyazKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.kale" &&
		document.getElementById(safeIdHoldersBeyazKale[0]).innerHTML == "b.kale"){
			document.getElementById(safeIdHoldersBeyazKale[1]).onclick = "";
			safeIdHoldersBeyazKale[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[1]).onclick = function() {move(safeIdHoldersBeyazKale[1])};
		} else if (safeIdHoldersBeyazKale[1] == $pieceId && document.getElementById(safeIdHoldersBeyazKale[1]).innerHTML == "b.kale") {
			document.getElementById(safeIdHoldersBeyazKale[1]).onclick = "";
			safeIdHoldersBeyazKale[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazKale[1]).onclick = function() {move(safeIdHoldersBeyazKale[1])};
		}
	  break;
	  case "b.at":
	    if (safeIdHoldersBeyazAt[0] == $pieceId && document.getElementById(safeIdHoldersBeyazAt[0]).innerHTML == "b.at") {
			document.getElementById(safeIdHoldersBeyazAt[0]).onclick = "";
			safeIdHoldersBeyazAt[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[0]).onclick = function() {move(safeIdHoldersBeyazAt[0])};
		} else if (safeIdHoldersBeyazAt[0] != $pieceId && safeIdHoldersBeyazAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.at" ){
			document.getElementById(safeIdHoldersBeyazAt[0]).onclick = "";
			safeIdHoldersBeyazAt[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[0]).onclick = function() {move(safeIdHoldersBeyazAt[0])};
		} else if (safeIdHoldersBeyazAt[0] != $pieceId && safeIdHoldersBeyazAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.at" &&
		document.getElementById(safeIdHoldersBeyazAt[0]).innerHTML == "b.at"){
			document.getElementById(safeIdHoldersBeyazAt[1]).onclick = "";
			safeIdHoldersBeyazAt[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[1]).onclick = function() {move(safeIdHoldersBeyazAt[1])};
		} else if (safeIdHoldersBeyazAt[1] == $pieceId && document.getElementById(safeIdHoldersBeyazAt[1]).innerHTML == "b.at") {
			document.getElementById(safeIdHoldersBeyazAt[1]).onclick = "";
			safeIdHoldersBeyazAt[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazAt[1]).onclick = function() {move(safeIdHoldersBeyazAt[1])};
		}
	  case "b.fil":
	  	if (safeIdHoldersBeyazFil[0] == $pieceId && document.getElementById(safeIdHoldersBeyazFil[0]).innerHTML == "b.fil") {
			document.getElementById(safeIdHoldersBeyazFil[0]).onclick = "";
			safeIdHoldersBeyazFil[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[0]).onclick = function() {move(safeIdHoldersBeyazFil[0])};
		} else if (safeIdHoldersBeyazFil[0] != $pieceId && safeIdHoldersBeyazFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.fil" ){
			document.getElementById(safeIdHoldersBeyazFil[0]).onclick = "";
			safeIdHoldersBeyazFil[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[0]).onclick = function() {move(safeIdHoldersBeyazFil[0])};
		} else if (safeIdHoldersBeyazFil[0] != $pieceId && safeIdHoldersBeyazFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "b.fil" &&
		document.getElementById(safeIdHoldersBeyazFil[0]).innerHTML == "b.fil"){
			document.getElementById(safeIdHoldersBeyazFil[1]).onclick = "";
			safeIdHoldersBeyazFil[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[1]).onclick = function() {move(safeIdHoldersBeyazFil[1])};
		} else if (safeIdHoldersBeyazFil[1] == $pieceId && document.getElementById(safeIdHoldersBeyazFil[1]).innerHTML == "b.fil") {
			document.getElementById(safeIdHoldersBeyazFil[1]).onclick = "";
			safeIdHoldersBeyazFil[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazFil[1]).onclick = function() {move(safeIdHoldersBeyazFil[1])};
		}
	  case "b.vezir":
	    if (safeIdHoldersBeyazVezir[0] == $pieceId && document.getElementById(safeIdHoldersBeyazVezir[0]).innerHTML == "b.vezir") {
			document.getElementById(safeIdHoldersBeyazVezir[0]).onclick = "";
			safeIdHoldersBeyazVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazVezir[0]).onclick = function() {move(safeIdHoldersBeyazVezir[0])};
		} else if (safeIdHoldersBeyazVezir[0] != $pieceId && document.getElementById($pieceId).innerHTML == "b.vezir" ){
			document.getElementById(safeIdHoldersBeyazVezir[0]).onclick = "";
			safeIdHoldersBeyazVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazVezir[0]).onclick = function() {move(safeIdHoldersBeyazVezir[0])};
		}
	  case "b.shah":
	    if (safeIdHoldersBeyazShah[0] == $pieceId && document.getElementById(safeIdHoldersBeyazShah[0]).innerHTML == "b.shah") {
			document.getElementById(safeIdHoldersBeyazShah[0]).onclick = "";
			safeIdHoldersBeyazShah[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazShah[0]).onclick = function() {move(safeIdHoldersBeyazShah[0])};
		} else if (safeIdHoldersBeyazShah[0] != $pieceId && document.getElementById($pieceId).innerHTML == "b.shah" ){
			document.getElementById(safeIdHoldersBeyazShah[0]).onclick = "";
			safeIdHoldersBeyazShah[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazShah[0]).onclick = function() {move(safeIdHoldersBeyazShah[0])};
		}
	  case "b.piyon":
	    if (safeIdHoldersBeyazPiyon[0] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon") {
			document.getElementById(safeIdHoldersBeyazPiyon[0]).onclick = "";
			safeIdHoldersBeyazPiyon[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[0]).onclick = function() {move(safeIdHoldersBeyazPiyon[0])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML != "b.piyon") {
			document.getElementById(safeIdHoldersBeyazPiyon[0]).onclick = "";
			safeIdHoldersBeyazPiyon[0] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[0]).onclick = function() {move(safeIdHoldersBeyazPiyon[0])};
		
		
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[1]).onclick = "";
			safeIdHoldersBeyazPiyon[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[1]).onclick = function() {move(safeIdHoldersBeyazPiyon[1])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML != "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[1]).onclick = "";
			safeIdHoldersBeyazPiyon[1] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[1]).onclick = function() {move(safeIdHoldersBeyazPiyon[1])};
		
		
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[2]).onclick = "";
			safeIdHoldersBeyazPiyon[2] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[2]).onclick = function() {move(safeIdHoldersBeyazPiyon[2])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML != "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[2]).onclick = "";
			safeIdHoldersBeyazPiyon[2] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[2]).onclick = function() {move(safeIdHoldersBeyazPiyon[2])};
		
		
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[3]).onclick = "";
			safeIdHoldersBeyazPiyon[3] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[3]).onclick = function() {move(safeIdHoldersBeyazPiyon[3])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML != "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[3]).onclick = "";
			safeIdHoldersBeyazPiyon[3] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[3]).onclick = function() {move(safeIdHoldersBeyazPiyon[3])};
		
		
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML == "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[4]).onclick = "";
			safeIdHoldersBeyazPiyon[4] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[4]).onclick = function() {move(safeIdHoldersBeyazPiyon[4])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML != "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[4]).onclick = "";
			safeIdHoldersBeyazPiyon[4] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[4]).onclick = function() {move(safeIdHoldersBeyazPiyon[4])};
			
			
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[5] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[5]).innerHTML == "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[5]).onclick = "";
			safeIdHoldersBeyazPiyon[5] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[5]).onclick = function() {move(safeIdHoldersBeyazPiyon[5])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[5] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[5]).innerHTML != "b.piyon"){
			document.getElementById(safeIdHoldersBeyazPiyon[5]).onclick = "";
			safeIdHoldersBeyazPiyon[5] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[5]).onclick = function() {move(safeIdHoldersBeyazPiyon[5])};
			
			
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[5] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[5]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[6] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[6]).innerHTML == "b.piyon" ){
			document.getElementById(safeIdHoldersBeyazPiyon[6]).onclick = "";
			safeIdHoldersBeyazPiyon[6] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[6]).onclick = function() {move(safeIdHoldersBeyazPiyon[6])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[5] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[5]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[6] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[6]).innerHTML != "b.piyon" ){
			document.getElementById(safeIdHoldersBeyazPiyon[6]).onclick = "";
			safeIdHoldersBeyazPiyon[6] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[6]).onclick = function() {move(safeIdHoldersBeyazPiyon[6])};
			
			
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[5] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[5]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[6] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[6]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[7] == $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[7]).innerHTML == "b.piyon" ){
			document.getElementById(safeIdHoldersBeyazPiyon[7]).onclick = "";
			safeIdHoldersBeyazPiyon[7] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[7]).onclick = function() {move(safeIdHoldersBeyazPiyon[7])};
		} else if (safeIdHoldersBeyazPiyon[0] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[0]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[1] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[1]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[2] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[2]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[3] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[3]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[4] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[4]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[5] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[5]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[6] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[6]).innerHTML == "b.piyon" &&
		safeIdHoldersBeyazPiyon[7] != $pieceId && document.getElementById(safeIdHoldersBeyazPiyon[7]).innerHTML != "b.piyon" ){
			document.getElementById(safeIdHoldersBeyazPiyon[7]).onclick = "";
			safeIdHoldersBeyazPiyon[7] = $pieceId;
			document.getElementById(safeIdHoldersBeyazPiyon[7]).onclick = function() {move(safeIdHoldersBeyazPiyon[7])};
		}
	  break;
	  case "s.kale":
		if (safeIdHoldersSiyahKale[0] == $pieceId && document.getElementById(safeIdHoldersSiyahKale[0]).innerHTML == "s.kale") {
			document.getElementById(safeIdHoldersSiyahKale[0]).onclick = "";
			safeIdHoldersSiyahKale[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[0]).onclick = function() {move(safeIdHoldersSiyahKale[0])};
		} else if (safeIdHoldersSiyahKale[0] != $pieceId && safeIdHoldersSiyahKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.kale" ){
			document.getElementById(safeIdHoldersSiyahKale[0]).onclick = "";
			safeIdHoldersSiyahKale[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[0]).onclick = function() {move(safeIdHoldersSiyahKale[0])};
		} else if (safeIdHoldersSiyahKale[0] != $pieceId && safeIdHoldersSiyahKale[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.kale" &&
		document.getElementById(safeIdHoldersSiyahKale[0]).innerHTML == "s.kale"){
			document.getElementById(safeIdHoldersSiyahKale[1]).onclick = "";
			safeIdHoldersSiyahKale[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[1]).onclick = function() {move(safeIdHoldersSiyahKale[1])};
		} else if (safeIdHoldersSiyahKale[1] == $pieceId && document.getElementById(safeIdHoldersSiyahKale[1]).innerHTML == "s.kale") {
			document.getElementById(safeIdHoldersSiyahKale[1]).onclick = "";
			safeIdHoldersSiyahKale[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahKale[1]).onclick = function() {move(safeIdHoldersSiyahKale[1])};
		}
	  break;
	  case "s.at":
	    if (safeIdHoldersSiyahAt[0] == $pieceId && document.getElementById(safeIdHoldersSiyahAt[0]).innerHTML == "s.at") {
			document.getElementById(safeIdHoldersSiyahAt[0]).onclick = "";
			safeIdHoldersSiyahAt[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[0]).onclick = function() {move(safeIdHoldersSiyahAt[0])};
		} else if (safeIdHoldersSiyahAt[0] != $pieceId && safeIdHoldersSiyahAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.at" ){
			document.getElementById(safeIdHoldersSiyahAt[0]).onclick = "";
			safeIdHoldersSiyahAt[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[0]).onclick = function() {move(safeIdHoldersSiyahAt[0])};
		} else if (safeIdHoldersSiyahAt[0] != $pieceId && safeIdHoldersSiyahAt[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.at" &&
		document.getElementById(safeIdHoldersSiyahAt[0]).innerHTML == "s.at"){
			document.getElementById(safeIdHoldersSiyahAt[1]).onclick = "";
			safeIdHoldersSiyahAt[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[1]).onclick = function() {move(safeIdHoldersSiyahAt[1])};
		} else if (safeIdHoldersSiyahAt[1] == $pieceId && document.getElementById(safeIdHoldersSiyahAt[1]).innerHTML == "s.at") {
			document.getElementById(safeIdHoldersSiyahAt[1]).onclick = "";
			safeIdHoldersSiyahAt[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahAt[1]).onclick = function() {move(safeIdHoldersSiyahAt[1])};
		}
	  case "s.fil":
	  	if (safeIdHoldersSiyahFil[0] == $pieceId && document.getElementById(safeIdHoldersSiyahFil[0]).innerHTML == "s.fil") {
			document.getElementById(safeIdHoldersSiyahFil[0]).onclick = "";
			safeIdHoldersSiyahFil[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[0]).onclick = function() {move(safeIdHoldersSiyahFil[0])};
		} else if (safeIdHoldersSiyahFil[0] != $pieceId && safeIdHoldersSiyahFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.fil" ){
			document.getElementById(safeIdHoldersSiyahFil[0]).onclick = "";
			safeIdHoldersSiyahFil[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[0]).onclick = function() {move(safeIdHoldersSiyahFil[0])};
		} else if (safeIdHoldersSiyahFil[0] != $pieceId && safeIdHoldersSiyahFil[1] != $pieceId && document.getElementById($pieceId).innerHTML == "s.fil" &&
		document.getElementById(safeIdHoldersSiyahFil[0]).innerHTML == "s.fil"){
			document.getElementById(safeIdHoldersSiyahFil[1]).onclick = "";
			safeIdHoldersSiyahFil[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[1]).onclick = function() {move(safeIdHoldersSiyahFil[1])};
		} else if (safeIdHoldersSiyahFil[1] == $pieceId && document.getElementById(safeIdHoldersSiyahFil[1]).innerHTML == "s.fil") {
			document.getElementById(safeIdHoldersSiyahFil[1]).onclick = "";
			safeIdHoldersSiyahFil[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahFil[1]).onclick = function() {move(safeIdHoldersSiyahFil[1])};
		}
	  case "s.vezir":
	    if (safeIdHoldersSiyahVezir[0] == $pieceId && document.getElementById(safeIdHoldersSiyahVezir[0]).innerHTML == "s.vezir") {
			document.getElementById(safeIdHoldersSiyahVezir[0]).onclick = "";
			safeIdHoldersSiyahVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahVezir[0]).onclick = function() {move(safeIdHoldersSiyahVezir[0])};
		} else if (safeIdHoldersSiyahVezir[0] != $pieceId && document.getElementById($pieceId).innerHTML == "s.vezir" ){
			document.getElementById(safeIdHoldersSiyahVezir[0]).onclick = "";
			safeIdHoldersSiyahVezir[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahVezir[0]).onclick = function() {move(safeIdHoldersSiyahVezir[0])};
		}
	  case "s.shah":
	    if (safeIdHoldersSiyahShah[0] == $pieceId && document.getElementById(safeIdHoldersSiyahShah[0]).innerHTML == "s.shah") {
			document.getElementById(safeIdHoldersSiyahShah[0]).onclick = "";
			safeIdHoldersSiyahShah[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahShah[0]).onclick = function() {move(safeIdHoldersSiyahShah[0])};
		} else if (safeIdHoldersSiyahShah[0] != $pieceId && document.getElementById($pieceId).innerHTML == "s.shah" ){
			document.getElementById(safeIdHoldersSiyahShah[0]).onclick = "";
			safeIdHoldersSiyahShah[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahShah[0]).onclick = function() {move(safeIdHoldersSiyahShah[0])};
		}
	  case "s.piyon":
	  if (safeIdHoldersSiyahPiyon[0] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon") {
			document.getElementById(safeIdHoldersSiyahPiyon[0]).onclick = "";
			safeIdHoldersSiyahPiyon[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[0]).onclick = function() {move(safeIdHoldersSiyahPiyon[0])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML != "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[0]).onclick = "";
			safeIdHoldersSiyahPiyon[0] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[0]).onclick = function() {move(safeIdHoldersSiyahPiyon[0])};
		
		
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[1]).onclick = "";
			safeIdHoldersSiyahPiyon[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[1]).onclick = function() {move(safeIdHoldersSiyahPiyon[1])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML != "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[1]).onclick = "";
			safeIdHoldersSiyahPiyon[1] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[1]).onclick = function() {move(safeIdHoldersSiyahPiyon[1])};
		
		
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[2]).onclick = "";
			safeIdHoldersSiyahPiyon[2] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[2]).onclick = function() {move(safeIdHoldersSiyahPiyon[2])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML != "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[2]).onclick = "";
			safeIdHoldersSiyahPiyon[2] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[2]).onclick = function() {move(safeIdHoldersSiyahPiyon[2])};
		
		
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[3]).onclick = "";
			safeIdHoldersSiyahPiyon[3] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[3]).onclick = function() {move(safeIdHoldersSiyahPiyon[3])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML != "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[3]).onclick = "";
			safeIdHoldersSiyahPiyon[3] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[3]).onclick = function() {move(safeIdHoldersSiyahPiyon[3])};
		
		
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML == "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[4]).onclick = "";
			safeIdHoldersSiyahPiyon[4] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[4]).onclick = function() {move(safeIdHoldersSiyahPiyon[4])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML != "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[4]).onclick = "";
			safeIdHoldersSiyahPiyon[4] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[4]).onclick = function() {move(safeIdHoldersSiyahPiyon[4])};
			
			
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[5] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[5]).innerHTML == "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[5]).onclick = "";
			safeIdHoldersSiyahPiyon[5] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[5]).onclick = function() {move(safeIdHoldersSiyahPiyon[5])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[5] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[5]).innerHTML != "s.piyon"){
			document.getElementById(safeIdHoldersSiyahPiyon[5]).onclick = "";
			safeIdHoldersSiyahPiyon[5] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[5]).onclick = function() {move(safeIdHoldersSiyahPiyon[5])};
			
			
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[5] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[5]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[6] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[6]).innerHTML == "s.piyon" ){
			document.getElementById(safeIdHoldersSiyahPiyon[6]).onclick = "";
			safeIdHoldersSiyahPiyon[6] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[6]).onclick = function() {move(safeIdHoldersSiyahPiyon[6])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[5] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[5]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[6] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[6]).innerHTML != "s.piyon" ){
			document.getElementById(safeIdHoldersSiyahPiyon[6]).onclick = "";
			safeIdHoldersSiyahPiyon[6] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[6]).onclick = function() {move(safeIdHoldersSiyahPiyon[6])};
			
			
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[5] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[5]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[6] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[6]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[7] == $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[7]).innerHTML == "s.piyon" ){
			document.getElementById(safeIdHoldersSiyahPiyon[7]).onclick = "";
			safeIdHoldersSiyahPiyon[7] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[7]).onclick = function() {move(safeIdHoldersSiyahPiyon[7])};
		} else if (safeIdHoldersSiyahPiyon[0] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[0]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[1] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[1]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[2] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[2]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[3] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[3]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[4] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[4]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[5] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[5]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[6] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[6]).innerHTML == "s.piyon" &&
		safeIdHoldersSiyahPiyon[7] != $pieceId && document.getElementById(safeIdHoldersSiyahPiyon[7]).innerHTML != "s.piyon" ){
			document.getElementById(safeIdHoldersSiyahPiyon[7]).onclick = "";
			safeIdHoldersSiyahPiyon[7] = $pieceId;
			document.getElementById(safeIdHoldersSiyahPiyon[7]).onclick = function() {move(safeIdHoldersSiyahPiyon[7])};
		}
	  break;
	}

	*/
}