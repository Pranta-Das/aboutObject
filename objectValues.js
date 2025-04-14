const profile = {
    name:'joy',
    age:24,
    religion: 'hinduism',
    address: 'chittagong, Bangladesh'
}

const values = Object.values(profile);
console.log(values);
for(const value of values){
    console.log(value);
}