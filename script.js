function diagnosa() {
  const gejalaTerpilih = Array.from(document.querySelectorAll('input[name="gejala"]:checked')).map(el => el.value);
  let hasil = "";

  if (gejalaTerpilih.includes("demam") && gejalaTerpilih.includes("batuk") && gejalaTerpilih.includes("sakit_tenggorokan")) {
    hasil = "Kemungkinan Anda terkena Flu.";
  } else if (gejalaTerpilih.includes("mual") && gejalaTerpilih.includes("diare")) {
    hasil = "Kemungkinan Anda mengalami Keracunan Makanan.";
  } else if (gejalaTerpilih.includes("demam") && gejalaTerpilih.includes("sakit_kepala") && gejalaTerpilih.includes("mual")) {
    hasil = "Kemungkinan Anda terkena Demam Berdarah atau Typus.";
  } else if (gejalaTerpilih.length === 0) {
    hasil = "Silakan pilih minimal satu gejala.";
  } else {
    hasil = "Gejala yang Anda alami belum dapat didiagnosa secara spesifik. Silakan konsultasi ke dokter.";
  }

  document.getElementById("hasil").innerText = hasil;
}
