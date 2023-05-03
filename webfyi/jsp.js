
function getData() {
	var url = "https://jibs.my.id/api/harga_komoditas";  
	// mengirimkan request GET ke API menggunakan method fetch
	// mendefinisikan URL API
	// mengirimkan request GET ke API menggunakan method fetch
	fetch(url)
	  .then(response => response.json())
	  .then(data => {
	    // mengurai data JSON dan mengakses data yang dibutuhkan
	    getJson(data);
	    getComdty(data)
	
	  })
	  .catch(error => console.error(error));
}
getData() 




function getJson(data) {
	getselect(data)
	const tableBody = document.querySelector("table tbody");
	for (const category in data.national_commodity_price) {
	  data.national_commodity_price[category].forEach(item => {
	    const row = document.createElement("tr");
	    const nameCell = document.createElement("td");
	    nameCell.textContent = category;
	    const provinceCell = document.createElement("td");
	    provinceCell.textContent = item.name;
	    const priceCell = document.createElement("td");
	    priceCell.textContent = item.display;
	    row.appendChild(nameCell);
	    row.appendChild(provinceCell);
	    row.appendChild(priceCell);
	    tableBody.appendChild(row);
	  });
	}
}


function getComdty(data) {
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");

  // populate select1 with options
  Object.keys(data.national_commodity_price).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    select1.appendChild(option);
  });

  // listen to select1 change event
  select1.addEventListener("change", () => {
    data.national_commodity_price[select1.value].forEach((item) => {
      const option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      select2.appendChild(option);
    });
  });
};


function getselect(datas) {
	const barangSelect = document.getElementById("select1");
	const provinsiSelect = document.getElementById("select2");
	const hasilDiv = document.getElementById("hasil");
	const tampilkanButton = document.getElementById("button");
	tampilkanButton.addEventListener("click", function() {
		const barangValue = barangSelect.value;
		const provinsiValue = provinsiSelect.value;
		if (barangValue && provinsiValue) {
		  const data = datas.national_commodity_price[barangValue].find(function(item) {
		    return item.name === provinsiValue;
		  });
		  if (data) {
		    hasilDiv.innerHTML = "Harga " + barangValue + " di " + provinsiValue + " adalah " + data.display;
		  } else {
		    hasilDiv.innerHTML = "Data tidak ditemukan";
		  }
		} else {
		  hasilDiv.innerHTML = "Silahkan pilih Nama Barang dan Provinsi";
		}
	});
};






// mendefinisikan fungsi untuk mengambil data lokasi dari API
function getLocation(ip) {
  var url = "https://ipapi.co/" + ip + "/json/";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data.city + ", " + data.region + ", " + data.country_name);
    }
  };
  xhr.send();
}

// contoh penggunaan: mengambil lokasi IP client saat request
