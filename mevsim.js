let mevsim=prompt("istediğiniz mevsimi giriniz.");
switch(mevsim.toLowerCase())
{
    case"kış":
    document.writeln("kayak yapabilirsiniz.");
break;

case"yaz":
document.writeln("Dnize girebilirsiniz.");
break;
case"sonbahar":
document.writeln("doğa yürüyüşü yapabilirsiniz.");
break;
case"ilkbahar":
document.writeln("kayak yapabilirsiniz.");
break;
default:
    document.writeln("geçersiniz mevsim girişi yaptınız.");
    break;

}

