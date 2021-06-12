import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserList from './containers/user-list/UserList'
import store from './store'
import UserCreate from './containers/user-create/UserCreate'
import UserDetail from './containers/user-detail/UserDetail'
import Menu from './components/menu/Menu'
import ProductList from './containers/product-list/ProductList'
import ProductCreate from './containers/product-create/ProductCreate'
import ProductDetail from './containers/product-detail/ProductDetail'
import ProductUpdate from './containers/product-update/ProductUpdate'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <div className="container mt-4">
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route path="/create">
            <UserCreate />
          </Route>
          <Route path="/detail/:id">
            <UserDetail />
          </Route>
          <Route path="/products" exact>
            <ProductList />
          </Route>
          <Route path="/products/create">
            <ProductCreate />
          </Route>
          <Route path="/products/detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/products/update/:id">
            <ProductUpdate />
          </Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
