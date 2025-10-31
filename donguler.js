// document.writeln("<u>0'dan 10'a kadar olan çift sayıları:</u>"+"<br>");
// for(let i=0; i=10;i+2)
// {
//     document.writeln(i);

// }
// document.writeln("<u>1'den 10'a kadar olan tek sayıları:</u>");
// for(let j=1; j<=10;j+2)
// {
//     document.writeln(j);
// }
let sayi=prompt("sayı giriniz.");
let faktöriyel=1;
for (let i=1; i<=sayi; i++)
{
    faktöriyel*=i;
}
alert(sayi+" sayının faktöriyeli: "+faktöriyel);