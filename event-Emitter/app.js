var events=require('events');
var eventEmitter=new events.EventEmitter();

//listener #1 
var listner1=function listner1(){
    console.log('listner1 calisti');
}

//listner #2 
var listner2=function listner2(){
    console.log('listner2 calisti...');
}

//Baglanti olayını listner1 fonksiyonunu ile baglama 
eventEmitter.addListener('connection',listner1);

//Baglantı olayını listner2 fonksiyonunu ile baglama
eventEmitter.on('connection',listner2);

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+' Listner(s) baglı olayı dinliyor....');

//Baglantı olayını tetikle 
eventEmitter.emit('connection');

//listner1 fonksiyonunun baglantısını kaldır.
eventEmitter.removeListener('connection',listner1);
console.log('Listner1 artik dinlenmiyor...');

//Baglantı olayını tetikle 
eventEmitter.emit('connection');

eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+' Listner(s) baglı olayını dinliyor....');

console.log('Program Bitti');