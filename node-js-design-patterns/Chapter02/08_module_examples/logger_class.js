"use strict";

class Logger{
    constructor(name){
        this.name=name;
    }
   log(message){
       console.log(`[${this.name}] ${message}`);
   }
   info(message){
       this.log(`ìnfo:${message}`);
   }
   verbose(message){
       this.log(`verbose:${message}`);
   }
}

module.exports=Logger;