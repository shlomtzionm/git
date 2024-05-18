import { useDispatch } from "react-redux";
import { deleteName } from "../features/gradesSlice";

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

dispatch(deleteName(name))
    }
    return(<>
    <button onClick={handleDelete}>delete</button>
    </>)
}