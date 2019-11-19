start();
function start() {
	document.getElementById('kontener').innerHTML += "<div id='dania'></div>";
	document.getElementById('kontener').innerHTML += "<div id='baner'><img id='b1' src='img/logo.png'><img id='b2' src='img/baner.png'></div>";
	document.getElementById('kontener').innerHTML += "<div id='baner2'><img src='img/pl.png'></div>";
	document.getElementById('kontener').innerHTML += "<div id='baner3'><img src='img/ang.png'></div>";
	document.getElementById('kontener').innerHTML += "<div id='menu'><div class='przycisk' id='o0' onclick='opcja(0)'>Pizza</div><div class='przycisk' id='o1' onclick='opcja(1)'>Dania Mięsne</div><div class='przycisk' id='o2' onclick='opcja(2)'>Makarony</div><div class='przycisk' id='o3' onclick='opcja(3)'>Dodatki</div><div class='przycisk' id='o4' onclick='opcja(4)'>Alkohole</div><div class='przycisk' id='o5' onclick='opcja(5)'>Napoje</div></div>";
	document.getElementById('kontener').innerHTML += "<div id='main'></div>";
	document.getElementById('kontener').innerHTML += "<div id='koszyk_open'>Przejdź do koszyka<div id='koszyk_ilosc'>0</div></div>";
	document.getElementById('kontener').innerHTML += "<div id='promocje'><img src='img/promo.png'></div>";
  document.getElementById('kontener').innerHTML += "<div id='dodanie_dania_tlo' onclick='zamkniecie_dodania()'></div>"
  document.getElementById('kontener').innerHTML += "<div id='dodanie_dania'></div>"
}

var id = 0;
var otwarte = -1;
var typ = 0;

function opcja(id) {
	typ = id;
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

var rozmiary = [0, 0, 0];

function dodaj(typ, id) {
  document.getElementById("dodanie_dania").style.display = "block";
  document.getElementById("dodanie_dania_tlo").style.display = "block";
  document.getElementById("dodanie_dania").style.animation = "odznikanie 0.1s linear forwards";
  document.getElementById("dodanie_dania_tlo").style.animation = "odznikanie2 0.1s linear forwards";

  document.getElementById("dodanie_dania").innerHTML = "";

  if(typ == 0) {
    //document.getElementById("dodanie_dania").innerHTML += dania[typ][id][0] + "<br>" + dania[typ][id][2] + "zł";
		rozmiary = [0, 0, 0];
    document.getElementById("dodanie_dania").innerHTML += "<div id='dodanie_nazwa'>"+dania[typ][id][0]+"</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>30cm</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>"+dania[typ][id][2]+"zł</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(0, 0)'>+</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_puste' id='rozmiar0'>0</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(0, 1)'>-</div>";

    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>40cm</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>"+(dania[typ][id][2]) * 1.5+"zł</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(1, 0)'>+</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_puste' id='rozmiar1'>0</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(1, 1)'>-</div>";

    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>50cm</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kolo'>"+(dania[typ][id][2]) * 2+"zł</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(2, 0)'>+</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_puste' id='rozmiar2'>0</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(2, 1)'>-</div>";

    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_przycisk' onclick='dodaj_rozmiar("+typ+","+id+")'>Dodaj do koszyka</div>";
  }else {
		rozmiary = [0, 0, 0];
		document.getElementById("dodanie_dania").innerHTML += "<div id='dodanie_nazwa'>"+dania[typ][id][0]+"</div>";
		document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_zdjecie'><img src='"+dania[typ][id][1]+"'></div>";

		document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_cena'>"+dania[typ][id][2]+"zł</div>";

		document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_spacja'></div>";
		document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(0, 0)'>+</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_puste' id='rozmiar0'>0</div>";
    document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_kwadrat' onclick='ilosc(0, 1)'>-</div>";

		document.getElementById("dodanie_dania").innerHTML += "<div class='dodanie_przycisk' onclick='koszyk_dodaj("+typ+","+id+",0,"+rozmiary[0]+")'>Dodaj do koszyka</div>";
	}
}

//var koszyk = [typ, id, rozmiar, ilosc];
var koszyk = [];

function dodaj_rozmiar(typ, id) {
	for(var i = 0; i < 3; i++) {
		if(rozmiary[i] > 0) {
			koszyk_dodaj(typ, id, i, rozmiary[i]);
		}
	}
}

function koszyk_dodaj(typ, id, rozmiar, ilosc) {
	if(typ != 0) {
		ilosc = rozmiary[rozmiar];
	}
	var zamowienie = [typ, id, rozmiar, ilosc];
	if(ilosc > 0) {
		koszyk.push(zamowienie);
	}
	ilosc = 0;
	for(var i = 0; i < koszyk.length; i++) {
		ilosc += koszyk[i][3];
	}

	document.getElementById("koszyk_ilosc").innerHTML=ilosc;

	zamkniecie_dodania();
}

function ilosc(rozmiar, operacja) {
	if(!operacja) {
		rozmiary[rozmiar]++;
	}else if(rozmiary[rozmiar] > 0) {
		rozmiary[rozmiar]--;
	}
	if(typ == 0) {
		for(var i = 0; i < 3; i++) {
			document.getElementById("rozmiar" + i).innerHTML = rozmiary[i];
		}
	}else {
		document.getElementById("rozmiar0").innerHTML = rozmiary[0];
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
