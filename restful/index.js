/* LİST USER KULLANICI LİSTELEME */
// var express=require('express');
// var app=express();
// var fs=require('fs');

// app.get('/listUsers', function (req, res) {
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//         console.log( data );
//         res.end( data );
//     });
//  })
  
//  var server = app.listen(8081, function () {
  
//    var host = server.address().address
//    var port = server.address().port
  
//    console.log("Dinleniyor: http://%s:%s", host, port)
  
//  })

/* addUser (Kullanıcı Ekleme) */
// var user = {
//     "user4" : {
//        "name" : "mohit",
//        "password" : "password4",
//        "profession" : "teacher",
//        "id": 4
//     }
//  }
  
//  app.post('/addUser', function (req, res) {
//     // Oncelikle mevcut kullanicilari oku
//     fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//         data = JSON.parse( data );
//         data["user4"] = user["user4"];
//         console.log( data );
//         res.end( JSON.stringify(data));
//     });
//  })
  
//  var server = app.listen(8081, function () {
  
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Dinleniyor: http://%s:%s", host, port)
  
//  })

/* Ayrıntı gösterme */
// var express = require('express');
// var app = express();
// var fs = require("fs");
 
// app.get('/:id', function (req, res) {
//    //Mevcut kullanicilari oku
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       var users = JSON.parse( data );
//       var user = users["user" + req.params.id]; //sadece bir kullanici
//       console.log( user );
//       res.end( JSON.stringify(user));
//    });
// })
 
// var server = app.listen(8081, function () {
 
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Dinleniyor: http://%s:%s", host, port)
 
// })

/* deleteUser (Kullancı Sil) */
var express = require('express');
var app = express();
var fs = require("fs");
 
var id = 2; //silinecek kayit
 
app.delete('/deleteUser', function (req, res) {
 
   // Mevcut kullanicilar
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("Dinleniyor: http://%s:%s", host, port)
 
})