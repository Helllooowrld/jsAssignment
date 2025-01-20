class person    //class initialization
{
  constructor(name,age)     //constructor
  {
    this.name=name  //name variable
    this.age=age    //age variable
  }
  introduction()    //method1
  {
   console.log(`My name is ${this.name} and I am ${this.age} years old.`)  
  }
}
const intro= new person("Aayushya Shrestha","20")   //creation of object
intro.introduction();   //method call