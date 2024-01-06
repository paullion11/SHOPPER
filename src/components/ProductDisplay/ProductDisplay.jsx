import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {

    const{product} = props;
    const{addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdipslay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" /> 
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" /> 
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore enim nihil, eaque tempora suscipit harum iste iure cumque, repudiandae autem quia fugit, accusamus laudantium architecto rem adipisci officia cupiditate.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
        </div>
        <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XX</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='productdisplay-right-category'><span>Category :</span>Women, T-shirt, crop Top</p>
      <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
      
    </div>
  )
}

export default ProductDisplay
