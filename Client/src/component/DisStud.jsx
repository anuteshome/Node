import React ,{useState,useEffect} from 'react'

function DisStud() {
    const [Datas,setData]=useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/data')
.then((res)=>res.json())
.then((data)=>setData(data))
.catch((err)=>console.log("error on fetching",err))
    },[])
  return (
    <div>
        <h1>Student</h1>
{Datas.map((Data)=>{
    return(
        <div>
            <h3>ID:{Data.id}</h3>
<h3>Name:{Data.name}</h3>
<h3>Age:{Data.age}</h3>
<h3>Gender:{Data.gender}</h3><br/>
            </div>
    )
})}


    </div>
  )
}

export default DisStud