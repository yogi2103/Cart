import React from 'react';
class CartItem extends React.Component{
    testing(){
        const promise= new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done');
            },5000);
        })

    promise.then(()=>{
        //setState acts like a synchronous call
        //this.setState({qty:100});
        this.setState({qty:this.state.qty+10});
        this.setState({qty:this.state.qty+10});
        this.setState({qty:this.state.qty+10});
        console.log('this.state',this.state);
        })
    }
    increaseQuantity=()=>{
        // this.state.qty+=1;
        //console.log('this',this.state);
        
        //setState form 1
        // this.setState({                //this is called batching and will only take the last value(shallow merging)
        //     qty:this.state.qty+1
        // });
        // this.setState({
        //     qty:this.state.qty+5
        // });
        // this.setState({
        //     qty:this.state.qty+1
        // });


        //setState form 2 used when previou state is required
        this.setState((prevState)=>{
             return {                       //will return object
                qty:prevState.qty+2
            }
        },()=>{
            console.log('this.state',this.state);
        });
        this.setState((prevState)=>{
            return {                       //will return object
               qty:prevState.qty+3
           }
       },()=>{
           console.log('this.state',this.state);
       });
       // console.log(this.state);    //it is asynchronous it will show us previous value so we'll use callback instead
    }
    decreaseQuantity=()=>{
        const {qty}=this.state;
        if(qty==0){
            return;
        }
        this.setState((prevState)=>{
            return {                       //will return object
               qty:prevState.qty-1
           }
       });
    }
    render(){
        console.log('render');
        console.log('this.props',this.props);
        const {price,title,qty}=this.props.product;
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
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                        onClick={this.increaseQuantity}/>
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                        onClick={this.decreaseQuantity}/>
                        <img 
                        alt="delete"
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/1345/1345874.svg"
                        />
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

// Binding function in js
// class Vehicle{
//     constructor(company){
//         this.company=company;
//     }
//     getCompany(){
//         console.log('this',this);
//         console.log('this.company',this.company);
//     }
// }
// var car= new Vehicle('Audi');
// car.getCompany()    //this Vehicle {company: "Audi"}
//                     //this.company Audi
// var func=car.getCompany;
// func()  //this undefined

//Concept of binding
// var func=car.getCompany.bind(car)
