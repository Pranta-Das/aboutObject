const profile = {
    name:'joy',
    age:24,
    religion: 'hinduism',
    address: 'chittagong, Bangladesh'
}
delete profile.age;
console.log(profile);

profile.age = '45';
console.log(profile);

profile.name='joy das';
console.log(profile);