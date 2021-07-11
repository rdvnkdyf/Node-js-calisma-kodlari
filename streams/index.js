/*  STREAM OKUMA */
// var fs=require("fs");
// var data=" ";

// //Okuma için bir stream olustur
// var readerStream=fs.createReadStream('metin.txt');

// //utf-8 olarak karakter encoding ayarla
// readerStream.setEncoding('UTF8');

// /// Stream olayini yönet --> data, end, ve error
// readerStream.on('data', function(chunk) {
//     data += chunk;
//  });

// //Stream olayı bitince olusan data'yı console'a yazdir
// readerStream.on('end',function(){
//     console.log(data);
// });

// //hata olursa yazdir
// readerStream.on('error',function(err){
//     console.log(err.stack);
// });

// //Program sonu 
// console.log("Program Bitti");

/* STREAM YAZMA */
var fs=require('fs');
var data='Merhaba Node.js';

//yazilabilir bir stream olustur
var writerStream=fs.createWriteStream('output.txt');

//veriyi utf8 formatinda yaz
writerStream.write(data,'UTF8');

//Dosya sonunu isaretle 
writerStream.end();

//Stream olaylarını yönet -->finish ve error
writerStream.on('finish',function(){
    console.log("Yazma bitti");
});

writerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("Program Bitti");

/* STREAM PİPİNG */
// Bir okuma stream olustur
var readerStream = fs.createReadStream('metin.txt');
 
// Yazilabilir bir stream olustur
var writerStream = fs.createWriteStream('output.txt');
 
// Okuma ve yazma islemlerini bagla
// input.txt oku ve verileri output.txt'a yaz
readerStream.pipe(writerStream);
 
console.log("Program Bitti");