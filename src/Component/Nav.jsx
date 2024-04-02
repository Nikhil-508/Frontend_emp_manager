import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {



  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a className="navbar-brand">Employees</a>
    <Link to={'/create-employee'}>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"> + </button>
    </Link>
    <form className="form-inline my-20">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
  </div>
  )
}




export default Nav
