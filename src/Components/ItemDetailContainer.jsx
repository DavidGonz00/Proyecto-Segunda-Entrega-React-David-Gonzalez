import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productosData from './Data/Products.json'; 
import Counter from './Counter/Counter';
import '../Components/style/StyleProduct.css';

const ItemList = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const foundProducto = productosData.find(item => item.id.toString() === productId);
        if (!foundProducto) {
          throw new Error('Producto no encontrado');
        }
        setProducto(foundProducto);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducto();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <div className="card" >
        <img src={producto.image} className="card-img" alt={producto.name} />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-description">{producto.description}</p>
          <p className="card-price">Precio: ${producto.price}</p>
          <p className="card-stock">Stock: {producto.stock}</p>
          <Counter stock={producto.stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemList;
