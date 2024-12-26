import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Update() {

    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8081/read/"+id)
        .then(res => { 
            console.log(res)
            setstudent({...values, name: res.data[0].Name, email: res.data[0].Email})
    })
        .catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        name: '',
        email: ''
     })

     const handleUpdate = (event) => {
         event.preventDefault();
         axios.put('http://localhost:8081/update/'+id, values)
         .then(res => {
            console.log(res)
            navigate('/')
         })
         .catch(err => console.log(err));
     }


  return (
    <div className='form-main-cst'>
    <div className='inner-div'>
       <form onSubmit={handleUpdate}>
        <h2>Update Student</h2>
          <div className='input-form'>
             <label>Name</label>
             <input type='text' placeholder='Enter Name' value={values.name}
               onChange={ e => setValues ({...values, name: e.target.value})} />
          </div>
          <div className='input-form'>
             <label>Email</label>
             <input type='text' placeholder='Enter Email' value={values.email}
               onChange={ e => setValues ({...values, email: e.target.value})} />
          </div>

       </form>
    </div>
  </div>
  )
}

export default Update
