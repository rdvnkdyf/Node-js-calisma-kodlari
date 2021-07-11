var express=require('express'); 
var app=express();

app.use(express.static('www'));

app.get('/',function(req,res){
    res.send('Merhaba Node.Js Dunyasii');
})

var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port 

    console.log("Dinleniyor: http://%s:%s",host,port)
})
