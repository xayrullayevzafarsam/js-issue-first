// 3 ta sondan kattasini topish kerak

let a = prompt("1-son:");
let b = prompt("2-son:");
let c = prompt("3-son:");

a = Number(a);
b = Number(b);
c = Number(c);

if (a > b && a > c) {
  document.write(a);
}
if (b > a && b > c) {
  document.write(b);
}
if (c > b && c > a) {
  document.write(c);
}
