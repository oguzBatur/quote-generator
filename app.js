const btn = document.getElementById('btn');
const quotes = [
    ['Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez. ', 'Mustafa Kemal Atatürk'],
    ['Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.','Mustafa Kemal Atatürk'],
    ['Dünyada her şey için, medeniyet için, hayat için, başarı için, en hakiki mürşit bilimdir, fendir.', 'Mustafa Kemal Atatürk'],
    ['İmkanın sınırını görmek için imkansızı denemek lazım.', 'Fatih Sultan Mehmet'],
    ['Baykuştan korkumuz yok! biz ki, şahinler sürüsü.','Fatih Sultan Mehmet'],
    ['Dün akıllıydım, dünyayı değiştirmek istedim; Bugün ise bilgeyim, Kendimi Değiştirdim.','Mevlana'],
    ['Köpeklerin kardeşliği, aralarına kemik atana kadardır.','Mevlana'],
    ['Biz Türk milleti temiz bir milletiz. Biat nedir asla bilmeyiz. Bundan dolayı Tanrı bizi aziz kılmıştır. ','Alparslan Türkeş'],
    ['Eğer birgün benim sözlerim bilimle ters düşerse, bilimi seçin.','Mustafa Kemal Atatürk'],
    ['Söz konusu olan vatansa, gerisi teferruat.','Mustafa Kemal Atatürk'],
    ['Bağımsızlıktan yoksun bir ulus, uygar insanlık karşısında uşak olmaktan kurtulamaz.','Mustafa Kemal Atatürk'],
    ['İstikbal göklerdedir.','Mustafa Kemal Atatürk.'],
    ['Tarih yazmak korkaklara göre bir iş değildir.','Fatih Sultan Mehmet'],
    ['Benim kudretimin ulaştığı yere onların hayalleri bile ulaşamaz.','Fatih Sultan Mehmet'],
    ['Hakiki sanat muhteşem bir şehir vücuda getirmek ve halkının kalbini saadetler doldurmaktır.','Fatih Sultan Mehmet'],
    ['Muhtaç olduğun kudret; damarlarındaki asil kanda mevcuttur', 'Mustafa Kemal Atatürk'],
    ['Size öyle bir vatan aldım ki; ebediyen sizin olacaktır.', 'Alpaslan'],
    ['Ben sadece asil bir ailenin evladı olmakla değil, fakat asil bir milletin evladı olmakla gururluyum.', 'Attila Han'],
    ['Ey konstantiniye, ya sen beni alırsın, ya ben seni alırım.', 'Fatih Sultan Mehmet'],
    ['Devletleri yıkan tüm hatanın altında, nice gururun gafleti yatar.', 'Yavuz Sultan Selim'],
    ['Cesaret insanı zafere, kararsızlık tehlikeye, korkaklık ise ölüme götürür.', 'Yavuz Sultan Selim'],
    ['Yenileceğinden korkan, daima yenilir.', 'Yıldırım Bayezid'],
    ['Adaletin en kötüsü geç tecelli edenidir. Sonunda hüküm isabetli olsa da, geciken adalet zulümdür.', 'Orhan Gazi'],
    ['Türk çocuğu ecdadını tanıdıkça, daha büyük işIer yapmak için kendinde kuvvet buIacaktır.', 'Atatürk']
    
];
const author = document.getElementById('author-container');
const quoteText = document.getElementById('quote');

for (let index = 0; index < quotes.length; index++) {
    let randomNum = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomNum][0];
    author.textContent = quotes[randomNum][1];
}


btn.addEventListener('click', () => {

    let randomNum = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomNum][0];
    author.textContent = quotes[randomNum][1];
})