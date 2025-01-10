import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

   const [values, setValues] = useState({
      name: '',
      email: ''
   })

   const navigate  = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8081/student',values)
      .then(res => {
         console.log(res);
      navigate('/')
      })
      .catch(err => console.log(err));
   }
  

  return (
    <div className='form-main-cst pt-5'>
      <div className='container'>
      <div className='inner-div w-50 mx-auto p-5 bg-light rounded-2'>
         <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className='input-form mb-3'>
               <label>Name</label><br/>
               <input type='text' placeholder='Enter Name' className='form-control w-100'
                 onChange={e => setValues ({...values, name: e.target.value})} />
            </div>
            <div className='input-form'>
               <label>Email</label><br/>
               <input type='text' placeholder='Enter Email' className='form-control w-100'
                 onChange={e => setValues ({...values, email: e.target.value})} />
            </div>
                <button className='btn btn-success mt-3'>Submit</button>
         </form>
      </div>
      </div>
    </div>
  ) 
}

export default Create
