const profile = {
    name:'joy',
    age:24,
    religion: 'hinduism',
    address: 'chittagong, Bangladesh'
}
Object.seal(profile);
//if you use Object.freeze then you can't delete or add  any object property.but you can update.
profile.age = 9;
console.log(profile);