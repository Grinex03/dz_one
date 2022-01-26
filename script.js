
let S = prompt('Введите площадь');
let R = prompt('Введите радиус');
let H = prompt('Введите высоту');

R = Math.pow (R, 2);
A = Math.PI * R;
V = A * H;

document.write('<div>**************</div>');
document.write('Обьем цилиндра с площадью основы ' +  ' * ' + S + ' * ,' + 'радиусом ' +  ' * ' + R + ' * ' + ' и высотой ' + ' * ' + H + ' * ' + ' равен : ' );
document.write('<div>--------------------</div>');
document.write('V = ' + ' * ' + V  + ' * .');
document.write('<div>--------------------</div>');
document.write('<mark>end</mark>');


// **************************************************************************************************************************************************************************************************

let a = prompt('Введите число');
let d = Number(a);
alert(['Even', 'Odd'][d * d % 2]);
let b = prompt('Введите число');
let e = Number(b);
alert(['Even', 'Odd'][e * e % 2]);
let c = prompt('Введите число');
let m = Number(c);
alert(['Even', 'Odd'][m * m % 2]);
let sum = (d + e + m );
alert(sum);