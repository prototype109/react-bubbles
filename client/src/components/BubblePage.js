import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const [colorChange, setColorChange] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        console.log('RES FROM BUBBLE_PAGE: ', res);
        setColorList(res.data);
      })
      .catch(err => console.log('ERROR: ', err));
  }, [colorChange])

  return (
    <>
      <ColorList colors={colorList} 
                 updateColors={setColorList} 
                 change={colorChange}
                 checkChange={setColorChange}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
