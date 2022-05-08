import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { product } from "../../app/models/product";
import ProductList from "./ProductList";
interface Props{
    products:product[];
    addProducts:()=>void;
}

export default function Catalog()
{
    const[products,setProducts]=useState<product[]>([]);

  useEffect(()=>{
    fetch("http://localhost:5000/api/products")
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])

    return(
    <>
    <ProductList products={products}/>    
    </> 
    )
}