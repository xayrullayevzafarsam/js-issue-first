// mukammal sonni topish kerak

let a = prompt("sonni kiriting...");
let b = 0;

a = Number(a);
b = Number(b);

for (let i = 1; i < a; i++);
{
  if (a % i == 0) {
    b += i;
  }
}

if (a == b) {
  document.write("Mukammal son");
} else {
  document.write("Mukammal son emas");
}
