import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartStorage, addCart } from "./cart/addCart";
import { CartProduct } from "./cart/CartProduct";
import CartList from "./cart/CartList";
import Container from '@mui/material/Container';
Cart.propTypes = {}


function Cart() {
    const cartList = useRecoilValue(CartProduct);
    const [cart, setValue] = useRecoilState(cartStorage);
    const addToCart = (product) => {
        const newCart = addCart(cart, product);
        setValue(newCart);
        if (newCart) {
            let productName = product.title
            alert(`Added ${productName} to cart`)
        }
    }

    return (
        <Container maxWidth="xs">

            <h1>Giỏ Hàng</h1>

            <ul className="product-list">
                {cartList.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.price}
                        <button onClick={() => addToCart(product)}>
                            Add Cart
                        </button>
                    </li>
                ))}
                <CartList />
            </ul>
        </Container>

    );
}


export default Cart