import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./productSlice"
import loader from"../../asets/image/giphy.gif"
import "./product.css"
import ProductList from "./ProductList"

const Product = ()=>{
    const loading=useSelector((state)=>state.product.loading)
    const data=useSelector((state)=>state.product.data)
        console.log({loading,data});
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getAllProducts())
    },[])
    return(
        <>
        <h1>product's</h1>
        <div class="listing-section">
           {loading ? 
                <img src={loader} height={600} width={800} />
           :
           data?.products?.length > 0 ?
           <ProductList
              data={data?.products}
           />
           :
           <div>
            <h1>No porudct found</h1>
           </div>
           }
        </div>
        </>
    )
}
export default Product 