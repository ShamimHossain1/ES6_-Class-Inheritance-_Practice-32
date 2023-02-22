const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

const elementHTML = `
<div>
    <h1> Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0 , 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`
console.log(elementHTML);

const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;