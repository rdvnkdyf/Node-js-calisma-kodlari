//modul yukleme 
var fs=require('fs');

//es zamanlı(blocking) dosya okuma 

/*var data=fs.readFileSync('metin.txt');
console.log(data.toString());
console.log("Program Bitti");*/


//es zamansız dosya okuma 
fs.readFile('metin.txt',function(err,data){
  if(err) return console.log(err);
  console.log(data.toString());
});
console.log("Program Bitti");
