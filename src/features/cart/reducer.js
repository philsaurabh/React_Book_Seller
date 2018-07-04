const cartWithoutItem=(cart,item)=>cart.filter(cartItem=>cartItem.id !==item.id)

const itemInCart=(cart,item)=>cart.filter(cartItem=>cartItem.id ===item.id)[0]
let cartValue;
const totalCart=(cart,item)=>{
    return [...totalCart(cart,item),{...cartValue,quantity:item.quantity}];
}
const addToCart=(cart,item)=>{
    const cartItem=itemInCart(cart,item)
    return (cartItem===undefined
     ?[...cartWithoutItem(cart,item),{...item,quantity:1}]
     :[...cartWithoutItem(cart,item),{...cartItem,quantity:cartItem.quantity+1,cartValue:cartValue++}])
        
}

const removeFromCart=(cart,item)=>{
    return (item.quantity===1
     ?[...cartWithoutItem(cart,item)]
     :[...cartWithoutItem(cart,item),{...item,quantity:item.quantity-1,cartValue:cartValue--}])
     
}

const removeAllFromCart=(cart,item)=>{
    return [...cartWithoutItem(cart,item)]
}



const cartReducer=(state=[],action)=>{
    switch(action.type){
        case 'ADD':
        return addToCart(state, action.payload)

        case 'REMOVE':
        return removeFromCart(state, action.payload)
        
        case 'REMOVE_ALL':
        return removeAllFromCart(state, action.payload)

        case 'ALL':
        return totalCart(state,action.payload);

        default:
        return state;
    }
}

export default cartReducer;