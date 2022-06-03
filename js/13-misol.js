// 13-misol: son musbat bo'lsa 3 ga oshiring, manfiy bo'lsa 2 ga kamaytiring

let a = prompt("son kiriting..");

a = Number(a);

if (a > 0) {
  document.write((a += 3));
} else {
  document.write((a -= 2));
}
