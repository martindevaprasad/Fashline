import React, { useState } from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';


const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Addwear = () => {

  const history = useNavigate
  const [inputs, setInputs] = useState({
    title: "",
    subtitle: "",
    price: "",
    discount: "",
    image: ""
  });


  const sendRequest = async () => {
    await axios.post("http://localhost:5000/westernwears", {
      title: String(inputs.title),
      subtitle: String(inputs.subtitle),
      price: Number(inputs.price),
      discount: String(inputs.discount),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res=>res.data)
    
  };

  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value]
    }));
    // console.log(e.target.name,"value",e.target.value)
  };
  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(()=>history('/western'))
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="text-center mt-4 d-flex justify-content-center ">
          <FormControl variant="standard">
            <TextField
              value={inputs.title}
              id="outlined-basic"
              label="Title"
              name="title"
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <div className="text-center mt-4 d-flex justify-content-center ">
          <FormControl variant="standard">
            <TextField
              value={inputs.subtitle}
              id="outlined-basic"
              label="Subtitle"
              name="subtitle"
              variant="outlined"
              onChange={handleChange}
              
            />
          </FormControl>
        </div>
        <div className="text-center mt-4 d-flex justify-content-center ">
          <FormControl variant="standard">
            <TextField
              value={inputs.price}
              id="outlined-basic"
              type="number"
              name="price"
              label="Price"
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
        </div>

        <div className="text-center mt-4 d-flex justify-content-center ">
          <FormControl variant="standard">
            <TextField
              type="text"
              value={inputs.discount}
              id="outlined-basic"
              name="discount"
              label="Discount"
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
        </div>

        <div className="text-center mt-4 d-flex justify-content-center ">
          <FormControl variant="standard">
            <TextField
              value={inputs.image}
              id="outlined-basic"
              name="image"
              label="Image"
              variant="outlined"
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <div className="text-center mt-4 d-flex justify-content-center ">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
        </div>
        <div className="text-center mt-4">
          <Button variant="contained" type="submit">
            {" "}
            Add Product
          </Button>
        </div>
      </form>
    </>
  );
};
