import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


function Update() {

   const [values, setValues] = useState({
      name: '',
      email: ''
   })

    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8081/read/"+id)
        .then(res => { 
            console.log(res)
            setValues({...values, name: res.data[0].Name, email: res.data[0].Email})
    })
        .catch(err => console.log(err))
    }, [])

     const handleUpdate = (event) => {
         event.preventDefault();
         axios.put('http://localhost:8081/update/'+id, values)
         .then(res => {
            console.log(res);
            navigate('/');
         })
         .catch(err => console.log(err));
     }


  return (
    <div className='form-main-cst pt-5'>
      <div className='container'>
    <div className='inner-div w-50 mx-auto p-5 bg-light rounded-2'>
       <form onSubmit={handleUpdate}>
        <h2>Update Student</h2>
          <div className='input-form mb-3'>
             <label>Name</label><br/>
             <input type='text' placeholder='Enter Name' value={values.name} className='form-control w-100'
               onChange={ e => setValues ({...values, name: e.target.value})} />
          </div>
          <div className='input-form'>
             <label>Email</label><br/>
             <input type='text' placeholder='Enter Email' value={values.email} className='form-control w-100'
               onChange={ e => setValues ({...values, email: e.target.value})} />
          </div>
           <button className='btn btn-success mt-3'>Submit</button>
       </form>
    </div>
    </div>
  </div>
  )
}

export default Update
