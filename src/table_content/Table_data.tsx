import { OrderedItems } from "./Table_type";

const getOrderedItems = (): Array<OrderedItems>=>{
    const orderedProduct:string = localStorage?.getItem("products")??"";
    const productData: Array<object> = JSON.parse(orderedProduct);

    const data: Array<OrderedItems> = []

    productData.map((items:any)=>{
        const {orderNumber, id, title, category, price, quantity} = items;
        data.push({orderNumber, id, title, category, price, quantity})
    })

    return data;
}

export {getOrderedItems};