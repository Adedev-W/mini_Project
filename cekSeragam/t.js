
function hitungMingguSekarang() {
  var hariIni = new Date();
  var awalBulan = new Date(hariIni.getFullYear(), hariIni.getMonth(), 1);
  var hariKe = hariIni.getDate();
  var hariPertama = awalBulan.getDay();
  var jumlahHari = new Date(hariIni.getFullYear(), hariIni.getMonth() + 1, 0).getDate();
  var jumlahMinggu = Math.ceil((jumlahHari + hariPertama) / 7);
  var mingguSekarang = Math.ceil((hariKe + hariPertama) / 7);
  return mingguSekarang;
}

function cekGanjilGenap(angka) {
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
var textBar = `Karena hari ini adalah minggu ${cekGanjilGenap(hitungMingguSekarang())} maka menggunakan seragam ${cekSeragam(cekGanjilGenap(hitungMingguSekarang()))}`
console.log(textBar);
document.getElementById("instruction").innerHTML = textBar;
document.getElementById("date").innerHTML = tanggalIndonesia;




