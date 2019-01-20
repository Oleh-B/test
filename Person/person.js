class Person {
    constructor(options = {}){
        Object.assign(this, {
            name : '', 
            age : 0,
            sex : 'male',
            weight:0,
            height:0,
        }, options);

        this.createDNI();
    }

    calculateIMC() {
       if(this.height === 0 || this.weight === 0) throw new Error('Person weight and height cannot be equal 0')
       const idealWeight = Math.round(this.weight / Math.pow(this.height,2));
       if(idealWeight < 20) {
           return -1;
       } else if(idealWeight > 20 && idealWeight <= 25) {
           return 0
       } else {
            return 1
       }
    }

    isAdult() {
        return this.age >= 18 ? 1 : 0;
    }

    checkSex(sex) {
       if(this.sex === sex) {
           return true;
       } else {
            Object.assign(this,{sex:'male'})
            return false
       }
    }
    
    toString() {
        const objectInfo = `Name: ${this._name}; Age: ${this._age}; Gender: ${this._sex}; Weight: ${this._weight}; Height: ${this._height}; DNI: ${this.DNI}.`
        return objectInfo;
    }

    createDNI() {
        const dni = parseInt(Math.random().toString().slice(2,10));
        return Object.assign(this,{DNI: dni})
    }
    
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = String(newName);
    }

    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = Number(newAge);
    }

    get sex() {
        return this._sex;
    }
    set sex(sex) {
        this._sex = String(sex);
    }

    get weight() {
        return this._weight;
    }
    set weight(weight) {
        this._weight = Number(weight);
    }

    get height() {
        return this._height;
    }
    set height(height) {
        this._height = Number(height);
    }
}
const firstPerson = new Person();
const secondPerson = new Person({name:'John',age:35,sex:'male'})
const thirdPerson = new Person({name:'Jane',age:30,sex:'female',weight:55,height:1.60});

console.log("First person test: ",firstPerson);
console.log("Second person test: ",secondPerson);
console.log("Third person test: ",thirdPerson);
console.log(thirdPerson.isAdult())
console.log(thirdPerson.checkSex('female'))
console.log(thirdPerson.toString())
console.log(thirdPerson.calculateIMC())
console.log(firstPerson.calculateIMC()) // will be error cause height and weight = 0
console.log(secondPerson.calculateIMC()) // will be error cause height and weight = 0

module.exports = {
    Person
}

