//events module ekle 
const EventEmitter = require('events');
var events=require('events');

/*
//Bir eventEmitter nesnesi üret 
var eventEmitter=new events.EventEmitter();

//Bir olay ile bir olay işleyicisi(event handler) bağlamak için 
eventEmitter.on('eventname',eventHandler);

//Bir olayı tetiklemek için 
event.EventEmitter.emit('eventName');
*/

// Bir eventEmitter nesnesi yarat
var eventEmitter = new events.EventEmitter();
 
// Bir olay isleyicisi yarat
var connectHandler = function connected() {
   console.log('Baglanti basarili.');
  
   // veri_alindi olayını tetikle 
   eventEmitter.emit('veri_alindi');
}
 
// Baglantı olayını bagla
eventEmitter.on('connection', connectHandler);
 
// Eszamansız bir fonksiyonla veri_alindi olayını bagla
eventEmitter.on('veri_alindi', function(){
   console.log('veri basarili bir sekilde alindi.');
});
 
// Baglanti olayını tetikle
eventEmitter.emit('connection');
 
console.log("Program Bitti.");