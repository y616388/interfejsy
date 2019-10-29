start();
function start() {
	document.getElementById('kontener').innerHTML+="<div id='dania'></div>";
	document.getElementById('kontener').innerHTML+="<div id='baner'>baner</div>";
	document.getElementById('kontener').innerHTML+="<div id='baner2'></div>";
	document.getElementById('kontener').innerHTML+="<div id='baner3'></div>";
	document.getElementById('kontener').innerHTML+="<div id='menu'><div class='przycisk' id='o1' onclick='opcja(1)'>Pizza</div><div class='przycisk' id='o2' onclick='opcja(2)'>Dania Mięsne</div><div class='przycisk' id='o3' onclick='opcja(3)'>Makarony</div><div class='przycisk' id='o4' onclick='opcja(4)'>Dodatki</div><div class='przycisk' id='o5' onclick='opcja(5)'>Alkohole</div><div class='przycisk' id='o6' onclick='opcja(6)'>Napoje</div></div>";
	document.getElementById('kontener').innerHTML+="<div id='main'></div>";
	document.getElementById('kontener').innerHTML+="<div id='koszyk_open'>Przejdź do koszyka</div>";
	document.getElementById('kontener').innerHTML+="<div id='promocje'></div>";
	
}

var id = 1;

function opcja(id) {
	for(var i = 1; i<=6; i++) {
		document.getElementById('o'+i).style.background = "#C68A66";
	}
	document.getElementById('o'+id).style.background = "#a3633d";
	
	if(id == 1) {
		//console.log("a");
		for(var i = 1; i<=12; i++) {
			document.getElementById('dania').innerHTML+="<div class='danie'>"+
			"<div class='danie_nazwa_tlo'></div><div class='danie_nazwa'>"+pizze[i-1]+"</div>"+
			"<img src='http://tattoopizza.pl/wp-content/uploads/2016/10/wm1p-300x300.png'></div>";
		}
	}
}

opcja(1);

//<div id='koszyk_niego'>Do zapłaty: 12,50zł</div>
//<div id='koszyk_go'>Zapłać</div>


