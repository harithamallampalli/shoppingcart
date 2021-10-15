import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Products from '../Products/Products';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import Forgotpassword from '../Forgotpassword/Forgotpassword';

const Routes = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClear}) => {
    return (
        <div>
          <Switch>
              <Route path="/" exact>
              <Home/>
              </Route>
              <Route path="/signin" exact>
              <Signin/>
              </Route>
              <Route path="/forgotpassword" exact>
              <Forgotpassword/>
              </Route>
              <Route path="/products" exact>
                  <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                  </Route>
              <Route path="/signup" exact>
              <Signup/>
              </Route>
              <Route path="/cart" exact>
              <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} 
              handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>
              </Route>
          </Switch>
        </div>
    );
}
export default Routes;
