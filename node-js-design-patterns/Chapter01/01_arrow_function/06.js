"use strict";

function DelayedGreeter(name){
    this.name=name;
}

DelayedGreeter.prototype.greet=function(){
    setTimeout( () => console.log('Hello '+this.name),500);
};

const greeter=new DelayedGreeter('World');
greeter.greet();//will print "Hello World"

