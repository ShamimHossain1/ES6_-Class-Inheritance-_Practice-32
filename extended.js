class TeamMember {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thankyou for you feedback`)
    }
}


class Instructor extends TeamMember {
    name;
    designation = 'web course Instructor'
    team = 'web Team'
    location;
    constructor(name, location){
       super(name, location);
    }
    startSupportSession(time){
        console.log(`start support ${time}`);
        
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
   
}
class Developer extends TeamMember{
    
    designation = 'web course Instructor'
    team = 'web Team'
    tech;
    
    constructor(name, location, tech){
        super(name,location)
        this.tech = tech
    }
    startSupportSession(feature){
        console.log(`start support ${feature}`);
        
    }
    createQuiz(version){
        console.log(`please create quiz for module ${version}`)
    }
    
}
class JobPlacement extends TeamMember{
    
    designation = 'job placement'
    team = 'web Team'
    tech;
    
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech
    }
    job(feature){
        console.log(`start support ${feature}`);
        
    }
    prep(version){
        console.log(`please create quiz for module ${version}`)
    }
    provideFeedback(){
        console.log(`${this.name} thankyou for you feedback`)
    }
}

alia = new Developer('alia', 'dhaka', 'gg' )
console.log(alia);
alia.provideFeedback();

const rose = new JobPlacement ('rose', 'seol', 'KR')
console.log(rose);