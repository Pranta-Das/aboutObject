const profile = {
    name:'joy',
    age:24,
    religion: 'hinduism',
    address: 'chittagong, Bangladesh'
}
Object.freeze(profile);
//if you use Object.freeze then you can't delete or add or update any object property.
delete profile.age;
console.log(profile);