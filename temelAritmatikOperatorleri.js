document.writeln("<h3>Basit Hesap Makinesi</h3>"+"<br>");
let sayi1=17;
let sayi2=15;
let toplam=sayi1 + sayi2;
let cıkarma=sayi1 - sayi2;
let carpma= sayi1 * sayi2;
let bolme=sayi1 / sayi2;
let mod=sayi1 % sayi2;
let ust_alma=sayi1 **sayi2;
document.writeln("Birinci Sayı :"+ sayi1 + "<br>"+
    "İkinci Sayı: "+ sayi2+"<br>"+
    "Toplama İşlemi Sonucu: "+ toplam +"<br>"+
    "Çıkarma İşlemi Sonucu: "+ cıkarma +"<br>"+
    "Çarpma İşlemi Sonucu: "+ carpma +"<br>"+
    "Bölme İşlemi Sonucu: "+ bolme +"<br>"+
    "Mod Alma İşlemi Sonucu: "+ mod +"<br>"+
    "Üst Alma İşlemi Sonucu: "+ ust_alma +"<br>"+
    "Aşağı Yuvarlama İşlemi Sonucu: "+Math.floor(sayi1) + "<br>"+
    "Yukarı Yuvarlama İşlemi Sonucu: " +Math.ceil(sayi1) +"<br>"+
    "Yakına Yuvarlama İşlemi Sonucu: " +Math.round(sayi1) +"<br>");