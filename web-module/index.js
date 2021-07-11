/* NODE JS SUNUCUSU */
/*  HATALI KODLAR ----------------------------------------------------- */
// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

/* NODE JS CLİENT YAPIMI */
var http = require('http');
 
// Istek icin kullanilan ayarlar
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.htm'  
};
 
// Istek icin kullanilacak callback fonksiyonu
var callback = function(response){
   //web sayfasi adim adim aliniyor
   var body = '';
   response.on('data', function(data) {
      body += data; //veri birden fazla parcadan olusabilir.
   });
   
   response.on('end', function() {
      // Veri alma islemi bitti.
      console.log(body);
   });
}
// Sunucuya bir istek olustur
var req = http.request(options, callback);
req.end();