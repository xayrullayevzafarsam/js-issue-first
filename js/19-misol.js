// butun sonni juft manfiy, juft musbat, toq manfiy, toq musbat ekanligini aniqlash kerak

let a = prompt("son kiriting...");

if (a > 0 && a % 2 == 0) {
  document.write("musbat juft");
}
if (a < 0 && a % 2 == 0) {
  document.write("manfiy juft");
}
if (a > 0 && a % 2 != 0) {
  document.write("musbat toq");
}
if (a < 0 && a % 2 != 0) {
  document.write("manfiy toq");
}
