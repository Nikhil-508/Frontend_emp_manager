import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [employee,setEmployee] = useState({
        Fname: "",
        Lname: "" ,
        department: "",
        designation: "" ,
        salary: 0,
        joinDate: '',
        imageUrl: ""
    })

    const handleChange = (e) =>{
        const {Fname,value} = e.target
        setEmployee({...employee,[Fname]:value})
    }

    const navigate = useNavigate()

    const handleSubmit = (event)  => {
        console.log(event,"heyyy")
        event.preventDefault()
        axios.post('http://localhost:3000/employees/create-employee',employee)
        .then(result => {
            alert('sure to add this employee?')
            navigate('/')
        }).catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='p-3 border-1 w-25'>
      <h4>Add Employee</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Fname" className="form-label">First Name </label>
          <input onChange={handleChange} name='Fname'  type="text" placeholder='Enter First Name' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="Lname" className="form-label">Last Name </label>
          <input onChange={handleChange} name='Lname'  type="text" placeholder='Enter Last Name' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department </label>
          <input onChange={handleChange} name='department'  type="text" placeholder='Enter Department' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">Designation </label>
          <input onChange={handleChange} name='designation'  type="text" placeholder='Enter Designation' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary </label>
          <input onChange={handleChange} name='salary'  type="text" placeholder='Enter Salary' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="JoinDate" className="form-label">Date of Join </label>
          <input onChange={handleChange} name='joinDate'  type="text" placeholder='Enter Date of join' className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" >Image Url</label>
          <input onChange={handleChange} name='imageUrl'  type="text" placeholder='Enter Url' className="form-control"/>
        </div>
        <button className='mt-1 btn btn-primary w-100 mt-2 mb-3'> Add</button>
      </form>
    </div>
  </div>
  )
}

export default Create
