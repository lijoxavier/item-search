import React, { useState } from 'react'
import './SearchList.css'

const SearchList = ({ filterList, searchList }) => {
    const [cart, setCart] = useState([])
    const handleClick = (dataId) => {
        const [result] = searchList.filter((data) => data.id === dataId)

        const { id, title, price } = result

        //problem with quanity not adding
        // const quantity=(id===dataId)?2:1
        //    const cart1=[...cart,{id,title,price,quantity}]

        //solved with chatgpt ->  add to cart
        let updatedCart
        let updatedQuantity = 0
        const existingItem = cart.find((item) => item.id === dataId);
        // console.log(existingItem,"==existingItem");

        if (existingItem) {
            updatedCart = cart.map((item) => {

                // item.id === dataId ? { ...item, quantity: item.quantity+1 } : item
                if (item?.id === dataId) {
                    updatedQuantity = item.quantity + 1
                    return { ...item, quantity: updatedQuantity, price: item.price * updatedQuantity }
                
                }
                else{ 
                    return {...item}
                }

            });
        } else {
            const { id, title, price } = result;
            updatedCart =  [...cart, { id, title, price, quantity: 1,originalPrice:price}];
        }

        setCart(updatedCart);


        //same concept above. above is one line code.
        //    cart1.id=id
        //    cart1.title=title
        //    cart1.price=price
        //    setCart(cart1)
    }
    console.log(cart);


    // chatgpt solved -> remove cart
    const handleRemove = (dataId) => {
        // setCart(cart.filter((item)=>item.id!==id))
        // const item=cart.filter((item) => item.id !== id)
        // // item.find()
        // setCart(item)
        let updatedCart
        let updatedQuantity=0
        let updatedPrice=0
        const existingItem = cart.find((item) => item.id === dataId);
        console.log(existingItem);

        if (existingItem) {
            updatedCart = cart.map((item) => {
                // item.id === dataId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
                if (item.id === dataId) {
                    updatedQuantity = Math.max(1, item.quantity - 1)
                    console.log(updatedQuantity, "==updatedQuantity");
                    updatedPrice = item.originalPrice * item.quantity
                    console.log(updatedPrice, "==updatedPrice");
                    return { ...item, quantity: updatedQuantity, price: updatedPrice }
                }
                else {
                    return item
                }
            });
        }
        else {
            //     const { id, title, price } = result;
            //     updatedCart = [...cart, { id, title, price, quantity: 1 }];
            return
        }

        setCart(updatedCart)
        console.log(cart);

    }

    return (
        <div className='search-list-container'>
            {/* <div className="heading-section">
                SearchList
            </div> */}
            {filterList.map((data) =>

                <div className="search-list-items" key={data.id} id={data.id}>
                    <div className="image">
                        <img src={data.image} alt="" width="50px" height="50px" />
                    </div>
                    <div className="title"><p>{data.title}</p></div>
                    <div className="price">Rs.{data.price}</div>
                    <div className='buy'>
                        <button onClick={() => handleClick(data.id)}>Buy now</button>
                        <button onClick={() => handleRemove(data.id)}>remove</button>
                    </div>
                </div>
            )
            }

        </div>
    )
}

export default SearchList