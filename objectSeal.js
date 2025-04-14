const profile = {
    name:'joy',
    age:24,
    religion: 'hinduism',
    address: 'chittagong, Bangladesh'
}
for(const propertys in profile){
    console.log(propertys);
}
Object.seal(profile);
//if you use Object.freeze then you can't delete or add  any object property.but you can update.
profile.age = 9;
console.log(profile);