import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();    //for calling the constructor of parent class
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
    }
    render(){
        const {price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*buttons  */}
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"/>
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"/>
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg"/>
                    </div>
                    </div>
            </div>
        )
    }
}

export default CartItem;
let styles={
  image:{
    height:130,
    width:130,
    borderRadius:4,
    background:'#CCC'
  }
}