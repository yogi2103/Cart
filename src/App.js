import React from 'react'; 
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';
class  App extends React.Component {
  constructor(){
    super();    //for calling the constructor of parent class
    this.state={
        products:[],
        loading:true
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this); for binding the function
    //this.testing();
}

componentDidMount(){
  firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot)=>{
      console.log(snapshot);    //it is an array of products

      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      });
      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })
  
      this.setState({
        products,   //products:products
        loading:false
      })
    })
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
    if(product.qty>0){
      CartTotal=CartTotal+product.qty*product.price;
    }
    return '';
  })
  return CartTotal;
}
  render(){
    const{products,loading}=this.state;
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <Cart
         onIncreaseQuantity={this.handleIncreaseQuantity}
         onDecreaseQuantity={this.handleDecreaseQuantity}
         onDeleteProduct={this.handleDeleteProduct}
         products={products}
        /> 
        {loading && <h1>Loading Products...</h1>}
        <div style={{fontSize:20}}>
          Total:{this.getCartTotal()}
        </div>
      </div>
    );
  }
  
  }
export default App;
