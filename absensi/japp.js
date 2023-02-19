let myArray = [];
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.json();
  myText['nama'].forEach(user => {
  	  myArray.push('New element');
		const select = document.getElementById('mySelect');
		const optgroup = document.createElement('optgroup');
		optgroup.label = user;
		var ket = ["Sakit","Bolos","Alpa","Izin","Mengenang"]
		for (let k of ket) {
			const option = document.createElement('option');
			option.text = k;
			option.value = k;
			optgroup.appendChild(option);
		}
		select.appendChild(optgroup);
  });
  
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

// Contoh penggunaan fungsi getTanggalIndonesia
//ll the function to create the element and set its options
getText("temp.json")
const select = document.getElementById('mySelect');
select.addEventListener('change', (event) => {
  const selectedOptions = event.target.selectedOptions;
  const selectedLabels = [];
  for (let i = 0; i < selectedOptions.length; i++) {
    const selectedOption = selectedOptions[i];
    const optionLabel = selectedOption.label;
    const optgroupLabel = selectedOption.parentElement.label;
    const labelValue = `${optgroupLabel} - ${optionLabel}`;
    selectedLabels.push(labelValue);
  }
  console.log(`Selected labels: ${selectedLabels.join(', ')}`);
  var tanggalSekarang = new Date();
  var tanggalIndonesia = getTanggalIndonesia(tanggalSekarang);
  const g = document.getElementById('ket')
  g.textContent = '';
  g.textContent += 'Selamat (UbahWaktunya) bu mohon izin memberikan daftar hadir siang ini.\n'
  g.textContent += `Hari/Tanggal: ${tanggalIndonesia}`;
  g.textContent += `\nJumlah Siswa: ${myArray.length}`;
  let math = Math.floor(myArray.length - selectedLabels.length);
  g.textContent += `\nHadir: ${math}\n`;
  g.textContent += `Tidak Hadir: ${selectedLabels.length}\n`;
  g.textContent += 'Keterangan:\n';
  g.textContent += `${selectedLabels.join(', ')}`;
  g.textContent += '.\nSekian dan terima kasih.';
});

const myTextarea = document.getElementById('ket');
const copyButton = document.getElementById('copyButton');

  // Add an event listener to the button
copyButton.addEventListener('click', function() {
// Select the text in the textarea
	myTextarea.select();
	
	// Copy the selected text to the clipboard
	document.execCommand('copy');
	
	// Log a message to the console
	console.log('Copied text to clipboard: ' + myTextarea.value);
});
// add select element to the 
// access the options outside the function
 // output: 'This is a new element'
 // output: 'large'

		

//tampilkan sesuai are yang diklik 
		// output yang tampil 
        //<p id="tb" class="bg-primary text-white fw-bold fs-6" style="margin-top: -34px;">het</p>
        //<p id="tb" class="bg-primary text-white fw-bold fs-6" style="margin-top: -34px;">het</p> 
        
        //output yang di saya inginkan
       
        //<p id="tb" class="bg-primary text-white fw-bold fs-6" style="margin-top: -34px;">do</p>
        //<p id="tb" class="bg-primary text-white fw-bold fs-6" style="margin-top: -34px;">me</p> 
		
 



