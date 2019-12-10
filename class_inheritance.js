class Mammal{
    gender='male'

  printMyGender = () => {
    console.log(this.gender)
  }
}

class Person extends Mammal {
    name='Austin'

  printMyName = () => {
    console.log(this.name)
  }
}

const person = new Person();
person.printMyName();
person.printMyGender();
