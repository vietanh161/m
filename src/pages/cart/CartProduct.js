import { atom } from 'recoil';

export const CartProduct = atom({
    key: 'productList',
    default: [
        {id: 1, price: 100000, title: 'Đồng Hồ '},
        {id: 2, price: 100000, title: 'Quần Áo '},
        {id: 3, price: 100000, title: 'Thắt Lưng '},
    ],
});
