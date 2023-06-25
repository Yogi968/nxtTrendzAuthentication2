<<<<<<< HEAD
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

=======
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
<<<<<<< HEAD

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

=======
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={onClickLogout}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

<<<<<<< HEAD
        <div className="nav-bar-large-container">
=======
        <div className="nav-content nav-bar-large-container">
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <li className="nav-menu-item">
<<<<<<< HEAD
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
=======
              <Link to="/">Home</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart">Cart</Link>
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
<<<<<<< HEAD
            <Link to="/" className="nav-link">
=======
            <Link to="/">
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-img"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
<<<<<<< HEAD
            <Link to="/products" className="nav-link">
=======
            <Link to="/products">
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-img"
              />
            </Link>
          </li>
<<<<<<< HEAD
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
=======

          <li className="nav-menu-item-mobile">
            <Link to="/cart">
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
<<<<<<< HEAD

=======
>>>>>>> 8c37e12fdd89f1ba82356662740b794447bdb50c
export default withRouter(Header)
