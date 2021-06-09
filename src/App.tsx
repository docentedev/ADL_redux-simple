import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import UserList from './containers/user-list/UserList'
import store from './store'
import UserCreate from './containers/user-create/UserCreate'
import UserDetail from './containers/user-detail/UserDetail'

function App() {
  return (
    <div className="container mt-4">
      <Provider store={store}>
        <Router>
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route path="/create">
            <UserCreate />
          </Route>
          <Route path="/detail/:id">
            <UserDetail />
          </Route>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
