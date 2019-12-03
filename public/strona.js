start();
function start() {
	document.getElementById('kontener').innerHTML += "<div id='dania'></div>";
	document.getElementById('kontener').innerHTML += "<div id='baner'><div id='b1'>Pizz</div><img id='b2' src='img/p1.svg'><div id='b3'>mat</div></div>";
	document.getElementById('kontener').innerHTML += "<div id='menu'><div class='przycisk' id='o0' onclick='opcja(0)'>Pizza</div><div class='przycisk' id='o1' onclick='opcja(1)'>Dania Mięsne</div><div class='przycisk' id='o2' onclick='opcja(2)'>Makarony</div><div class='przycisk' id='o3' onclick='opcja(3)'>Dodatki</div><div class='przycisk' id='o4' onclick='opcja(4)'>Alkohole</div><div class='przycisk' id='o5' onclick='opcja(5)'>Napoje</div></div>";
	document.getElementById('kontener').innerHTML += "<div id='main'></div>";
	document.getElementById('kontener').innerHTML += "<div id='koszyk_open' onclick='koszyk_open()'>Przejdź do koszyka<div id='koszyk_ilosc'>0</div></div>";
	document.getElementById('kontener').innerHTML += "<div id='promocje'><div id='promocje_tytul'>PROMOCJA!</div><div id='promocje_img'></div><div id='promocje_nazwa'></div></div>";
  document.getElementById('kontener').innerHTML += "<div id='dodanie_dania_tlo' onclick='zamkniecie_dodania()'></div>";
  document.getElementById('kontener').innerHTML += "<div id='dodanie_dania'></div>";
	document.getElementById('kontener').innerHTML += "<div id='koszyk'></div>";
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

	rozmiary = [0, 0, 0];

  if(typ == 0) {
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
//var koszyk = [[0, 0, 0, 1], [0, 0, 1, 2], [0, 5, 1, 1], [0, 5, 2, 1], [4, 0, 0, 2]];
var koszyk = [];

var promocja_id = Math.floor((Math.random() * 11) + 0);
dania[0][promocja_id][2] /= 2;
document.getElementById("promocje").style.animation = "promo_bg 2s linear forwards infinite";
document.getElementById("promocje_img").innerHTML = "<img src='"+dania[0][promocja_id][1]+"'>";
document.getElementById("promocje_nazwa").innerHTML = dania[0][promocja_id][0] + "<br>" + dania[0][promocja_id][2] + "zł";

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
		var czy_rozmiar = 1;
		for(var i=0; i < koszyk.length; i++) {
			if(koszyk[i][0] == typ && koszyk[i][1] == id && koszyk[i][2] == rozmiar) {
				czy_rozmiar = 0;
				koszyk[i][3] += ilosc;
			}
		}
		if(czy_rozmiar) {
			koszyk.push(zamowienie);
		}
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

function koszyk_open() {
	document.getElementById("koszyk").style.display = "block";
	document.getElementById("koszyk").style.animation = "odznikanie 0.1s linear forwards";
	window.scrollTo(0, 0);
	setTimeout(function() {
		document.getElementById("dania").innerHTML = "";
		}, 100);
	koszyk_wyswietl();
}

function koszyk_wyswietl() {
	document.getElementById("koszyk").innerHTML = "<div id='koszyk_powrot' onclick='koszyk_zamknij()'>Powrót</div><div id='koszyk_dalej' onclick='koszyk_plac()'>Dalej</div><div id='koszyk_cena'></div>";
	var cena_all = 0;

	for(var i=0; i < koszyk.length; i++) {
		var linia = "<div class='koszyk_linia'><div class='koszyk_linia_img' style='background-image:url("+dania[koszyk[i][0]][koszyk[i][1]][1]+")'>";
		if(koszyk[i][0] == 0) {
			linia += (koszyk[i][2]+2) * 10 + "cm";
		}
		linia += "</div><div class='koszyk_linia_nazwa'>"+dania[koszyk[i][0]][koszyk[i][1]][0]+"</div>"
		+ "<div class='koszyk_linia_plus' onclick='koszyk_edycja("+i+", 0)'>➕</div>"
		+ "<div class='koszyk_linia_ilosc'>"+koszyk[i][3]+"</div>"
		+ "<div class='koszyk_linia_minus' onclick='koszyk_edycja("+i+", 1)'>➖</div>"
		+ "<div class='koszyk_linia_cena'>";
		var cena = dania[koszyk[i][0]][koszyk[i][1]][2] * koszyk[i][3];
		if(koszyk[i][2] == 1) {
			cena *= 1.5;
		}
		if(koszyk[i][2] == 2) {
			cena *= 2;
		}
		cena_all += cena;
		linia += cena + "<font style='font-size:2vw;'>zł</font></div><div class='koszyk_linia_usun' onclick='koszyk_edycja("+i+", 2)'>❌</div></div>";

		document.getElementById("koszyk").innerHTML += linia;
		document.getElementById("koszyk_cena").innerHTML = cena_all + "<font style='font-size:2vw;'>zł</font>";
	}
}

function koszyk_edycja(id, operacja) {
	if(operacja == 0) {
		koszyk[id][3]++;
	}
	if(operacja == 1) {
		if(koszyk[id][3] > 1) {
			koszyk[id][3]--;
		}else {
			koszyk_edycja(id, 2);
		}
	}
	if(operacja == 2) {
		koszyk.splice(id, 1);
	}
	koszyk_wyswietl();
}

function koszyk_zamknij() {
	document.getElementById("koszyk").style.animation = "znikanie 0.1s linear forwards";
	window.scrollTo(0, 0);
	setTimeout(function() {
		document.getElementById("koszyk").style.display = "none";
		opcja(0);
		var ilosc = 0;
		for(var i = 0; i < koszyk.length; i++) {
			ilosc += koszyk[i][3];
		}
		document.getElementById("koszyk_ilosc").innerHTML=ilosc;
	}, 100);
}

var koszyk_opcja = 1;

function koszyk_plac() {
	document.getElementById("koszyk").innerHTML = "<div id='koszyk_powrot' onclick='koszyk_wyswietl()'>Powrót</div><div id='koszyk_dalej' onclick='koszyk_koniec()'>Dalej</div><div id='koszyk_cena'></div>";
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_napis'>Wybierz formę płatności</div>";
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_4'></div><div id='koszyk_5'></div>";
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_1' onclick='koszyk_wybierz(1)'>💵<div id='koszyk_3'>Płatność gotówką</div></div>";
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_2' onclick='koszyk_wybierz(2)'>💳<div id='koszyk_3'>Płatność kartą</div></div>";
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_cena_plac'></div>";
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_cena'></div>";
	var cena_all = 0;
	for(var i=0; i < koszyk.length; i++) {
		var cena = dania[koszyk[i][0]][koszyk[i][1]][2] * koszyk[i][3];
		if(koszyk[i][2] == 1) {
			cena *= 1.5;
		}
		if(koszyk[i][2] == 2) {
			cena *= 2;
		}
		cena_all += cena;
	}
	document.getElementById("koszyk_cena").innerHTML = cena_all + "<font style='font-size:2vw;'>zł</font>";

	koszyk_wybierz(1);
	koszyk_opcja = 1;
}

function koszyk_wybierz(nr) {
	koszyk_opcja = nr;
	document.getElementById("koszyk_4").style.border = "none";
	document.getElementById("koszyk_5").style.border = "none";
	document.getElementById("koszyk_"+(nr+3)).style.border = "1px solid #363636";
}

function koszyk_koniec() {

	if(koszyk_opcja == 1) {
		document.getElementById("koszyk").innerHTML = "<div id='koszyk_napis'>Udaj się do kasy z numerem</div>";
	}else {
		document.getElementById("koszyk").innerHTML = "<div id='koszyk_napis'>Przyłóż kartę do czytnika</div>";
	}

	document.getElementById("koszyk").innerHTML += "<div id='koszyk_powrot' onclick='koszyk_zamknij()'>Zamknij</div></div>";
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_nr'>#"+Math.floor((Math.random()*10))+Math.floor((Math.random()*10))+Math.floor((Math.random()*10))+"<div id='koszyk_nr_2'>Numer Twojego zamówienia</div></div>";

	var cena_all = 0;
	for(var i=0; i < koszyk.length; i++) {
		var cena = dania[koszyk[i][0]][koszyk[i][1]][2] * koszyk[i][3];
		if(koszyk[i][2] == 1) {
			cena *= 1.5;
		}
		if(koszyk[i][2] == 2) {
			cena *= 2;
		}
		cena_all += cena;
	}
	document.getElementById("koszyk").innerHTML += "<div id='koszyk_koniec_cena'>Do zapłaty "+cena_all+"zł</div>";
	koszyk = [];
}
