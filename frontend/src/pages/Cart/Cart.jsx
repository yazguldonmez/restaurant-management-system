import { useState, useRef, useEffect, } from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, addToCart } from '~/store/cart/cartSlice'
import Swal from "sweetalert2"
import './cart.css'

export default function Menu() {

    const items = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    console.log('cartItems: ', JSON.parse(JSON.stringify(items)))

    const imageUrl = import.meta.env.VITE_IMAGE_URL

    const total = items.reduce((sum, item) => sum + item.totalPrice, 0);

    const showAlert = () => {
        Swal.fire({
            position: "top-end",
            icon: 'success',
            width: '300px',
            text: 'Your item has been added',
            showConfirmButton: false,
            timer: 2000
        });
    };

    return (

        <section className="cart-section">
            <div className="cart-container">

                <div className="cart-list">

                    {items.map((item) => (
                        <ul className="cart-items" key={item.id}>
                            <li className="cart-item">
                                {console.log('item id: ', item.id)}
                                <div className="cart-item-info">
                                    <img
                                        src={`${imageUrl}/${item.image}`}
                                        alt={item.name}
                                    />

                                    <span className="cart-item-name">
                                        {item.name}
                                    </span>

                                    <div className="cart-item-toppings">
                                        {item.toppings?.map(t => t.name).join(", ")}
                                    </div>
                                </div>

                                <span className="cart-item-price">
                                    {item.totalPrice}$
                                </span>
                                <div className="cart-item-qty text-center">
                                    <span>
                                        {item.quantity}
                                    </span>
                                </div>

                                <button type="button" className="cart-item-remove">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>

                            </li>
                        </ul>
                    ))}

                </div>

                <div className="cart-item-summary">
                    <h3>Sipariş Özeti</h3>

                    <div className="summary_line">
                        <span>Toplam</span>
                        <span>{total}$</span>
                    </div>

                    <button className="checkout_btn">
                        Siparişi Onayla
                    </button>
                </div>

            </div>
        </section >
    )

}