import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const ProductsDetails = () => {
  const {id} = useParams();
  const [product,setProduct] = useState({});

  useEffect(()=>{
    fetch(`https://giga-gadgets-server-dt8gf3zh1-mdmitulhossen.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error(error));
  },[id])



console.log(product)

const {image,brandName,description,price,rating,type} = product || {};


  return (
  <div className="min-h-screen flex items-center justify-center">
      <div className="flex-col gap-6   lg:flex-row w-3/4 mx-auto flex border items-center p-5  shadow-xl">
    <img
        src={image}
        className="" />
        <div className="space-y-5">
        <h1 className="text-5xl font-bold">{brandName}</h1>
        <p className="py-6 w-3/4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <p><b>Price:</b><span> {price}</span></p>
          <p><b>Rating:</b><span> {rating}</span></p>
          <p><b>Type:</b><span> {type}</span></p>
        </div>
      </div>
  </div>
  </div>
  );
};

export default ProductsDetails;
