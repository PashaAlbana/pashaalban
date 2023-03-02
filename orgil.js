//ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2.
//yaitu counted loop and uncounted loop
//perbedaanya:
//1. counted loop merupakan perulangan yang jelas dan sudah tentu dan sudah banyak perulangannya 
//2. uncounted loop merupakan peerulangan yang tidak jelas berapa kali harus mengulang
//contoh
// for(i = 0; i<10; i++){
//     PushUp();
// }

// //contoh Uncounted Loop
// while(bosan == false){
//     PushUp();
// }

//Macam-macam perulangan Counted loop
//1. Perulangan For
//2. Perulangan ForEach
//3. Perulangan Repeat

//Macam-macam perulangan Uncounted loop
//1. perulangan while
//2. perulangan Do/while

//perulangan FOR 
//perulangan for merupakan perulangan yang termasuk dalam counted loop, karena sudah jelas berapa kali akan mengulang sebuah pengulangan
//contoh
// for(let i = 0; 1 < 10; i++){
//     document.write(`<p>Perulangan ini berulang ${i + 1} kali</p>`)
// }

//perulangan WHILE
//perulangan while merupakan perulangan yang termasuk kedalam perulangan uncounted loop namun perulangan while juga dapat masuk atau menjadi perulangan yang counted loop dengan memberikan sebuah counte didalamnya.

//contoh
// let ulang = confirm("Apakah anda mau mengulang?");
// let counter = 0;
// while(ulang){
//     let jawab = confirm("Apakah anda mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }
// }

// document.write("Perulangan sudah dilakukan sebanyak" + counter + "kali");

//perulangan do/while
//perulangan do/while sama seperti perulangan while

//perbedaan nya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulum lalu mengecek kondisi yang ada di dalam kurung while.

// do{
    //code
// }while(kondisi);

//comtoh
// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda mau mengulang?");
// }while(ulang);

// document.write("perulangan yang sudah dilakukan sebanyak" + counter + "kali");v

// let sum = "";
// while(true){
//     let value = prompt("Masukan sebuah huruf",'')
//     if(!value) break;

//     sum+= value;
// }

// alert('Sum : ' + sum)

//4. PERULANGAN FOREACH 
//perulangan foreach biasanya digunakan untuk mencetak item di dalam array
//Perulangan ini termasuk dalam perulangan counted loop, karena jumlah perulangannya akan ditentukan oleh panjang dari array.
//Ada dua cara untuk menggunakan perulangan foreach :
//1. Menggunakan for dengan operator in
//2. Menggunakan method forEach()

//contoh
// let bahasa = ["Javascript", "Java", "Objective-c", "python"];
// for (let i = 0; i < bahasa.length; i++){
//     document.write(`${i + 1}.${bahasa[i]}<br/>`);
// }

// let bahasaPemrograman = ["Javascript, "Objective-c", "Python"];
// for (let i in bahasaPemrograman)

// let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
// hari.forEach( (hari) => {
//     document.write(`<h1>${hari}</h1>`)
// })

// for (let i = 0; i < 10; i++){
//     document.write(`Ulangi kalimat ini! <br>`);
// }

// document.write(`Ulangi kalimat ini! <br>`.repeat(10));

//6. PERULANGAN NESTED (BERSARANG)
//Nested loop adalah perulangan bersarang (perulangan di dalam perulangan)

//contoh
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++){
//         document.write
//         (`<p>perulangan ke- ${i},${j} ,p>`)
//     }
// }

var Ulangi = confirm("apakah anda ingin mengulang?")
var counter = 0;

while(Ulangi) {
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    Ulangi = confirm("apakah anda ingin mengulang?");
}