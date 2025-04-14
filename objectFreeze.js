const profile = {
    name:'joy',
    age:24,
    religion: 'hinduism',
    address: 'chittagong, Bangladesh'
}
Object.freeze(profile);
delete profile.age;
console.log(profile);