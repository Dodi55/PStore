export type ProductInOrder = {
    idProduct: number;
    price: number;
    count: number;
}

export enum DISCOUNTSALE {
    DIS_5 = 5,
    DIS_10= 10,
    DIS_15 = 15,
}

export enum TYPEPAY {
    CARD = 'card',
    CASH = 'cash',
}

export enum PLACEGETTING {
    PLACE_SEV_BOLSHAY_M = 'г. Севастополь ул Большая морская 44',
    PLACE_SEV_GOGOLYA = 'г. Севастополь ул Гоголя 16',
    PLACE_SEV_PRIMORNAY = 'г. Севастополь ул Приморная 1-а',
    PLACE_SIM_BALTI = 'г. Симферополь ул Балтийская 12',
    PLACE_SIM_NAVOI = 'г. Симферополь ул Навои 1',
}

export type OrderHistoryItem = {
    idOrder: number;
    date: string;
    placeGeting: PLACEGETTING;
    typePay: TYPEPAY;
    products: ProductInOrder[]
}

export type User = {
    id: number;
    name: string;
    lastname: string;
    age: number | null;
    city: string | null;
    email: string | null;
    phone: string;
    DiscontSale: DISCOUNTSALE;
    orderHistory: OrderHistoryItem[]
}


// const User1: User = {
//     age: 18,
//     city: 'msk',
//     DiscontSale: 10,
//     email: 'sasha.derevyanko.2018@mail.ru',
//     id: 1,
//     lastname: 'Деревянко',
//     name: 'Алекс',
//     phone: '+79783462144',
//     orderHistory: [
//         {
//             date: '2024-08-29',
//             idOrder: 1,
//             placeGeting: PLACEGETTING.PLACE_SEV_GOGOLYA,
//             products: [
//                 {
//                     count: 1,
//                     idProduct: 95,
//                     price: 100000
//                 }
//             ],
//             typePay: TYPEPAY.CARD
//         }
//     ]
// }