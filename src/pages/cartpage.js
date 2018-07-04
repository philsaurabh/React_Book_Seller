import React from 'react';
import Cart from '../features/cart'
import {PageHeader} from 'react-bootstrap';

export default function CartPage(props){
    return<div> 
        <PageHeader>
      Cart  
        <small> Here are your products</small>
        </PageHeader>
        <Cart/>
    </div>
}