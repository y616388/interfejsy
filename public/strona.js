start();
function start() {
	document.getElementById('kontener').innerHTML += "<div id='dania'></div>";
	document.getElementById('kontener').innerHTML += "<div id='baner'><img id='b1' src='img/logo.png'><img id='b2' src='img/baner.png'></div>";
	document.getElementById('kontener').innerHTML += "<div id='baner2'><img src='img/pl.png'></div>";
	document.getElementById('kontener').innerHTML += "<div id='baner3'><img src='img/ang.png'></div>";
	document.getElementById('kontener').innerHTML += "<div id='menu'><div class='przycisk' id='o0' onclick='opcja(0)'>Pizza</div><div class='przycisk' id='o1' onclick='opcja(1)'>Dania Mięsne</div><div class='przycisk' id='o2' onclick='opcja(2)'>Makarony</div><div class='przycisk' id='o3' onclick='opcja(3)'>Dodatki</div><div class='przycisk' id='o4' onclick='opcja(4)'>Alkohole</div><div class='przycisk' id='o5' onclick='opcja(5)'>Napoje</div></div>";
	document.getElementById('kontener').innerHTML += "<div id='main'></div>";
	document.getElementById('kontener').innerHTML += "<div id='koszyk_open'>Przejdź do koszyka➜</div>";
	document.getElementById('kontener').innerHTML += "<div id='promocje'><img src='img/promo.png'></div>";
  document.getElementById('kontener').innerHTML += "<div id='dodanie_dania_tlo' onclick='zamkniecie_dodania()'></div>"
  document.getElementById('kontener').innerHTML += "<div id='dodanie_dania'></div>"
}

var id = 0;
var otwarte = -1;

function opcja(id) {
	for(var i = 0; i <= 5; i++) {
		document.getElementById('o' + i).style.background = "#C68A66";
	}
	document.getElementById('o' + id).style.background = "#a3633d";

  document.getElementById('dania').innerHTML = "";

  otwarte = -1;

	if(id == 0) {
		for(var i = 0; i <= 11; i++) {
			document.getElementById('dania').innerHTML += "<div class='danie' onclick = 'otworz("+i+")'>" +
			"<div class='danie_nazwa_tlo' id='danie_nazwa_tlo" + i + "'></div>" +
      "<div class='danie_nazwa' id='danie_nazwa" + i + "'>" + dania[id][i][0] + "</div>" +
      "<div class='danie_opis' id='danie_opis" + i + "'>" + dania[id][i][3] + "</div>" +
      "<div class='danie_dodaj' id='danie_dodaj" + i + "' onclick='dodaj("+id+","+i+")'>Dodaj do koszyka</div>" +
			"<img src='" + dania[id][i][1] + "'></div>";
		}
	}else {
    for(var i = 0; i <= 5; i++) {
			document.getElementById('dania').innerHTML += "<div class='danie' onclick = 'otworz(" + i + ")'>" +
			"<div class='danie_nazwa_tlo' id='danie_nazwa_tlo" + i + "'></div>" +
      "<div class='danie_nazwa' id='danie_nazwa" + i + "'>" + dania[id][i][0] + "</div>" +
      "<div class='danie_opis' id='danie_opis" + i + "'>" + dania[id][i][3] + "</div>" +
      "<div class='danie_dodaj' id='danie_dodaj" + i + "' onclick='dodaj("+id+","+i+")'>Dodaj do koszyka</div>" +
			"<img src='" + dania[id][i][1] + "'></div>";
		}
  }
}

opcja(0);

//<div id='koszyk_niego'>Do zapłaty: 12,50zł</div>
//<div id='koszyk_go'>Zapłać</div>

function otworz(id) {
  if(otwarte != -1) {
    document.getElementById("danie_nazwa" + otwarte).style.animation = "nazwa_dol 0.1s linear forwards";
    document.getElementById("danie_nazwa_tlo" + otwarte).style.animation = "nazwa_tlo_dol 0.1s linear forwards";

    document.getElementById("danie_opis" + otwarte).style.display = "none";
    document.getElementById("danie_dodaj" + otwarte).style.display = "none";
    document.getElementById("danie_opis" + otwarte).style.animation = "znikanie 0.1s linear forwards";
    document.getElementById("danie_dodaj" + otwarte).style.animation = "znikanie 0.1s linear forwards";
  }
  if(id != otwarte) {
    document.getElementById("danie_nazwa" + id).style.animation = "nazwa_gora 0.1s linear forwards";
    document.getElementById("danie_nazwa_tlo" + id).style.animation = "nazwa_tlo_gora 0.1s linear forwards";

    document.getElementById("danie_opis" + id).style.display = "block";
    document.getElementById("danie_dodaj" + id).style.display = "block";
    document.getElementById("danie_opis" + id).style.animation = "odznikanie 0.1s linear forwards";
    document.getElementById("danie_dodaj" + id).style.animation = "odznikanie 0.1s linear forwards";
    otwarte = id;
  }else {
    otwarte = -1;
  }
}

function dodaj(typ, id) {
  document.getElementById("dodanie_dania").style.display = "block";
  document.getElementById("dodanie_dania_tlo").style.display = "block";
  document.getElementById("dodanie_dania").style.animation = "odznikanie 0.1s linear forwards";
  document.getElementById("dodanie_dania_tlo").style.animation = "odznikanie2 0.1s linear forwards";

  document.getElementById("dodanie_dania").innerHTML = "";

  if(typ == 0) {
    //document.getElementById("dodanie_dania").innerHTML += dania[typ][id][0] + "<br>" + dania[typ][id][2] + "zł";
    document.getElementById("dodanie_dania").innerHTML += "<div id='dodanie_nazwa'>"+dania[typ][id][0]+"</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>30cm</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>"+dania[typ][id][2]+"zł</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat'>+</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_puste'>0</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat'>-</div>";

    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>40cm</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>"+(dania[typ][id][2]) * 1.5+"zł</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat'>+</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_puste'>0</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat'>-</div>";

    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>50cm</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>"+(dania[typ][id][2]) * 2+"zł</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat'>+</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_puste'>0</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat'>-</div>";

    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_przycisk'>Dodaj do koszyka</div>";
  }
}

function zamkniecie_dodania() {
  document.getElementById("dodanie_dania").style.animation = "znikanie 0.1s linear forwards";
  document.getElementById("dodanie_dania_tlo").style.animation = "znikanie2 0.1s linear forwards";
  setTimeout(function() {
    document.getElementById("dodanie_dania").style.display = "none";
    document.getElementById("dodanie_dania_tlo").style.display = "none";
  }, 100);
}
