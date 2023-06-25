<<<<<<< HEAD
=======
// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
import Header from '../Header'

import './index.css'

<<<<<<< HEAD
const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="products-img"
      />
    </div>
  </>
)

=======
const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="product-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          className="product-image"
          alt="products"
        />
      </div>
    </>
  )
}
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
export default Products
