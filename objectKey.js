const mangoSeller = {
    name:'Pranto',
    age:25,
    nationality: 'Bangladeshi'
};

const keys = Object.keys(mangoSeller);
console.log(keys);
for(const key of keys){
    console.log(key, mangoSeller[key]);
}

