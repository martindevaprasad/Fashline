import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";

export const Weardetail = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const id = useParams().id;
  console.log(id);
 
    const fetchHandler = async () => {
    const res =  await axios
        .get(`http://localhost:5000/westernwears/${id}`)
        // .then((res) => res.data).then(data=>setInputs(data.wear));
        const data = await res.data;
        console.log(data)
        return data
    };
    useEffect(() => {
    fetchHandler().then(data=>setInputs(data.westwear));
  }, [id]);
  console.log(inputs)

  const putRequest = async () => {
    const res =  await axios
        .put(`http://localhost:5000/westernwears/${id}`,{
          title: String(inputs.title),
          subtitle: String(inputs.subtitle),
          price: Number(inputs.price),
          discount: Number(inputs.discount),
          image: String(inputs.image),
          available: Boolean(checked)
        }).then(res=>res.data)
        
    };
  //   useEffect(() => {
  //     putRequest().then(data=>setInputs(data.westwear));
  // }, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    putRequest()
 
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value]
    }));
  };
 
  return (
    <div>
     { inputs && ( <form onSubmit={handleSubmit}>
        <div className="text-center mt-4 d-flex justify-content-center ">
          <FormControl variant="standard">
            <TextField
              value={inputs.title}
              id="outlined-basic"
              label={inputs?"":"title"}
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
              type="number"
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
            Update Product
          </Button>
        </div>
      </form>)}
    </div>
  );
};
