import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productosData from './Data/Products.json'; 
import { Link } from 'react-router-dom';
import '../Components/style/StyleProduct.css';

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const { categoryId } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProductos(productosData);
      } catch (error) {
        setError(error);
      }
    };
    
    fetchData();
  }, []); 

  
  const filteredProductos = categoryId ? productos.filter(producto => producto.category === categoryId) : productos;

  return (
    <div className="item-list-container-list">
      {error && <p>Error: {error.message}</p>}
      {filteredProductos.map((producto, index) => (
        <div key={index} className="card-list" style={{ width: "18rem" }}>
          <img src={producto.image} className="card-img-list" alt="{producto.name}" />
          <div className="card-body-list">
            <h5 className="card-title-list">{producto.name}</h5>
            <p className="card-description-list">{producto.description}</p>
            <p className="card-price-list">Precio: ${producto.price}</p>
            <p className="card-stock-list">Stock: {producto.stock}</p>
            {/* Agrega aquí cualquier otra información que desees mostrar */}
            <Link to={`/product/${producto.id}`} className="btn btn-primary">Ver más</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
