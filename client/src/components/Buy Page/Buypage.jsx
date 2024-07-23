import React, { useEffect, createContext, useState } from "react";

// import CategoryDiv from "./CategoryDiv";
import MainProductDiv from "./MainProductDiv";
import axios from "axios";
import { useParams } from "react-router-dom";
export const productContext = createContext(null);

const Buypage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getProducts/${productId}`)
      .then((response) => {
        // console.log(response.data[0]);
        if(response.data) setProduct(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);


  return (
    <>
        <productContext.Provider value={product}>
        {/* <CategoryDiv /> */}
        {/* <ProductDiv /> */}
        <MainProductDiv />
        </productContext.Provider>
    </>
  )
}

export default Buypage;