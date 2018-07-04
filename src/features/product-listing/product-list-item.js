import React from 'react';
import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';
import RemoveAllBtn from './removeall-btn';
import {Image} from 'react-bootstrap';
import './products.css';

export default function ProductListItem(props){
    return (<div className='list-item'>
        <h3 className='pName'>{props.product.name}</h3>
        <Image className='imgH'
        title={props.product.name}
        src={`/products/${props.product.image}`}
        alt={props.product.alt}
         thumbnail/>
            <h2 className='pName'> ₹ {props.product.price}</h2>
            <div>
               <AddBtn cartItem={props.cartItem} 
                        product={props.product}
                        addToCart={props.addToCart}
                        price={props.price}
                />

                {
                    props.cartItem
                    ? <RemoveBtn cartItem={props.cartItem} 
                    product={props.product}
                    removeFromCart={props.removeFromCart}
                    price={props.price}
            /> 
            : null
                }
               {
                    props.cartItem
                    ? <RemoveAllBtn cartItem={props.cartItem} 
                    product={props.product}
                    removeAllFromCart={props.removeAllFromCart}
                  
            /> 
            : null
                }
               
            </div>
    </div>)
}