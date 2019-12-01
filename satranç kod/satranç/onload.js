

//gameStart fonksiyonu:
//oyun başında  taş harflerini yazdırır,
//taş harfleri yazan divlere tıklanıldığında move fonksiyonunu atar-taşların kendi çeşitine uygun hareketleri yapmısını 
//sağyalan fonksiyondur move,
//hareket etme sırasını beyaza verir.
function gameStart() {
	
	
	//console.log("gameStart() fonksiyonu çalıştırıldı.");
	//console.log("");
	
	
	
	//beyaz taşları yazdıran kodlar
	document.getElementById("a1").innerHTML = "b.kale";
	//console.log("document.getElementById('a1').innerHTML = 'b.kale';");
	//console.log("a1'e " + document.getElementById("a1").innerHTML + " yazdırıldı");
	//console.log("");
	
	document.getElementById("a2").innerHTML = "b.at";
	//console.log("document.getElementById('a2').innerHTML = 'b.at';");
	//console.log("a2'e " + document.getElementById("a2").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("a3").innerHTML = "b.fil";
	//console.log("document.getElementById('a3').innerHTML = 'b.fil';");
	//console.log("a3'e " + document.getElementById("a3").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("a4").innerHTML = "b.shah";
	//console.log("document.getElementById('a4').innerHTML = 'b.shah';");
	//console.log("a4'e " + document.getElementById("a4").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("a5").innerHTML = "b.vezir";
	//console.log("document.getElementById('a5').innerHTML = 'b.vezir';");
	//console.log("a5'e " + document.getElementById("a5").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("a6").innerHTML = "b.fil";
	//console.log("document.getElementById('a6').innerHTML = 'b.fil';");
	//console.log("a6'e " + document.getElementById("a6").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("a7").innerHTML = "b.at";
	//console.log("document.getElementById('a7').innerHTML = 'b.at';");
	//console.log("a7'e " + document.getElementById("a7").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("a8").innerHTML = "b.kale";
	//console.log("");
	//console.log("a8'e " + document.getElementById("a8").innerHTML + " yazdırıldı.");
	//console.log("");
	
	
	document.getElementById("b1").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b1'e " + document.getElementById("b1").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("b2").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b2'e " + document.getElementById("b2").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("b3").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b3'e " + document.getElementById("b3").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("b4").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b4'e " + document.getElementById("b4").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("b5").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b5'e " + document.getElementById("b5").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("b6").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b6'e " + document.getElementById("b6").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("b7").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b7'e " + document.getElementById("b7").innerHTML + " yazdırıldı.");
	//console.log("");
	
	document.getElementById("b8").innerHTML = "b.piyon";
	//console.log("");
	//console.log("b8'e " + document.getElementById("b8").innerHTML + " yazdırıldı.");
	//console.log("");
	
	
	
	
	document.getElementById("a1").onclick= function() {move('a1')};
	//console.log("document.getElementById('a1').onclick= function() {move('a1')};")
	//console.log("");
	//console.log("");
	
	document.getElementById("a2").onclick= function() {move('a2')};
	//console.log("document.getElementById('a2').onclick= function() {move('a2')};")
	//console.log("");
	//console.log("");
	
	document.getElementById("a3").onclick= function() {move('a3')};
	//console.log("document.getElementById('a3').onclick= function() {move('a3')};")
	//console.log("");
	//console.log("");
	
	document.getElementById("a4").onclick= function() {move('a4')};
	//console.log("document.getElementById('a4').onclick= function() {move('a4')};")
	//console.log("");
	//console.log("");
	
	document.getElementById("a5").onclick= function() {move('a5')};
	//console.log("document.getElementById('a5').onclick= function() {move('a5')};")
	//console.log("");
	//console.log("");
	
	document.getElementById("a6").onclick= function() {move('a6')};
	//console.log("document.getElementById('a6').onclick= function() {move('a6')};")
	//console.log("");
	//console.log("");
	
	document.getElementById("a7").onclick= function() {move('a7')};
	//console.log("document.getElementById('a7').onclick= function() {move('a7')};")
	//console.log("");
	//console.log("");
	
	document.getElementById("a8").onclick= function() {move('a8')};
	//console.log("document.getElementById('a8').onclick= function() {move('a8')};")
	//console.log("");
	//console.log("");
	
	
	
	
	document.getElementById("b1").onclick= function() {move('b1')};
	document.getElementById("b2").onclick= function() {move('b2')};
	document.getElementById("b3").onclick= function() {move('b3')};
	document.getElementById("b4").onclick= function() {move('b4')};
	document.getElementById("b5").onclick= function() {move('b5')};
	document.getElementById("b6").onclick= function() {move('b6')};
	document.getElementById("b7").onclick= function() {move('b7')};
	document.getElementById("b8").onclick= function() {move('b8')};
	
	
	
	
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
	
	
	
	
	document.getElementById("g1").innerHTML = "s.piyon";
	document.getElementById("g2").innerHTML = "s.piyon";
	document.getElementById("g3").innerHTML = "s.piyon";
	document.getElementById("g4").innerHTML = "s.piyon";
	document.getElementById("g5").innerHTML = "s.piyon";
	document.getElementById("g6").innerHTML = "s.piyon";
	document.getElementById("g7").innerHTML = "s.piyon";
	document.getElementById("g8").innerHTML = "s.piyon";
	
	
	document.getElementById("i1").innerHTML = "s.kale";
	document.getElementById("i2").innerHTML = "s.at";
	document.getElementById("i3").innerHTML = "s.fil";
	
	
	document.getElementById("i4").innerHTML = "s.shah";
//	document.getElementById('i4img').src ="";
	//document.getElementById('i4img').src ='sishah.png';
	
	document.getElementById("i5").innerHTML = "s.vezir";
	document.getElementById("i6").innerHTML = "s.fil";
	document.getElementById("i7").innerHTML = "s.at";
	document.getElementById("i8").innerHTML = "s.kale";

	
	
	
	whiteTurn();

	
}

//alternatif fikir:
//tüm divlere tıklama atanabilir,
//divlerin idlerine özel data tutulur,
//ve tıklama fonksiyonu o dataya göre yapılır.