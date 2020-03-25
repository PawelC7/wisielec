

var hasla = ["Bez pracy nie ma kołaczy", "Kot w Butach", "Cicha woda brzegi rwie","Kevin sam w domu","Pinokio","Jajko mądrzejsze od kury","Do wesela się zagoi","Przyszła koza do woza","Piąte koło u wozu","Świnka Peppa","Paluszek i główka to szkolna wymówka","Nie taki diabeł straszny jak go malują","Gdzie dwóch się bije tam trzeci korzysta","Masz babo placek",""];

var haslo = "";
haslo = hasla[Math.floor(Math.random() * hasla.length)];
haslo = haslo.toUpperCase();

var haslo1 = "";
var dlugosc = haslo.length;

for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") {
        haslo1 = haslo1 + " ";
    } else {
        haslo1 = haslo1 + "-"
    }
}

function wypiszHaslo() {

    document.getElementById("plansza").innerHTML = haslo1;
}


window.onload = start;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {
    var trescdiva = "";
    for (i = 0; i < 35; i++) {
        var element = "lit" + i;
        trescdiva = trescdiva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) {
            trescdiva = trescdiva + '<div style="clear:both;"';
        }

        document.getElementById("alfabet").innerHTML = trescdiva
    }

    wypiszHaslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1) {
        return this.toString();
    } else {
        return this.substr(0, miejsce) + znak + this.substr(miejsce + 1)
    }
}
var ktoraszansa = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
function sprawdz(nr) {

    var trafiona = false;

    for (i = 0; i < dlugosc; i++) {
        if (litery[nr] == haslo.charAt(i)) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona == true) {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.borderColor = "#00C000";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.cursor = "default"

        wypiszHaslo();
    }
    else {
        no.play();
        ktoraszansa++;

        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.borderColor = "#C00000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        var plik = "img/s" + ktoraszansa + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + plik + '" alt=""/>';

        if (ktoraszansa >= 9) {
            document.getElementById("alfabet").innerHTML = 'Przegrałeś<br><br><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
            haslo = hasla[Math.floor(Math.random() * hasla.length)];
            haslo = haslo.toUpperCase();
        }

    }
    if (haslo == haslo1) {
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło:<br> " + haslo + '<br><br><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
        haslo = hasla[Math.floor(Math.random() * hasla.length)];
        haslo = haslo.toUpperCase();
    }
}