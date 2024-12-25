import React from 'react'
import Create from './component/creact'
import Teacher from './component/teacher'
import DisTech from './component/DisTech'
import DisStud from './component/DisStud'

function App() {


  return (
    <>
    {/* <h1>Student</h1> */}
    <div style={{
      display:"flex"
    }}>


<div style={{
        display:"flex"
      }}>
    <Create/>
    <Teacher/>
    </div>
    <br/>
      <div style={{
        display:"flex"
      }}>
      <DisTech/>
<DisStud/>
      </div>
      </div>


    </>
  )
}

export default App
