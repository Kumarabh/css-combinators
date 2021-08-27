function App () {

    this.name = 'John Doe';
    this.age = '32';
    this.dob = '22-08-1995';

    this.customerDetails = () =>  ({name: this.name, age: this.age, dob: this.dob})   

}
export {App};