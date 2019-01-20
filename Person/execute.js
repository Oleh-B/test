const person = require('./person');
const Personality = person.Person;

class Execute {
    static run() {
       const fourthPerson = new Personality({name: 'Bob',age: 25,sex:'male',weight:80,height:1.80});
       const fifthPerson = new Personality({name: 'Amy',age: 22,sex:'female'}); 
       const sixthPerson = new Personality();
       const array = [fourthPerson,fifthPerson,sixthPerson];
       const checkFor = array.map(person => {
           if(person.calculateIMC() === 1) {
               return Object.assign(person,{
                   checkWeight: 'overweight'
               })
           } else if(person.calculateIMC() === -1) {
               return Object.assign(person,{
                   checkWeight: 'underweight'
               })
           } else {
               return Object.assign(person,{
                   checkWeight: 'ideal weight'
               })
           }
       }).map(person => {
           if(person.isAdult() === 1) {
               return Object.assign(person,{
                   isAdult: true
               })
           } else {
            return Object.assign(person,{
                isAdult: false
            })
           }
       })
       checkFor.forEach(item => {
           console.log(item);
       })
    }
}
Execute.run();  // will throw error cause height and weight of fifth and sixth persons = 0;
