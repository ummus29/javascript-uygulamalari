let kilo=Number(prompt("Kilonuzu Giriniz: "));
let boy=Number(prompt("Boyunuzu Giriniz: "));
let bki=kilo/(boy*boy);
if (bki<=18.5) {
    alert("İdeal Kilonuzun Altındasınız.");
}
else if (18.5 <= bki >= 24.9){
    alert("İdeal Kilodasınız.");
}
else if(25 <= bki >=29.9){
    alert("İdeal Kilonuzun Üstündesiniz.")
}
else if (30 <= bki >=39.9){
    alert("Obez.");
}
else{
    alert("İdeal Kilonun Çok Üzerindesiniz.");
}