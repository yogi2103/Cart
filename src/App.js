import React from 'react'; 
import Cart from './Cart';
import Navbar from './Navbar';
class  App extends React.Component {
  constructor(){
    super();    //for calling the constructor of parent class
    this.state={
        products:[
            {
                price:899,
                title:'Mobile Phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
                id:1
            },{
                price:999,
                title:'Watch',
                qty:1,
                img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                id:2
            },
            {
                price:49999,
                title:'Laptop',
                qty:1,
                img:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id:3
            }
        ]
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this); for binding the function
    //this.testing();
}
handleIncreaseQuantity=(product)=>{
    console.log('Hey increase the qyt of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
    console.log('Hey Decrease the qty of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty==0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products:products
    })
}
handleDeleteProduct=(product)=>{
    console.log('Delete the product',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    products.splice(index,1);
    this.setState({
        products:products
    })
}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product) => {
    count+=product.qty; 
  });
  return count;
}
getCartTotal =()=>{
  const {products}=this.state;
  let CartTotal=0;
  products.map((product)=>{
    CartTotal=CartTotal+product.qty*product.price;
  })
  return CartTotal;
}
  render(){
    const{products}=this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <Cart
         products={products}
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}
        /> 
        <div style={{fontSize:20}}>
          Total:{this.getCartTotal()}
        </div>
      </div>
    );
  }
  
  }
export default App;
