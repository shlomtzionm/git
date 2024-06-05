import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CardEntities } from "../../entities/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState, useEffect } from "react";
import React from "react";
import { isOpen as setIsOpen } from "../../features/isDogSlice"; 

interface FormDialogProps {
  data?: CardEntities;
  setData?: (res: CardEntities[]) => void;
}

export default function FormDialog(props: FormDialogProps) {
  const { data, setData } = props;
  const dispatch = useDispatch();

  const isDog = useSelector((state: RootState) => state.isDog);
  const [description, setDescription] = useState(data?.description || "");
  const [name, setName] = useState(data?.name || "");
  const addOrEdit = useSelector((state: RootState) => state.isDog.addOrEdit);
  const isOpen = useSelector((state: RootState) => state.isDog.isOpen);

  useEffect(() => {
    if (data) {
      setDescription(data.description);
      setName(data.name);
    }
  }, [data]);

  const edit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ name, description });
    const kind = isDog.isDog;

    let url = "";
    if (kind === "dogs") {
      url = `http://localhost:3000/api/dogs/${data?.id}`;
    } else if (kind === "cats") {
      url = `http://localhost:3000/api/cats/${data?.id}`;
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
        if (setData) {
          setData(result);
        }
        dispatch(setIsOpen(false));
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = () => {
    if (addOrEdit === "edit") {
      edit();
    } else if (addOrEdit === "add") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ name, description });
    const kind = isDog.isDog;

    let url = "";
    if (kind === "dogs") {
      url = `http://localhost:3000/api/dogs`;
    } else if (kind === "cats") {
      url = `http://localhost:3000/api/cats`;
    }

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (setData) {
          setData(result);
        }
        dispatch(setIsOpen(false));
        setName("");
        setDescription("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <React.Fragment>
      <Dialog open={isOpen}>
        <DialogContent>
          <DialogContentText>Name:</DialogContentText>
          <textarea value={name} onChange={(e) => setName(e.target.value)} />
          <DialogContentText>Description:</DialogContentText>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(setIsOpen(false))}>Close</Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
