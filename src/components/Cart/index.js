<<<<<<< HEAD
=======
// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
import Header from '../Header'

import './index.css'

<<<<<<< HEAD
const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
      />
    </div>
  </>
)

=======
const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          className="cart-image"
          alt="cart"
        />
      </div>
    </>
  )
}
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
export default Cart
