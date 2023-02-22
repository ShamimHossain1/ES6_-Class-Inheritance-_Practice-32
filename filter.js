const numbers = [12, 5, 23, 45, 11, 18, 6, 8657, 45 ,5 ]
const bigNumber = numbers.filter(number => number > 20)
console.log(bigNumber);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const ex = products.filter(product => product.price > 50000);
console.log(ex)