// 1) Из-за того что между строками лишние плюсы JS пытается преобразовать стоку в число
// и получается NaN, поэтому такой странный результат
// 2) Лучший вариант решения это никогда в жизни так не писать строки...

let s = "nanana-AAA!!!";
console.log(s);
