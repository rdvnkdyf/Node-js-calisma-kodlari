/* HATALI KODD------------------------- */
// var express = require('express');
// var app = express();
// var fs = require("fs");
 
// var bodyParser = require('body-parser');
// var multer  = require('multer');
 
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));
 
// app.get('/index3.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index3.htm" );
// })
 
// app.post('/file_upload', function (req, res) {
//    console.log(req.files.file.name);
//    console.log(req.files.file.path);
//    console.log(req.files.file.type);
//    var file = __dirname + "/" + req.files.file.name;
   
//    fs.readFile( req.files.file.path, function (err, data) {
//       fs.writeFile(file, data, function (err) {
//          if( err ){
//             console.log( err );
//             }else{
//                response = {
//                   message:'Dosya yuklendi.',
//                   filename:req.files.file.name
//                };
//             }
//          console.log( response );
//          res.end( JSON.stringify( response ) );
//       });
//    });
// })
 
// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Dinleniyor: http://%s:%s", host, port)
// })
// module.exports=router;

//Cookie yönetimi
var express      = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
   console.log("Cookies: ", req.cookies)
})
app.listen(8081)
