import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Tittle</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
                        <div className="cartitems-format cartitem-format-main">
                            <img src={e.image} alt="" className='cartitem-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr /> 
                    </div>
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
            <h1>cart total</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtatal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <p>Shipping fee</p>
                    <p> Free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>if you have a promo code,Enter it here</p>
             <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
             </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
