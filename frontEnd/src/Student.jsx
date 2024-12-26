import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res =>  setData(res.data))
            .catch(err => console.log(err));
    }, []);


    const handleDelete = (id) => {
        axios.delete("http://localhost:8081/delete/"+id)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='main-custom'>
            <table>
                <thead>          
                    <tr>        
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) => (
                        <tr key={index}>
                            <td>{student.ID}</td>
                            <td>{student.Name}</td>
                            <td>{student.Email}</td>
                            <td>
                                <Link to={'/read/${student.ID}'} className='btn btn-info'>Read</Link>
                                <Link to={'/edit/${student.ID}'} className='btn btn-primary'>Edit</Link>
                                <Link onClick={ () => handleDelete(student.ID)} className='btn btn-danger'>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
