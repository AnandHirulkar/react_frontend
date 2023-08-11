import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function () {
    let navigate = useNavigate();

    const [empls, setEmpls] = useState({
        firstName:"",
        middleName:"",
        lastName:"",
        locationCity:"",
        address:"",
        dateOfBirth:"",
        telephone:"",
        positionTitle:"",
        hireDate:"",
        email:"",
        salary:"",
        timeInPosition:"",
        dateArrival:"",
        status:""
    });

    const{firstName, middleName, lastName, locationCity, address, dateOfBirth, telephone, positionTitle, hireDate, email, salary, timeInPosition, dateArrival, status}=empls;

    const onInputChange=(e)=>{
        setEmpls({...empls, [e.target.name]:e.target.value})
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/employee", empls);
        navigate("/");
    };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow'>
          <h2 className='text-center m-4'>Register Employee</h2>
          
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='firstName' className='form-label' >First Name</label>
            <input type='text' className='form-control' placeholder='Enter your first name' name='firstName' id='firstName' 
            value={firstName} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='middleName' className='form-label' >Middle Name</label>
            <input type='text' className='form-control' placeholder='Enter your middle name' name='middleName' id='middleName'
            value={middleName} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='lastName' className='form-label' >Last Name</label>
            <input type='text' className='form-control' placeholder='Enter your last name' name='lastName' id='lastName'
            value={lastName} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='locationCity' className='form-label' >Location City</label>
            <input type='text' className='form-control' placeholder='Enter your city' name='locationCity' id='locationCity'
            value={locationCity} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='address' className='form-label' >Address</label>
            <input type='text' className='form-control' placeholder='Enter your address' name='address' id='address'
            value={address} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='dateOfBirth' className='form-label' >Date of Birth</label>
            <input type='text' className='form-control' placeholder='Enter your date of dateOfBirth' name='dateOfBirth' id='dateOfBirth'
            value={dateOfBirth} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='telephone' className='form-label' >Telephone</label>
            <input type='text' className='form-control' placeholder='Enter your telephone number' name='telephone' id='telephone'
            value={telephone} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='positionTitle' className='form-label' >Position Title</label>
            <input type='text' className='form-control' placeholder='Enter your position title' name='positionTitle' id='positionTitle'
            value={positionTitle} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='hireDate' className='form-label' >Hire Date</label>
            <input type='text' className='form-control' placeholder='Enter your hire date' name='hireDate' id='hireDate'
            value={hireDate} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='email' className='form-label' >Email</label>
            <input type='text' className='form-control' placeholder='Enter your email' name='email' id='email'
            value={email} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='salary' className='form-label' >Salary</label>
            <input type='text' className='form-control' placeholder='Enter your salary' name='salary' id='salary'
            value={salary} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='timeInPosition' className='form-label' >Time in Position</label>
            <input type='text' className='form-control' placeholder='Enter your time in position' name='timeInPosition' id='timeInPosition'
            value={timeInPosition} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='dateArrival' className='form-label' >Arrival Date</label>
            <input type='text' className='form-control' placeholder='Enter your time in position' name='dateArrival' id='dateArrival'
            value={dateArrival} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          <div className='form-group mb-3 form-inline"'> 
            <label htmlFor='status' className='form-label' >Status</label>
            <input type='text' className='form-control' placeholder='Enter your status' name='status' id='status'
            value={status} onChange={(e)=>onInputChange(e)} style={{display:'inline-block'}}/>
          </div>
          

          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
          </form>
        </div>
      </div>
    </div> 
  )
}
