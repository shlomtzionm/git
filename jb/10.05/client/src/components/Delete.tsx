import { useDispatch } from "react-redux";
import { Update } from "../features/updateSlice";

interface DeleteProps{
    name:string
}

export const Delete = (props:DeleteProps) => {
    const {name} = props
const dispatch = useDispatch()

    const handleDelete= ()=>{
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": name
});

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/grades", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

 dispatch(Update(true))
 dispatch(Update(false)) 
    }
    return(<>
    <button onClick={handleDelete}>delete</button>
    </>)
}