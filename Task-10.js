const str = "asfs";

let obj = {};
str.split("").reverse().forEach((el, index, arr) =>index !== 0 ? (obj = { [el]: obj }) : (obj[el] = null));

console.log(obj);
