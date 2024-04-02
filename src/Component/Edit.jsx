import React from 'react'

const Edit = () => {
    const handleEdit = () =>{
        
    }
  return (
    <div>
          <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='p-3 border-1 w-25'>
      <h4>Add Employee</h4>
      <form onSubmit={handleEdit}>
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
      
    </div>
  )
}

export default Edit
