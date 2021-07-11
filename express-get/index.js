var express=require('express');
var app=express();

app.use(express.static('www'));
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
})

app.get('/process_get',function(req,res){
    //JSON formati seklinde bir cikti üretiliyor
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server=app.listen(8081,function(){
    var host = server.address().address
   var port = server.address().port
   console.log("Dinleniyor: http://%s:%s", host, port)
})