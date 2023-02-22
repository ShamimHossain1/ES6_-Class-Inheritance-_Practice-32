const numbers = [12, 56, 87, 44];
const half = numbers.map( n => n/2)
const thirds = numbers.map( n => n/3)
// console.log(half);
// console.log(thirds);

const friends = ['am', 'jam', 'kathal', 'kola'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters); 
const nameLeanth = friends.map(friend => friend.length);
console.log(nameLeanth);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
const items = products.map(product => product.name)
const prices = products.map(hoga => hoga.price)
console.log(prices);