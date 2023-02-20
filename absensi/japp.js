let myArray = [];
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.json();
  myText['nama'].forEach(user => {
  	  myArray.push(user);
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

const now = new Date();
const currentHour = now.getHours();
let timeOfDay;
if (currentHour >= 00 && currentHour < 11) {
  timeOfDay = "pagi";
} else if (currentHour >= 11 && currentHour < 15) {
  timeOfDay = "siang";
} else if (currentHour >= 15 && currentHour < 18) {
  timeOfDay = "sore";
} else {
  timeOfDay = "malam";
}
// Akhir Waktu
// Output the time of day



// Contoh penggunaan fungsi getTanggalIndonesia
//ll the function to create the element and set its options
getText("temp.json")

// Get the select element
const se = document.getElementById("myLe");
// Define an array of objects representing the optgroup elements
const optgroups = [
  {
    label: "Senin",
    options: ["Agama","Bahasa Inggris","Bahasa Indonesia","PPKN"]
  },
  {
    label: "Selasa",
    options: ["PJOK","Ekonomi","Matematika(P)","Matematika(U)","Kimia"]
  },
  {
    label: "Rabu",
    options: ["Biologi","Seni Budaya","Sejarah Indonesia","Fisika","PKWU"]
  },
  {
    label: "Kamis",
    options: ["Matematika(P)","Fisika","Matematika(U)","Bahasa Indonesia","Biologi"]
  },
  {
    label: "Jumaat",
    options: ["Kimia","Ekonomi"]
  }
];

// Loop through the array of objects and create the optgroup elements
for (let i = 0; i < optgroups.length; i++) {
  const optgroup = optgroups[i];
  // Create the optgroup element
  const optgroupElement = document.createElement("optgroup");
  optgroupElement.label = optgroup.label;
  // Loop through the array of options and create the option elements
  for (let j = 0; j < optgroup.options.length; j++) {
    const option = optgroup.options[j];
    // Create the option element
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    // Add the option element to the optgroup element
    optgroupElement.appendChild(optionElement);
  }
  // Add the optgroup element to the select element
  se.appendChild(optgroupElement);
}


// Get the select element
const le = document.getElementById("myLe");
// Get the selected option element
const selectedOption = le.options[le.selectedIndex];
// Get the value of the selected option
const selectedValue = selectedOption.value;
// Log the value of the selected option
console.log("Selected option: " + selectedValue);





const select = document.getElementById('mySelect');
select.addEventListener('change', (event) => {
  const selectedOptions = event.target.selectedOptions;
  const selectedLabels = [];
  for (let i = 0; i < selectedOptions.length; i++) {
    const selectedOption = selectedOptions[i];
    const optionLabel = selectedOption.label;
    const optgroupLabel = selectedOption.parentElement.label;
    const labelValue = `${optgroupLabel} - ${optionLabel}\n`;
    selectedLabels.push(labelValue);
  }
  console.log(`Selected labels: ${selectedLabels.join(', ')}`);
  var tanggalSekarang = new Date();
  var tanggalIndonesia = getTanggalIndonesia(tanggalSekarang);
  const g = document.getElementById('ket')
  g.textContent = '';
  g.textContent += `Selamat ${timeOfDay} bu mohon izin memberikan daftar hadir ${timeOfDay} ini.\n`
  g.textContent += `Hari/Tanggal: ${tanggalIndonesia}\n`;
  g.textContent += `Mapel: ${selectedValue}`;
  g.textContent += `\nJumlah Siswa: ${myArray.length}`;
  let math = Math.floor(myArray.length - selectedLabels.length);
  g.textContent += `\nHadir: ${math}\n`;
  g.textContent += `Tidak Hadir: ${selectedLabels.length}\n`;
  g.textContent += 'Keterangan:\n';
  g.textContent += `${selectedLabels.join('')}`;
  g.textContent += 'Sekian dan terima kasih.';
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
		
 



