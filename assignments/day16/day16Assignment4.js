class Employee {

    constructor(id , name , roll , department , projects ){
        this.id = id;
        this.name = name;
        this.roll = roll;
        this.department = roll;
        this.projects = projects;
    }
}

class Person{
    constructor( name ){
        this.name = name;
    }
}

const dbsPayroll = new Person('john');
const intranetDeployment = new Person('Mark');

const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ]);


console.log(john);
console.log(jane);