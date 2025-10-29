let sınav1=Number(prompt("BİRİNCİ SINAV NOTUNU GİRİNİZ: "));
let sınav2=Number(prompt("İKİNCİ SINAV NOTUNU GİRİNİZ: "));
let sınav3=Number(prompt("ÜÇÜNCÜ SINAV NOTUNU GİRİNİZ: "));
let ortalama=((sınav1*20)/100 +(sınav2*30)/100 +(sınav3*50)/100);
if(ortalama>60)
{
    alert("DERSTEN GEÇTİNİZ.");
}
else
{
    alert("DERSTEN KALDINIZ.");
}