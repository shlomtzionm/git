async function get():Promise<object>{
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    let data = await response.json()
    console.log(data)
    return data
}

async function fetchOneData(id:number):Promise<object>{
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
let data = await response.json()
console.log(data)
return data

}
async function deleteItem(id:number){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method: "DELETE"
    })
    let data = await response.json()
    console.log(data)
    return data
}

async function postItem(userId:number, title:string, completed:boolean):Promise<object> {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
        method: "POST",
        body: JSON.stringify({

            userId,
            title,
            completed,
        })
    });
    let data = await response.json();
    console.log(data); 
    return data
}

async function patchItem(id:number, key:string, value:string|boolean){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method: "PATCH",
        body: JSON.stringify({
            id,
           [ key]: value, 
           
        })
    })
    let data = await response.json()
    console.log(data)
return data
}

async function putItem(id:number, title:string , completed: boolean,userId:number){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method: "PUT",
        body: JSON.stringify({
            userId,
            title,
            completed,

        })
    })
    let data = await response.json()
    console.log(data)
    return data
}


async function callAll():Promise<object> {
    return await Promise.all([get(), fetchOneData(2),deleteItem(4)])
    }

    callAll()