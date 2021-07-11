var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/javatpoint";
MongoClient.connect(url, function(err, db) {  
    if (err) throw err;  
    var myobj = { name: "Ajeet Kumar", age: "28", address: "Delhi" }; 
    var dbo=db.db("javatpoint"); 
    dbo.collection("employees").insertOne(myobj, function(err, res) {  
    if (err) throw err;  
    console.log("1 record inserted");  
    db.close();  
    });  
    });  