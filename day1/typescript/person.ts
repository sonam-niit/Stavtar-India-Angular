interface Person{
    name:string,
    age:number,
    isEmployee:boolean;
}

const employees:Person[]=[
    {name:'Alex',age:45,isEmployee:true},
    {name:'Bob',age:26,isEmployee:true},
    {name:'Catty',age:58,isEmployee:false},
    {name:'Devid',age:27,isEmployee:true},
]

const workingEmps:Person[]= employees.filter(emp=>emp.isEmployee==true);
console.log(workingEmps);
