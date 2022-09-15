import React from 'react';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { useState, useEffect } from 'react';

function App() {
  

  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
  <React.Fragment > 
    
    <Banner />
  <div className='layout-inner'>
  
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
		
</div> 

<Footer />

</React.Fragment>);
}

export default App;
