const today = new Date();
const currentMonth = today.getMonth();
let fridayCount = 0;
const fridayList = [];

for (let date = 1; date <= new Date(today.getFullYear(), currentMonth + 1, 0).getDate(); date++) {
  const currentDate = new Date(today.getFullYear(), currentMonth, date);
  if (currentDate.getDay() === 5) { // 5 untuk Jumat
    fridayCount++;
    fridayList.push(currentDate.getDate());
  }
}

console.log(`Bulan ini ada ${fridayCount} hari Jumat: ${fridayList.join(', ')}.`);

const currentDate = today.getDate();
let nila = [];
let selectedValue = null;

for (let i = 0; i < fridayList.length; i++) {
  if (fridayList[i] > currentDate && (selectedValue === null || fridayList[i] < selectedValue)) {
    selectedValue = fridayList[i];
  } else if (fridayList[i] === currentDate) {
    selectedValue = fridayList[i];
    break;
  }
}

if (selectedValue !== null) {
  console.log("Array yang dipilih adalah " + selectedValue);
} else {
  console.log("Tidak ada array yang melebihi value.");
}




function cekGanjilGenap(angka) {
  console.log(angka);
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

function cekSeragam(ser) {
  if (ser === "Genap") {
    return "Olahraga";
  } else {
    return "Pramuka";
  }
}

// ambil data di temp.json
var hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
// Array untuk nama-nama bulan dalam bahasa Indonesia
var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
// Fungsi untuk mendapatkan format tanggal dengan bahasa Indonesia
function getTanggalIndonesia(date) {
  var namaHari = hari[date.getDay()];
  var tanggal = date.getDate();
  var namaBulan = bulan[date.getMonth()];
  var tahun = date.getFullYear();
  return namaHari + ', ' + tanggal + ' ' + namaBulan + ' ' + tahun;
}
var tanggalSekarang = new Date();
var tanggalIndonesia = getTanggalIndonesia(tanggalSekarang);
var textBar = `Karena hari ini adalah minggu ${cekGanjilGenap(selectedValue)} maka menggunakan seragam ${cekSeragam(cekGanjilGenap(selectedValue))}`
console.log(textBar);
document.getElementById("instruction").innerHTML = textBar;
document.getElementById("date").innerHTML = tanggalIndonesia;




