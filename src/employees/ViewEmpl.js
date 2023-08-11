import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Collapsible from 'react-collapsible';

export default function ViewEmpl() {
    const [empls, setEmpls] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        locationCity: "",
        address: "",
        dateOfBirth: "",
        telephone: "",
        positionTitle: "",
        hireDate: "",
        email: "",
        salary: "",
        timeInPosition: "",
        dateArrival: "",
        status: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadEmpl();
    }, []);

    const loadEmpl = async () => {
        const result = await axios.get(`http://localhost:8080/employee/${id}`);
        setEmpls(result.data);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>

                    <h2>Details of employee id: {empls.id}</h2>
                    <div className='card'>
                        <div className='card-header'>


                            <Collapsible trigger="Employee section">
                                <ul>
                                    <li className='list-group-item'>
                                        <b>First Name:</b>
                                        {empls.firstName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Middle Name:</b>
                                        {empls.middleName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Last Name:</b>
                                        {empls.lastName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>City:</b>
                                        {empls.locationCity}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Address:</b>
                                        {empls.address}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Date of Birth:</b>
                                        {empls.dateOfBirth}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Telephone:</b>
                                        {empls.telephone}
                                    </li>
                                </ul>
                            </Collapsible>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-header'>
                            <Collapsible trigger="Position Section">
                                <ul>
                                    <li className='list-group-item'>
                                        <b>Position Title:</b>
                                        {empls.positionTitle}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Hire Date:</b>
                                        {empls.hireDate}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Email:</b>
                                        {empls.email}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Salary:</b>
                                        {empls.salary}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Time in Position:</b>
                                        {empls.timeInPosition}
                                    </li>
                                </ul>
                            </Collapsible>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>



                </div>
            </div>
        </div>
    )
}
