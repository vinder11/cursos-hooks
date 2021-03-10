import React from 'react';

const Product = (props) => {
  const { product, handleAddToCart } = props;
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.title} />
      <div className='Product-item-info'>
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
      </div>
      <button type='button' onClick={() => handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
