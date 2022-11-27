import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wear } from "./Wear";
import Card from '@mui/material/Card';

const URL = "http://localhost:5000/westernwears/western";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

export const Wears = () => {
  const [wears, setWears] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setWears(data.westernwears));
  }, []);
  console.log(wears);
  return (
    <div>
     
        {wears &&
          wears.map((wears, i) => (
            <div className="d-flex" key={i}>
              <Wear cloth={wears} />
              {/* <h1>{wears.title}</h1> */}
            </div>
          ))}


   
    </div>
  );
};
