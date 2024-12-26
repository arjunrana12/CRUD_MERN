import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


function Read() {

const {id} = useParams();
const{student ,setstudent} = useState([])

useEffect(() => {
    axios.get("http://localhost:8081/read/"+id)
    .then(res => { 
        console.log(res)
        setstudent(res.data[0]);
})
    .catch(err => console.log(err))
}, [])

  return (
    <div className='main'>
        <div className='inner-div'>
          <div className='top-up'>
             <h2>Student Detail</h2>
             <h2>{student.ID}</h2>
             <h2>{student.Name}</h2>
             <h2>{student.Email}</h2>
          </div>
           <Link to="/" className='btn btn-primary' >Back</Link>
           <Link to={'/edit/${student.ID}'} className='btn btn-info'>Edit</Link>
        </div>
    </div>
  )
}

export default Read
