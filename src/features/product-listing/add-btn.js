import React from 'react';
import {Button} from 'react-bootstrap';

export default function AddButton(props){
   return <Button bsStyle="success" onClick={()=>(props.addToCart(props.product))}>Add To Cart({
        (props.cartItem && props.cartItem.quantity) || 0
         })
        </Button>
}


