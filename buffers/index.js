/* BUFFER ÜRETME */
//10 octetlik buffer olusturma 
// var buf=Buffer.alloc(10);
// //Verilen dizi icin buffer olusturma
// var buf=new Buffer.from([10,20,30,40,50]);
// //Verilen bir metin ve belirli bir encoding formatında buffer olusturma
// var buf=new Buffer.from("Ornek metin buffer","utf-8");

// /*BUFFER'A yazma*/
// buf.write(string[,offset][,length],[,encoding])

// var buf=Buffer.alloc(256);
// var len=buf.write("Merhaba");
// console.log("Yazılan Octet: "+len);

/*  BUFFER OKUMA */
// buf.toString([encoding][,start][,end])

// var buf=Buffer.alloc(26);
// for(var i=0;i<26;i++){
//     buf[i]=i+97;
// }
// console.log(buf.toString('ascii'));// cikti: abcdefghijklmnopqrstuvwxyz
// console.log(buf.toString('ascii',0,5));// cikti: abcde
// console.log(buf.toString('utf-8',0,5));// cikti: abcde
// console.log(buf.toString(undefined,0,5));// cikti: abcde (gecerli encoding)

/*BUFFER'I JSON ÇEVİRME */
//buf.toJSON()
var buf=Buffer.from('Merhaba');
var json=buf.toJSON(buf);
console.log(json);


