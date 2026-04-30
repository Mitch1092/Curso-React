import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SaludoComponent from '../components/SaludoComponent'
import CardChildren from '../components/CardChildren'
import SaludoComponentProps from '../components/SaludoComponentProps'
import CompProps from '../components/CompProps'
import CompChlidren from '../components/CompChlidren'
import UsuarioComponent from '../components/UsuarioComponent'
import ButtonActionComponent from '../components/ButtonActionComponent'
import ListaComponent from '../components/ListaComponent'
import ProductoComponent from '../components/ProductoComponent'
import MangaComponent from '../components/MangaComponent'

export default function AppView() {

  const [usuario, setUser] = useState()
  const [contador, addCont] = useState(0)

  const [products, setProducts] = useState([
    {id: 1, name: "Laptop", precio: 1500},
    {id: 2, name: "Celular", precio: 1000},
    {id: 3, name: "Monitor", precio: 2500},
  ])
  
  const [mangas, setMangas] = useState([
    {id: 1, title: "One Piece", precio: 200},
    {id: 2, title: "Dorohedoro", precio: 100},
    {id: 3, title: "Bleach", precio: 2500},
    {id: 4, title: "Naruto", precio: 400},
  ])
  //setUsuario("usuario")

  const parametro=2
  const user = {
    nombre: "Michael", edad: "22"
  }
  const user2 = {
    nombre: "Alberto", edad: "20"
  }
  const handleClick = () => {
    console.log("me has presionado")
    setUser("Michael")
    addCont(contador+1)
    setTrue(!isTrue)
  }
  const handleSelection =(elemento) =>{
    console.log("Evento: ",elemento)
  }

  
  const [isTrue, setTrue] = useState(false)
  // if(isTrue){
  //   return <div>Soy verdadero</div>
  // }
  
  useEffect(() => {
    console.log("Este es el useEffect ejecutándose")
  },[isTrue])


  return (
    <>
        <h1 className='text-5xl'>App View</h1>

        
        {
          isTrue ? (
            <h1>Es verdadero</h1>
          ) :  (
            <h1>Es falso</h1>
          )
        }
        {
        isTrue &&(
          <h1>Is true</h1>
        )
        }

        <SaludoComponent nombre={"xd"} apellido={"lol"}/>
        <SaludoComponent nombre={"Michael"} apellido={"Villalón"}/>
        <SaludoComponentProps nombre={"Michael"} apellido={"Villalón"}/>
        <CardChildren titulo={"titulo xd"}>
          
          <p>Hola soy el children</p>
        </CardChildren>
        <CompProps boton={"Soy un botón"} titulo={"Componente props"}/>
        <CompChlidren>
          <h1>Titulo importado con children</h1>
          <button className='button-simple'>Soy un botón importado xd</button>
        </CompChlidren>

        <br/>
        <UsuarioComponent {...user}/>
        <UsuarioComponent {...user2}/>

        <ButtonActionComponent onClick={handleClick}/>

        <ListaComponent onSeleccionar={handleSelection}/>

        <h1>{usuario}</h1>
        <h1>{contador}</h1>

        <ProductoComponent name = {"Tenis"} precio = {25} id = {3}/>
        {
          products.map((producto) => (
              <ProductoComponent
                name = {producto.name}
                precio = {producto.precio}
                id = {producto.id}
              />
          )
        )
        }
        
        {
          mangas.map((manga) => (
              <MangaComponent 
                title = {manga.title}
                precio = {manga.precio}
                id = {manga.id}
              />
          )
        )
        }
            


        <Link to={'/otra'}>
            Ir a otra página
        </Link>
        <Link to={`/parametro/${parametro}`}> {/*Nótese las comillas distintas*/}
            Ir a param
        </Link>
    </>
  )
}
