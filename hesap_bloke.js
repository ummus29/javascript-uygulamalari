let dogruSifre="1234";
let girilenSifre="";
let denemesayisi=0;
while(girilenSifre!==dogruSifre && denemesayisi<3)
{
girilenSifre=prompt("Şifrenizi giriniz:");
denemesayisi++;
if(girilenSifre!==dogruSifre)
{
    alert("Hatalı şifre! kalan demene hakkı:"+(3-denemesayisi));

}
}
if(girilenSifre==dogruSifre)
{
    alert("giriş başarılı");
}
else{
    alert("giriş başarısız hesabınız bloke oldu");
}