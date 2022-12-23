import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  empsArray:any[] =  [ 
    { empno : 10256,  ename :  "Scott", job : "Manager", sal : 45000, deptno : 10},
    { empno : 10236,  ename :  "James", job : "Analyst", sal : 4500, deptno : 2},
    { empno : 13216,  ename :  "Ravi", job : "Analyst", sal : 4500, deptno : 2},
    { empno : 10246,  ename :  "Raju", job : "Sr. Manager", sal : 50000, deptno : 23},
    { empno : 10356,  ename :  "Hari", job : "Devloper", sal : 39900, deptno : 8},
    { empno : 10256,  ename :  "Roy", job : "Developer", sal : 39900, deptno : 8}
    ];

}
