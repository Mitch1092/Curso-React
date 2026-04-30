import React from "react";
import { Link, useParams } from 'react-router-dom'
import FormEditProduct from "../components/FormEditProduct";
import { useState } from "react";

export default function EditProductView() {
  const parametro = useParams();
  const id = parametro.id;
  const [product, setProduct] = useState({})
  

  return (
    <>
      <h1 className="text-5xl font-bold">Editar Producto</h1>

      <Link
        to={"/products"}
        className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded text-white font-bold my-10"
      >
        Volver a Productos
      </Link>

      <FormEditProduct id={id} product={product} />
    </>
  );
}