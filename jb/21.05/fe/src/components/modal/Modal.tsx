import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CardEntities } from "../../entities/card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import React from "react";

interface formDialogProps {
  setOpen: ()=> void;
  data: CardEntities;
  setData: (res: CardEntities[]) => void;
}
export default function FormDialog(props: formDialogProps) {
  const {  data, setData } = props;

  const [open, setOpen] = useState(false);

  const isDog = useSelector((state: RootState) => state.isDog);
  const [description, setDescription] = useState(data.description);
  const [name, setName] = useState(data.name);
  const addOrEdit = useSelector((state: RootState) => state.isDog.addOrEdit);


  const edit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      description,
    });
    const kind = isDog.isDog

    let url = "";
    if (kind === "dogs") {
      url = `http://localhost:3000/api/dogs/${data.id}`;
    } else if (isDog.isDog === "cats") {
      url = `http://localhost:3000/api/cats/${data.id}`;
    }

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
       setOpen(false)
      })
      .catch((error) => console.error(error));
  };
  const handleEdit = () => {
    if (addOrEdit === "edit") {      
      edit();
    } else if(addOrEdit === "add") {
      handleAdd()
   } };
  return (
    <React.Fragment>
      <Dialog open={open} onClose={()=>setOpen(false)}>
       
        <DialogContent>
<DialogContentText>name:</DialogContentText>
          <textarea onChange={(e) => setName(e.target.value)}>
            {data.name}
          </textarea>
<DialogContentText>description:</DialogContentText>

          <textarea onChange={(e) => setDescription(e.target.value)}>
            {data.description}
          </textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>close</Button>
          <Button onClick={handleEdit}>save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
