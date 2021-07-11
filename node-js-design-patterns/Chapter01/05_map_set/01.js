const profiles=new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');

console.log(profiles.size);//3
console.log(profiles.has('twitter'));//true
console.log(profiles.get('twitter'));//@adalovelace
console.log(profiles.has('youtube'));//false 
profiles.delete();
console.log(profiles.has('facebook'));//false 
console.log(profiles.get('facebook'));//undefined 
for (let entry of profiles){
    console.log(entry);
}
