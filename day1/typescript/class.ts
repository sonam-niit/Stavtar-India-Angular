export class Employee{
    empId:number;
    empName:string;

    constructor(empId:number,empName:string){
        this.empId=empId;
        this.empName=empName;
    }
    display():void{
        console.log(`Employee Id: ${this.empId}`);
        console.log(`Employee Name: ${this.empName}`);
    }
}

