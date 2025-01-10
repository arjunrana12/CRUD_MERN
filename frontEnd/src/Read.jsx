import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


function Read() {

const[student ,setstudent] = useState([])

const {id} = useParams();

useEffect(() => {
    axios.get("http://localhost:8081/read/"+id)
    .then(res => { 
        console.log(res)
        setstudent(res.data[0]);
})
    .catch(err => console.log(err))
}, [])

  return (
    <div className='main pt-5'>
      <div className='container'>
        <div className='inner-div mx-auto w-50 bg-light p-5 rounded-2'> 
          <div className='top-up'>
             <h2>Student Detail</h2><br/>
             <h3>Name : {student.Name}</h3><br/>
             <h3>Email : {student.Email}</h3>
          </div>
           <Link to="/" className='btn btn-primary me-2'>Back</Link>
           <Link to={'/edit/${student.ID}'} className='btn btn-info'>Edit</Link>
        </div>
        </div>
    </div>
  )
}

export default Read
