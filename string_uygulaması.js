let ad="Ümmügülsüm";
let soyad="Söğüt";
let memleket="Gümüşhane";
let musteriProfili=`
<h3>MÜŞTERİ BİLGİLERİ: </H3>
Ad Soyad: ${ad+soyad} <br>
Memleket: ${memleket} <br>
Hesap No: ${"MUST"+"-"+ad.substring(0,2).toUpperCase()+"2025"}`;
document.writeln(musteriProfili);