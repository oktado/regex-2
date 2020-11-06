let hasil = "";
let angka = (123456789000);
let regex = /^\d{10,12}$/g;
let testAngka = regex.test(angka);

function cekNomor (angka) {
    if(testAngka) {
        return 'Nomor yang anda masukkan benar.'
    } else {
        return 'Nomor yang anda masukkan salah.'
    }
}
console.log(cekNomor(angka));

