function plusVaiMiinus()
{
  var tarkastettava = document.getElementById("lukuX").value;

  if(tarkastettava >= 0)
  {
    document.getElementById("vastaus1").innerHTML = "Lukusi on positiivinen";
  }
  else {
    document.getElementById("vastaus1").innerHTML = "Lukusi on negatiivinen";
  }
}


function numeroPaivaksi()
{
  var paivaNum = document.getElementById("paivaNum").value;

  if(paivaNum == 1)
  {
    document.getElementById("vastaus2").innerHTML = "Maanantai";
  }
  else if(paivaNum == 2)
  {
    document.getElementById("vastaus2").innerHTML = "Tiistai";
  }
  else if(paivaNum == 3)
  {
    document.getElementById("vastaus2").innerHTML = "Keskiviikko";
  }
  else if(paivaNum == 4)
  {
    document.getElementById("vastaus2").innerHTML = "Torstai";
  }
  else if(paivaNum == 5)
  {
    document.getElementById("vastaus2").innerHTML = "Perjantai";
  }
  else if(paivaNum == 6)
  {
    document.getElementById("vastaus2").innerHTML = "Lauantai";
  }
  else if(paivaNum == 7)
  {
    document.getElementById("vastaus2").innerHTML = "Sunnuntai";
  }
  else {
      document.getElementById("vastaus2").innerHTML = "Viikossa on vain 7 päivää.";
  }
}


function karkausTarkistus()
{
  kluku = document.getElementById("vuosiLuku").value;

  if(kluku%4 == 0 && kluku%100 != 0)
  {
    document.getElementById("vastaus3").innerHTML = "Luku on karkausvuosi.";
  }
  else if(kluku%400 ==0) {
    document.getElementById("vastaus3").innerHTML = "Luku on karkausvuosi.";
  }
  else {
    document.getElementById("vastaus3").innerHTML = "Luku ei ole karkausvuosi.";
  }
}

function keskiarvoLasku()
{
  var lu1, lu2, lu3, lu4, lu5, summa, keskiarvo;
  lu1 = parseInt(document.getElementById("luku01").value);
  lu2 = parseInt(document.getElementById("luku02").value);
  lu3 = parseInt(document.getElementById("luku03").value);
  lu4 = parseInt(document.getElementById("luku04").value);
  lu5 = parseInt(document.getElementById("luku05").value);
  summa = lu1 + lu2 + lu3 + lu4 + lu5;

  keskiarvo = summa / 5;

  document.getElementById("vastaus4").innerHTML = "Summa = " + summa + "<br> Keskiarvo = " + keskiarvo;
}

function teeKertotaulu()
{
  var kertoLuku = document.getElementById("kerrottava").value;
  var kerto = kertoLuku + " x 0 = "+ kertoLuku*0 + "<br/>";

  kerto += kertoLuku + " x 1 = "+ kertoLuku*1 + "<br/>";
  kerto += kertoLuku + " x 2 = "+ kertoLuku*2 + "<br/>";
  kerto += kertoLuku + " x 3 = "+ kertoLuku*3 + "<br/>";
  kerto += kertoLuku + " x 4 = "+ kertoLuku*4 + "<br/>";
  kerto += kertoLuku + " x 5 = "+ kertoLuku*5 + "<br/>";
  kerto += kertoLuku + " x 6 = "+ kertoLuku*6 + "<br/>";
  kerto += kertoLuku + " x 7 = "+ kertoLuku*7 + "<br/>";
  kerto += kertoLuku + " x 8 = "+ kertoLuku*8 + "<br/>";
  kerto += kertoLuku + " x 9 = "+ kertoLuku*9 + "<br/>";
  kerto += kertoLuku + " x 10 = "+ kertoLuku*10 + "<br/>";

  document.getElementById("vastaus5").innerHTML = kerto;
}
