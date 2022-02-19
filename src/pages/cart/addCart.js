import { atom } from 'recoil';

export const cartStorage = atom({
    key: 'cart',
    default: [],
});

export const addCart = (cart, product) =>{
    const newCart = [...cart];
    const findCart = cart.findIndex(x => x.id === product.id);
     
    if(findCart >= 0) {
        newCart[findCart] = {
            ...cart[findCart],
            quantity: cart[findCart].quantity + 1,
        };
        return newCart;
    }
    newCart.push({
        product,
        id: product.id,
        quantity : 1,
    });
    return newCart;
}