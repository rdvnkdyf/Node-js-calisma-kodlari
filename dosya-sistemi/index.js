/*  ESZAMANLI VE ESZAMANSIZ OKUMA */
// var fs=require("fs");
// //eszamansız okuma 
// fs.readFile('metin.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Es zamansız okuma: "+data.toString());
// });

// //Eszamanlı okuma 
// var data=fs.readFileSync('metin.txt');
// console.log("Eszamanlı okuma: "+data.toString());

// console.log("Program bitti....");

/* DOSYA ACMA*/
// var fs=require("fs");

// //Eszamansız dosya acma 
// console.log("Dosya acilma basliyor!!!");
// fs.open('metin.txt','r+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Dosya basarili bir sekilde acildi!!");
// });

/* DOSYA BİLGİSİ ALMA  */
// var fs=require("fs");

// console.log("Dosya hakkında bilgi");
// fs.stat('metin.txt',function(err,stats){
//     if(err){
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("Dosyadan basarili bir sekilde bilgi elde edildi!");

//     //Dosya tipini kontrol et 
//     console.log("Dosya mi?"+stats.isFile());
//     console.log("Dizin mi ?"+stats.isDirectory());
// });

/* DOSYAYA YAZMA*/
// var fs=require("fs");

// console.log("Varolan bir dosyaya yazma islemi....");
// fs.writeFile('metin.txt','Merhaba yeni satir!!',function(err){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Veri basarili bir sekilde yazildi....");
//     console.log("Yazilan veriyi okuyalım....");
//     fs.readFile('metin.txt',function(err,data){
//         if(err){
//             return console.error(err);
//         }
//         console.log("Eszamansiz okuma :"+data.toString());
//     });
// });

/* DOSYAYI OKUMA */
// var fs=require("fs");
// var buf=Buffer.alloc(1024);

// console.log("Varolan bir dosya acilacak.....");
// fs.open('metin.txt','r+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Dosya acildi....");
//     console.log("Okuma baslayacakk...");
//     fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//         if(err){
//             console.log(err);
//         }
//         console.log(bytes+" bytes read");
//         //Okunan veri cikti olarak ekrana yazdiriliyor 
//         if(bytes>0){
//             console.log(buf.slice(0,bytes).toString());
//         }
//     });
// });


/* DOSYA KAPAMA*/
// var fs = require("fs");
// var buf = Buffer.alloc(1024);
 
// console.log("Varolan bir dosya acilacak");
// fs.open('metin.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Dosya basarili bir sekilde acildi!");
//    console.log("Dosya okuma geciliyor.");
   
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
 
//       // Sadece okunan byte'lari ekrana yaz.
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
 
//       // Acik dosyayi kapat.
//       fs.close(fd, function(err){
//          if (err){
//             console.log(err);
//          } 
//          console.log("Dosya basarili bir sekilde kapandi.");
//       });
//    });
// });

/* DOSYA KESME*/
// var fs=require("fs");
// var buf=Buffer.alloc(1024);

// console.log("Varolan bir dosyayi acma .....");
// fs.open('metin.txt','r+',function(err,fd){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Dosya basarili bir sekilde acildi...");
//     console.log("10 Byte sonra dosyayı kes....");

//     //Truncate the opened file 
//     fs.ftruncate(fd,10,function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("Kesme islemi basarili bir sekilde yapıldi....");
//         console.log("Ayni dosyayi oku....");
//         fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//             if(err){
//                 console.log(err);
//             }
//             //Sadece okunan byte'i yaz.
//             if(bytes>0){
//                 console.log(buf.slice(0,bytes).toString());
//             }

//             //Dosyayi kapat
//             fs.close(fd,function(err){
//                 if(err){
//                     console.log(err);
//                 }
//                 console.log("Dosya kapatildi....");
//             });
//         });
//     });
// });

/* DOSYA SİLME */
// var fs=require("fs");

// console.log("Varolan bir dosyayi silme....");
// fs.unlink('metin.txt',function(err){
//     if(err){
//         return console.error(err);
//     }
//     console.log("Dosya basarili bir sekilde silindi......");
// });

/* DİZİN OLUSTURMA */
// var fs = require("fs");
 
// console.log("/tmp/test dizinini olustur");
// fs.mkdir('/tmp/test',function(err){
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Dizin basarili bir sekilde olusturuldu!");
// });

/*DİZİN  İCİNİ OKUMA*/
// var fs = require("fs");
 
// console.log("/tmp dizinini oku");
// fs.readdir("/tmp/",function(err, files){
//    if (err) {
//       return console.error(err);
//    }
//    files.forEach( function (file){
//       console.log( file );
//    });
// });

/* DİZİN SİLME */
var fs = require("fs");
 
console.log("/tmp/test dizini sil");
fs.rmdir("/tmp/test",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("/tmp dizinini oku");
   
   fs.readdir("/tmp/",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});