import React from 'react';
import {Button} from 'react-bootstrap';

export default function RemoveAllButton(props){
   return <Button bsStyle="danger" onClick={()=>props.removeAllFromCart(props.cartItem)}>Remove All
</Button>
}