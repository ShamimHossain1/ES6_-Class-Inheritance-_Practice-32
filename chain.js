const users = [ {id: 1, name: 'abul', job: 'doctor'}]

//console.log(users[0].name);


const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'abul', job: 'bot'}
    ]
}
const firsJob = data.data[0].job;
//console.log();
const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
    street: {
        first: '35/A kochukhet lane',
        second: 'third-f',
        third: 'right-s'
    },
    postOffice: 'cantonment',
    city: 'Dhaka'
    }
}

const userFloor = user.address.street.second
console.log(userFloor);