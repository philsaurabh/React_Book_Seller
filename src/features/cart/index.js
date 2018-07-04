import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import {Button, Table, Image} from 'react-bootstrap';
function sort(items){
    return items.sort((x,y)=>x.id<y.id)
}
function totalAmount(cart) {
    var sum=0;
   for(var i=0;i<cart.length;i++){
        sum=sum+cart[i].price*cart[i].quantity;
    }
    return sum;
}
function totalQuant(cart) {
    var sum=0;
   for(var i=0;i<cart.length;i++){
        sum=sum+cart[i].quantity;
    }
    return sum;
}

function Cart(props){
    var ww=totalQuant(props.cart);
    return <div>
        <Table hover responsive condensed>
        <thead>
        <tr>
        <th>Item</th>
        <th>Your Product</th>
        <th></th>
        <th>Quantity</th>
        <th></th>
        <th>Remove The Product</th>
        <th>Price</th>
        <th>Total</th>
        </tr>
            </thead>
            <tbody>
                {
                    sort(props.cart).map(
                        (item)=><tr>
                            <td>{item.name}</td>
                        
                            <td><Image className="imgP"
                                    title={item.name}
                                    src={`/products/${item.image}`}
                                    alt={item.alt}
                                    thumbnail/>
                            </td>
                          
                            <td>
                                <Button bsStyle="success" onClick={()=>props.addToCart(item)}>+</Button>
                            </td>
                            <td>{item.quantity}</td>
                            <td>
                                <Button bsStyle="danger" onClick={()=>props.removeFromCart(item)}>-</Button>
                            </td>
                            <td>
                                <Button bsStyle="warning" onClick={()=>props.removeAllFromCart(item)}>Remove All From Cart</Button>
                            </td> 
                            <td>
                            ₹ {item.price}
                            </td>
                            <td>
                             ₹ {item.price*item.quantity}
                            </td>
                        </tr>
                        
                    )
                }
            </tbody>
    </Table>
    <hr/>
    <h3>Total Order : ₹ {totalAmount(props.cart)} Total Quant :{ww}</h3>
    <hr/>
    </div>
}
function mapStateToProps(state){
    return{
        cart:state.cart,
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
export default connect(mapStateToProps,mapDispatchToProps)(Cart)