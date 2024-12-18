import {useState,useEffect} from 'react'
import './Display.css'

function Display() {
const [product,setProduct]=useState([]);
useEffect(()=>{
fetch('http://localhost:5555/info')
.then((res)=>res.json()).then((data)=>{
console.log
    setProduct(data)})
    .catch((err)=>console.log("there is error on fetching"))

console.log(setProduct)

},[])

  return (
    <div>
        <h1 style={{
          textAlign:"center",color:"#242424"
        }}> Product Information</h1>
        <div className="info">
        {product.map((SingleProduct)=>{
          return(
            <div className="card">
              <div>
<h3>Name:{SingleProduct.product_name}</h3>
<h3>Price:{SingleProduct.starting_price}</h3>
<h3>Discription:{SingleProduct.product_brief_description}</h3><br /><br />
              </div>

            </div>
          
          
          )
        })}

        </div>
        

    </div>
  )
}

export default Display