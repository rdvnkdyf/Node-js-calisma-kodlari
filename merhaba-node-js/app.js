//modul yukleme
var http=require("http");

http.createServer(function(request,response){
    //HTTP basligi gönder
    //HTTP status:200:Ok anlamında 
    //içerik tip metin olsun:Content Type:text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});

    //Cevabin asıl metnini gonder 
    response.end('Merhaba Node js Dünyasi.\n');
}).listen(8080);
//liste ile oluşan sunucuyu istediğin bir baglantı noktasına bağla 
//ve dinle 
//Sunucu tarafında console ekranına mesaj yazdır 
console.log('Sunucu calisiyor: http://127.0.0.1:8081/');