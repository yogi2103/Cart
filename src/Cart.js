import React from 'react';
import CartItem from './Cartitem';
class Cart extends React.Component{
    constructor(){
        super();    //for calling the constructor of parent class
        this.state={
            products:[
                {
                    price:899,
                    title:'Mobile Phone',
                    qty:1,
                    img:'',
                    id:1
                },{
                    price:999,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:49999,
                    title:'Laptop',
                    qty:1,
                    img:'',
                    id:3
                }
            ]
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this); for binding the function
        //this.testing();
    }
  render(){
      const {products}=this.state;
       return(
        <div className="cart">
            {products.map((product)=>{
                return <CartItem product={product} key={product.id}/>
            })}
        </div>
      )
  }
}

export default Cart;
