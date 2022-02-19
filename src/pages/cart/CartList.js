import React from "react";
import { useRecoilValue } from "recoil";
import { cartStorage } from "./addCart";


CartList.propTypes = {};

function CartList(props) {
    const cartItem = useRecoilValue(cartStorage);
    return (
        <div>
            <h2>Danh Sách</h2>

            <ul>
                {cartItem.map(item => (
                    <li key={item.id}>
                        {item.product.title} - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CartList;