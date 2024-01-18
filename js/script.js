function hitung() {
    // Mendapatkan nilai sisi dari input
    var sisi = document.getElementById('sisi').value;

    // Menghitung luas dan keliling
    var luas = sisi * sisi;
    var keliling = 4 * sisi;

    // Menampilkan hasil
    var resultMessage = `Luas: ${luas} <br> Keliling: ${keliling}`;
    document.getElementById('result').innerHTML = resultMessage;
}