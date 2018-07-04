import React from 'react';
import ProductListItem from './product-list-item';
import {connect} from 'react-redux';

function ProductListing(props){
    return( <div className='listing'>
        {
            props.products.map((product,key)=>
            <ProductListItem 
            product={product}
            key={"product" + key}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            removeAllFromCart={props.removeAllFromCart}
            cartItem={props.cart.filter(cartItem => cartItem.id===product.id)[0]}
            />)
        }
    </div>)
}

function mapStateToProps(state){
    return{
        cart:state.cart
    }
}

function mapDispatchToProps(dispatch){
    return{
        addToCart:(item)=>{
                dispatch({type:'ADD',payload:item})
        },
        removeFromCart:(item)=>{
            dispatch({type:'REMOVE',payload:item})
        }, 
        removeAllFromCart:(item)=>{
            dispatch({type:'REMOVE_ALL',payload:item})
        },
        totalCart:(item)=>{
           dispatch({type:'ALL',payload:item})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListing);