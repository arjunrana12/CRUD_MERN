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
      .catch(err => console.log(err))
   }
  

  return (
    <div className='form-main-cst'>
      <div className='inner-div'>
         <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className='input-form'>
               <label>Name</label>
               <input type='text' placeholder='Enter Name'
                 onChange={ e => setValues ({...values, name: e.target.value})} />
            </div>
            <div className='input-form'>
               <label>Email</label>
               <input type='text' placeholder='Enter Email' 
                 onChange={ e => setValues ({...values, email: e.target.value})} />
            </div>

         </form>
      </div>
    </div>
  ) 
}

export default Create
