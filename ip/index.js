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

//kodlar buraya gelecek
axios.get("https://example.com/data", {
  params: {
    ip: "212.125.8.90",
  },
});

const divEkle = document.createElement("div");
divEkle.setAttribute("class", "card");

const imgekle = document.createElement("img");
imgekle.setAttribute("src", "{ülke bayrağı url}");
divEkle.appendChild(imgekle);

const divEkle2 = document.createElement("div");
divEkle2.setAttribute("class", "card-info");

const h3ekle = document.createElement("h3");
h3ekle.setAttribute("class", "ip");
h3ekle.textContent = "{ip adresi}";
divEkle2.appendChild(h3ekle);

const pEkle = document.createElement("p");
pEkle.classList.add("ulke");
pEkle.textContent = "{ülke bilgisi (ülke kodu)}";
divEkle2.appendChild(pEkle);

const pEkle2 = document.createElement("p");
pEkle2.textContent = "Enlem: {enlem} Boylam: {boylam}";
divEkle2.appendChild(pEkle2);

const pEkle3 = document.createElement("p");
pEkle3.textContent = "Şehir: {şehir}";
divEkle2.appendChild(pEkle3);

const pEkle4 = document.createElement("p");
pEkle4.textContent = "Saat dilimi: {saat dilimi}";
divEkle2.appendChild(pEkle4);

const pEkle5 = document.createElement("p");
pEkle5.textContent = "Para birimi: {para birimi}";
divEkle2.appendChild(pEkle5);

const pEkle6 = document.createElement("p");
pEkle6.textContent = "ISP: {isp}";
divEkle2.appendChild(pEkle6);
