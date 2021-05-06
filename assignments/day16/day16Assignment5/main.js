import {Person} from './Person.js';
import {Employee} from './Employee.js';

let employees = [ new Employee('Technical','Delhi'),
                       new Employee('Technical', 'Mumbai'),
                       new Employee('HR' , 'Kolkata')
                ]; 

let persons = [ new Person('Saurabh','Gupta'),
                new Person('Tjainder', 'Singh'),
                new Person('Kuldeep' , 'Singh')
              ]; 

persons.forEach(x => {
       const tr = document.createElement('tr');
       tr.innerHTML = `
       <td>${x.firstName}</td>
       <td>${x.secondName}</td>
       `;
       document.querySelector('.table-1').appendChild(tr);
});

employees.forEach(x => {
       const tr = document.createElement('tr');
       tr.innerHTML = `
       <td>${x.department}</td>
       <td>${x.location}</td>
       `;
       document.querySelector('.table-2').appendChild(tr);
});

