import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CardEntities } from "../../entities/card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import React from "react";

interface formDialogProps {
  open: boolean;
  handleClose: () => void;
  data: CardEntities;
  setData: (res: CardEntities[]) => void;
}
export default function FormDialog(props: formDialogProps) {
  const { open, handleClose, data, setData } = props;

  const isDog = useSelector((state: RootState) => state.isDog);
  const [description, setDescription] = useState(data.description);
  const [name, setName] = useState(data.name);
  const addOrEdit = useSelector((state: RootState) => state.isDog.addOrEdit);

  const [title, setTitle] = useState("");

 

  const edit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name,
      description,
    });

    let url = "";
    if (isDog.isDog === "dogs") {
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
        handleClose();
      })
      .catch((error) => console.error(error));
  };
  const handleEdit = () => {
    if (addOrEdit === "edit") {
      setTitle("you may edit know");      
      edit();
    } else {
    if (isDog.isDog === "dogs"){
      setTitle("add a dog");
    }
    setTitle("add a cat")
  };
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>

          <textarea onChange={(e) => setName(e.target.value)}>
            {data.name}
          </textarea>
          <textarea onChange={(e) => setDescription(e.target.value)}>
            {data.description}
          </textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleEdit}>save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
