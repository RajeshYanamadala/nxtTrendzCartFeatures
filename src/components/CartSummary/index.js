// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachValue => {
        total += eachValue.price * eachValue.quantity
      })

      return (
        <div className="cart-summary-card">
          <h1 className="heading">
            Order Total:<span className="total-amount">Rs {total}</span>/-
          </h1>
          <p className="paragraph">{cartList.length} Items in Cart</p>
          <div>
            <button type="button" className="btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
