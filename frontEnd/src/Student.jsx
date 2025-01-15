import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Student() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res =>  setData(res.data))
            .catch(err => console.log(err));
    }, []);


app.delete('/delete/:id', (req, res) => {
  const sql = "DELETE FROM student WHERE ID = ?";
  const id = req.params.id;
  
  db.query(sql, [id], (err, result) => {
    if(err) return res.json(err);
    return res.json(result);
  })
})

    return (
        <div className='main-custom'>
    <div className='container'>
        <div className='inner-container mt-5 w-50 mx-auto'>
            <Link to={'/create'} className='btn btn-info mb-1'>Create</Link>
            <Table striped bordered hover>
                <thead>          
                    <tr>        
                        <th className='text-center'>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th> 
                    </tr>
                </thead>
                <tbody>
                    
                    {data.map((student, index) => (
                        <tr key={index}>
                            <td className='text-center'>{student.ID}</td>
                            <td>{student.Name}</td>
                            <td>{student.Email}</td>
                            <td>
                                <Link to={`/read/${student.ID}`} className='btn btn-info m-1'>Read</Link>
                                <Link to={`/update/${student.ID}`} className='btn btn-primary m-1'>Edit</Link>
                                <Link onClick={() => handleDelete(student.ID)} className='btn btn-danger m-1'>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
            </div>
        </div>
    );
}

export default Student;
