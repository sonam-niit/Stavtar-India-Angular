// let fullName:string="Sonam Soni";
// const pi:number=3.14;

// console.log(`Full Name: ${fullName}`);
// console.log('Pi Value '+pi);

const user:{name:string,email:string,age:number,country:string} ={
    name:"John Doe",
    email:"john@gmail.com",
    age:30,
    country:"India"
}
for(let key in user){
    console.log(`${key}: ${user[key]}`);
    
}
