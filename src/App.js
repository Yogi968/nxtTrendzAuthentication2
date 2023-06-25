<<<<<<< HEAD
import {Switch, Route} from 'react-router-dom'
=======
import {Route, Switch} from 'react-router-dom'
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
<<<<<<< HEAD
import ProtectedRoute from './components/ProtectedRoute'
=======
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
<<<<<<< HEAD
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/cart" component={Cart} />
=======
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/cart" component={Cart} />
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
    <Route component={NotFound} />
  </Switch>
)

export default App
