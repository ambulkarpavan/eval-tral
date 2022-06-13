import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";
import { getProductApi } from "../../../store/product/product.actions";

const Product = () => {
  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state) => state.prodt);

  useEffect(() => {
    if(data.length === 0){
      dispatch(getProductApi());
    }
  },[dispatch])
  const id = null;
  return (
    <div>
  <div> <h1>Products</h1></div>
    <div data-cy={`product-${id}`}
    style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr 1fr 1fr",
    gap:"20px",
    padding:"20px"
  
  
  }}
    >
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
     
      {!loading && data.map((prodt) =>(
        <div 
        style={{
          border:"1px solid",
          borderRadius:"10px"
        }}
        >
 <h3 data-cy="product-name">{prodt.name}</h3>
 <h6 data-cy="product-description">{prodt.description}</h6>
 <button data-cy="product-add-item-to-cart-button">Add to cart</button>
 <div>
   <button data-cy="product-increment-cart-item-count-button">+</button>
   <span data-cy="product-count"></span>
   <button data-cy="product-decrement-cart-item-count-button">-</button>
   <button data-cy="product-remove-cart-item-button">Rmove</button>
 </div>
 </div>
      ))}
     
    </div>
    </div>
  );
};

export default Product;
