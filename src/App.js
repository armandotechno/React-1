import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'



function App() {

  //crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa Blanca', precio: 60 },
    { id: 3, nombre: 'Camisa Negra', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 }
  ]);


  //obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual' 
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
