// yiliga qarab yoshini aniqlash kerak

let a = prompt("hozirgi yilni kiriting:");
let b = prompt("tug'ilgan yilingizni kiriting:");

a = Number(a);
b = Number(b);

if (a > b) {
  document.write(a - b);
} else {
  document.write("yillar xato kiritildi!!");
}
