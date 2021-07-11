/* exec metodu */
// const fs=require("fs");
// const child_process=require('child_process');

// for(var i=0; i<4; i++) {
//     var workerProcess = child_process.exec('node destek.js '+i,function 
//        (error, stdout, stderr) {
       
//        if (error) {
//           console.log(error.stack);
//           console.log('Hata Kodu: '+error.code);
//           console.log('Sinyal alindi: '+error.signal);
//        }
//        console.log('stdout: ' + stdout);
//        console.log('stderr: ' + stderr);
//     });
  
//     workerProcess.on('exit', function (code) {
//        console.log('Alt islem exit kodu ile cikti '+code);
//     });
//  }

/* SPAWN metodu */
// const fs=require("fs");
// const child_process=require('child_process');

// for(var i=0;i<3;i++){
//     var workerProcess=child_process.spawn('node',['destek.js',i])
    
//     workerProcess.stdout.on('data',function(data){
//         console.log('stdout: '+data);
//     });

//     workerProcess.stderr.on('data',function(data){
//         console.log('stderr: '+data);
//     });

//     workerProcess.on('close',function(code){
//         console.log('Alt islem exit kodu ile cikti..... '+code);
//     });
// }

/* Fork metodu() */
const fs=require('fs');
const child_process=require('child_process');
const { worker } = require('cluster');

for(var i=0;i<3;i++){
    var worker_process=child_process.fork('destek.js',[i]);

    worker_process.on('close',function(code){
        console.log('Alt islem exit kodu ile cikti....'+code);
    });
}

