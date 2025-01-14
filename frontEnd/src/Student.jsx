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


    // const handleDelete = (id) => {
    //     axios.delete(`http://localhost:8081/delete/${id}`)
    //       .then(res => {
    //         if (res.data.success) {
    //           // Update state to remove the deleted student
    //           setStudents(prevStudents => prevStudents.filter(student => student.ID !== id));
    //         } else {
    //           console.log("Error deleting record:", res.data.message);
    //         }
    //       })
    //       .catch(err => console.log(err));
    //   };

        const handleDelete = (id) => {
        axios.delete("http://localhost:8081/delete/"+id)
        .then(res => { 
             location.reload();
          })
        .catch(err => console.log(err))
    }


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
