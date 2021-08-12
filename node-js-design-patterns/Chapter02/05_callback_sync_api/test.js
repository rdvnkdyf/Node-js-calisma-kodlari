"use strict";

const fs=require('fs');
const cache={};
function consistentReadSync(filename){
    if(cache[filename]){
        return cache[filename];
    }else{
        cache[filename]=fs.readFileSync(filename,'utf8');
        return cache[filename];
    }
}

console.log(consistentReadSync('data.txt'));
console.log(consistentReadSync('data.txt'));