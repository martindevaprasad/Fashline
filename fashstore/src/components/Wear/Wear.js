import { Button } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Wear = (props) => {
  const { _id, title, subtitle, price, discount, available, image } =
    props.cloth;
    const history = useNavigate()

    const deleteHandler=async()=>{
      await  axios.delete(`http://localhost:5000/westernwears/${_id}`).then((res)=>res.data).then(()=>history("/")).then(()=>history("/western"))
    }

  return (
    <>
    <div>
    <img src={image} />
      <h5>{title}</h5>
      <h6>{subtitle}</h6>
      <p>Rs{price}</p>
      <p>{discount}</p>
      <Button LinkComponent={Link} to ={`/western/${_id}`}>update</Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
      
    </>
  );
};
 