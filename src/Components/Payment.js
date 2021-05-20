import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { db } from "../firebase";



function Payment(){
	const history=useHistory();
	const [{user,basket},dispatch]= useStateValue();


	return(
		<div className='payment'>
		<div className='payment_container'>
		<h1>Checkout(<Link to='/checkout'>{basket?.length}items</Link>)
			</h1>
			<div className="payment_section">
			<div className="payment_title">
			<h3>Delivery Address</h3>
			</div>
			<div className="payment_address">
			<p>{user?.email}</p>
			<p>123 REACT</p>
			<p>Mumbai</p>
			</div>
			</div>
			<div className="payment_items">
			{basket.map((item)=>(
				<CheckoutProduct
				id={item.id}
				title={item.title}
				image={item.image}
				price={item.price}
				rating={item.rating}
				/>
				))}
				</div>
				</div>

			<div className="payment_section">
			<div className="payment_title">
			<h3>Payment Method</h3>
			</div>
			<div className="payment_details">
			<form >
            
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeperator={true}
                  prefix="$"
                />
                <button>
                  <span>Buy Now</span>
                </button>
              </div>
            </form>
            </div>
            </div>
            </div>
            );
}

export default Payment;