"use strict";

function asyncOperation(callback){
    process.nextTick(callback);
}

function task1(callback){
    asyncOperation(()=>{
        console.log("Task 1 ");
        task2(callback);
    });
}

function task2(callback){
    asyncOperation(()=>{
        console.log("Task 2");
        task3(callback);
    });
}

function task3(callback){
    asyncOperation(()=>{
        console.log("Task 3");
        callback();
    })
}

task1(()=>{
    console.log('tasks 1, 2 and 3 executed');
});