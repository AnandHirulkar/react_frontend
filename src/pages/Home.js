import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function () {
    const [empls, setEmpls] = useState([]);

    // let { id } = useParams();

    useEffect(() => {
        loadEmpls();
    }, []);

    const loadEmpls = async () => {
        const result = await axios.get("http://localhost:8080/employees");
        setEmpls(result.data);
    }

    const deleteEmpl = async (id) => {
        await axios.delete(`http://localhost:8080/employee/${id}`);
        loadEmpls();
    }

  return (
    <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Date Arrival</th>
                            <th scope="col">Status</th>
                            <th scope="col">Position Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empls.map((empl, index) => (
                                <tr key={index}>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{empl.firstName}</td>
                                    <td>{empl.lastName}</td>
                                    <td>{empl.dateArrival}</td>
                                    <td>{empl.status}</td>
                                    <td>{empl.positionTitle}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" 
                                        to={`/viewEmpl/${empl.id}`}>
                                            View
                                        </Link>

                                        <Link className='btn btn-outline-primary mx-2'
                                            to={`/editEmpl/${empl.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteEmpl(empl.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
  )
}
