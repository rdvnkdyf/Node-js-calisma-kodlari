var express=require('express');
var app=express();

//Ana sayfaya gelen istek bölümü
app.get('/',function(req,res){
    console.log('Anasayfaya bir GET istemi geldi....');//sunucu tarafında 
    res.send('Merhaba Ana Sayfa Get');//istemci tarafında yazar
})

//Ana sayfaya gelen bir post istemi geliyor 
app.post('/',function(req,res){
    console.log("Anasayfaya bir POST istemi geldi"); //sunucu tarafinda yazar
   res.send('Merhaba Ana Sayfa POST'); //istemci tarafinda yazar
})

//del_user sayfasi icin bir DELETE istemine cevap
app.delete('/del_user',function(req,res){
    console.log("/del_user icin bir DELETE istemi geldi");
   res.send('Merhaba DELETE');
})

//list_user page sayfasi için bir GET istemine cevap
app.get('/list_user', function (req, res) {
    console.log("/list_user bir GET istemi geldi"); //sunucu tarafinda yazar
    res.send('/list_user Ana Sayfa GET'); //istemci tarafinda yazar
})

//  abcd, abxcd, ab123cd ve benzeri sayfalar icin gelen GET istemini cevap
app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd icin GET cevabi");
    res.send('Sayfa Pattern Match');
 })
 
var server=app.listen(8081,function(){
    var host=server.address().address 
    var port=server.address().port 

    console.log("Dinleniyor: http://%s:%s", host, port)
})