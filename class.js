class Instructor {
    name;
    designation = 'web course Instructor'
    team = 'web Team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start support ${time}`);
        
    }
}

const amir = new Instructor('amir', 'dhaka');
console.log(amir);
amir.startSupportSession('9.0');

const solaiman = new Instructor('solaiman', 'pabna');
console.log(solaiman);