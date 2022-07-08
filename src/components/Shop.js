import React, { useEffect, useState } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useHistory } from 'react-router-dom';
import { db } from '../FireBase/Firebase';
import { auth } from '../FireBase/Firebase';
const Shop = () => {
    const [products, setProducts] = useState([]);
    let user = auth.currentUser
    const fetchProduct = async () => {

        onSnapshot(collection(db, 'Products'), (querySnapshot) => {
            const prodData = []
            querySnapshot.forEach((doc) => {
                prodData.push({ ...doc.data(), id: doc.id })
            })
            console.log(prodData);
            setProducts(prodData);
        })
    }
    useEffect(() => {
        fetchProduct()
    }, [])

     const  addToCart = async (product) =>{
        console.log(product)
        try{
            if(user){
                await addDoc(collection(db,"cart"),{
                    uid:user.uid,
                    product
                }).then(
                    alert("Item added to cart")
                ).catch((error)=>{
                    console.log(error.message);
                })
            }else{
                alert("please login")
            }
        }catch(error){
            console.log(error.message);
        }
     }
    return (
        <div className='prices'>
            <div className='container'>
                <div className="row">
                    {products && products.map(product => (
                        <div key={product.id} className="col-4">
                            <div className='price'>
                                <div className='product_image'>
                                    <img src={product.ProductImage} />
                                </div>
                                <h1 className='product_name'>{product.ProductName}</h1>
                                <p className='product_Desc'>
                                    {product.ProductDescription}
                                </p>
                                <p className='price_rs'>R{product.ProductPrice}</p>
                                <button onClick={()=>addToCart(product)} className="button_price">Add To Cart</button>
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;