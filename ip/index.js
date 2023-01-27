//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<212.125.8.90>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
		<div class="card-info">
			<h3 class="ip">{ip adresi}</h3>
			<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
			<p>Enlem: {enlem} Boylam: {boylam}</p>
			<p>Şehir: {şehir}</p>
			<p>Saat dilimi: {saat dilimi}</p>
			<p>Para birimi: {para birimi}</p>
			<p>ISP: {isp}</p>
		</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

const dummyData = {
  sorgu: "212.125.8.90",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "34",
  bölgeAdı: "Istanbul",
  şehir: "Istanbul",
  zip: "34010",
  enlem: 41.02470000000000283080225926823914051055908203125,
  boylam: 28.925200000000000244426701101474463939666748046875,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "TurkNet Iletisim Hizmetleri",
  organizasyon: "TurkNet Iletisim Hizmetleri A.S.",
  as: "AS12735 TurkNet Iletisim Hizmetleri A.S.",
};
//kodlar buraya gelecek

let cards = document.querySelector(".cards");

const cardYapici = (item) => {
  const {
    ülke,
    parabirimi,
    saatdilimi,
    isp,
    şehir,
    enlem,
    boylam,
    sorgu,
    ülkeKodu,
    ülkebayrağı,
  } = item;

  const divEkle = document.createElement("div");
  divEkle.setAttribute("class", "card");

  const imgekle = document.createElement("img");
  imgekle.setAttribute("src", ülkebayrağı);
  divEkle.appendChild(imgekle);

  const divEkle2 = document.createElement("div");
  divEkle2.setAttribute("class", "card-info");
  divEkle.appendChild(divEkle2);

  const h3ekle = document.createElement("h3");
  h3ekle.setAttribute("class", "ip");
  h3ekle.textContent = sorgu;
  divEkle2.appendChild(h3ekle);

  const pEkle = document.createElement("p");
  pEkle.classList.add("ulke");
  pEkle.textContent = `${ülke} (${ülkeKodu})`;
  divEkle2.appendChild(pEkle);

  const pEkle2 = document.createElement("p");
  pEkle2.textContent = `Enlem: ${enlem} Boylam: ${boylam}`;
  divEkle2.appendChild(pEkle2);

  const pEkle3 = document.createElement("p");
  pEkle3.textContent = `Şehir: ${şehir}`;
  divEkle2.appendChild(pEkle3);

  const pEkle4 = document.createElement("p");
  pEkle4.textContent = `Saat dilimi: ${saatdilimi}`;
  divEkle2.appendChild(pEkle4);

  const pEkle5 = document.createElement("p");
  pEkle5.textContent = `Para birimi: ${parabirimi}`;
  divEkle2.appendChild(pEkle5);

  const pEkle6 = document.createElement("p");
  pEkle6.textContent = `ISP: ${isp}`;
  divEkle2.appendChild(pEkle6);

  return divEkle;
};
/* cards.appendChild(cardYapici(dummyData)); */

const connection = async function () {
  await ipAdresimiAl();
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipgeoapi/" + benimIP,
  })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .then(function (a) {
      cards.appendChild(cardYapici(a));
    });
};
connection();
