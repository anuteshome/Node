import React,{useState} from 'react'
import axios from "axios"

function Teacher() {
    const [values,setValues]=useState({
        name:"",
        age:"",
        dep:""
    })

function handleChange(e){
    const {name,value}=e.target;
    setValues({...values,[name]:value})
}

function handleSubmit(event){
    event.preventDefault();
axios.post('http://localhost:5000/add',values).then((Response)=>{
    console.log("Inseted:",Response.data)
}).catch((error)=>{
    console.error("there is error on posting",error);
})

}

  return (
    <div>
        <h1>Teacher</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label><br />
            <input type="text" name='name' onChange={handleChange} /><br />
            <label htmlFor="age">Age</label><br />
            <input type="number" name='age' onChange={handleChange} /><br />
            <label htmlFor="Department">Department</label><br />
            <input type="text" name='dep' onChange={handleChange} /><br />
            <button type='submit'>Add</button><br />
        </form>
    </div>
  )
}

export default Teacher