// 3 ta sondan kichigini topish kerak

let a = prompt("1-son");
let b = prompt("2-son");
let c = prompt("3-son");

a = Number(a);
b = Number(b);
c = Number(c);

if (a < b && b < c) {
  document.write(a);
}
if (b < a && a < c) {
  document.write(b);
}
if (c < b && b < a) {
  document.write(c);
}
