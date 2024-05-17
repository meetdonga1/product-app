import { Link } from "react-router-dom";
import React from 'react';
import styled from 'styled-components'
const Button = styled.button` background-color:black; color:
white; `;

const ProductList=({data})=>{
    return(
        data?.map((product,index)=>{
            console.log(product);
            return(
                <Link to={`/product/${product?.id}`}>
            <div className="product" key={index}>
            <div className="image-box">
            
                    <img className="images" id="image-1" src={product?.thumbnail} />
            
            </div>
            <div className="text-box">
                 <h4 className="item"  style={{color:"black"}}>{product?.brand}</h4>
                 <h2 className="item"  title={product?.title}>{product?.title?.length > 15? `${product?.title.slice(0,15)}...`:product?.title}</h2>
                 <h3 className="item"  style={{color:"black "}}>{product?.category}</h3>
                 <h4 className="item"  style={{color:"red"}}>disCount:-{product?.discountPercentage}</h4>
                <h3 className="price" > ₹ {product?.price} /-</h3>
                <p style={{fontSize:'12px ', color:"blue"}} className="description" title="description">{product?.description?.length > 44 ? `${product.description.slice(0,44)}...`:product?.description}</p>
                 <label type="number"  for="item-1-quantity" style={{color:"red"}}>Quantity:</label>
                 <input type="text"  name="item-1-quantity" id="item-1-quantity" value="1" />
                 <h1 className="item" style={{color:"black "}}>{product?.id}</h1>           
                                                                                            
                <Button type="button" name="item-1-button" id="item-1-button">ADD TO ARD</Button>

            </div>
          </div>
          </Link>
            )
        })
    )
}

export default ProductList