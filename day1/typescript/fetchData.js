// async function fetchData():Promise<void>{
//     try {
//         const resp =await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const json =await resp.json();
//         console.log(json);
//     } catch (error) {
//         console.log(error);
//     }
// }
const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
};
fetchData();
