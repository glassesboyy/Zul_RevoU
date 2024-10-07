// variabel Js
// 1. var
// 2. let
// 3. const

// var counter = 0;
// var message = "hallo ini var";
// message = "diganti";

// js percabangan
// 1. if
// 2. if else
// 3. if else if
// 4. switch/case
// 5. operator ternary
// 6. bersarang (nested)

// js looping
// counted loop: perulangan for, perulangan foreach
// uncounted loop: perulangan while dan perulangan do/while

// for (var i = 0; i < 3; i++) {
//   console.log(i);
//   console.log(message);
//   document.write("percobaan for loop: docwrite, ");
// }

// while (counter < 3) {
//   console.log(counter);
//   counter++;
//   document.write("percobaan while: docwrite, ");
// }

// js function
// 1. menggunakan cara biasa
// 2. menggunakan ekspresi
// 3. menggunakan tanda panah (=>)

// var angka;
// function penjumlahanAngka(angka1, angka2) {
//   return angka1 + angka2;
// }
// console.log(penjumlahanAngka(1, 9));
// var angkaPanah = (angka1, angka2) => {
//   return angka1 * angka2;
// };
// console.log(angkaPanah(90, 5));

// js dom (untuk terhubung ke document (html))
// 1. menggambil elemen dengan id (getElementById())
// 2. mengambil elemen dengan class (getElementsByClassName())
// 3. mengambil elemen dengan nama tag (getElementByTagName())
// 4. mengambil elemen dengan querySelector

function namaLengkap() {
  let namaDepan = document.getElementById("nama-depan");
  let namaBelakang = document.getElementById("nama-belakang");
  console.log(namaDepan.value, namaBelakang.value);
  console.log(`${namaDepan} ${namaBelakang}`);
}

function hitung() {
  let angkaPertama = document.getElementById("angka-pertama").value;
  let angkaKedua = document.getElementById("angka-kedua").value;
  let hasil = parseInt(angkaPertama) + parseInt(angkaKedua);
  console.log(hasil);
  document.write("Hasilnya Adalah: " + hasil);
}

// event handling
// 1. User melakukan scroll
// 2. user melakukan klik pada elemen tertentu
// 3. halaman web di-load
// 4. form di submit
