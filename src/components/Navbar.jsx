import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>Quick 2 Learn</Link>
        </div>
        <div className='navbar-right'>

            {role === "admin" && <>
                <Link to="/books" className='navbar-link'>Courses</Link>
              <Link to="/addbook" className="navbar-link">Add Course</Link>
              <Link to="/addstudent" className="navbar-link">Add Student</Link>
              <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            </>
            }
            {role === "student" && <>
                <Link to="/books" className='navbar-link'>Find Courses</Link>
                <Link to="/student-courses" className="navbar-link">Enrolled Courses</Link>

            </>
            }
            {role === "" ?
            <Link to="/login" className='navbar-link'>Sign In</Link>
             : <Link to="/logout" className='navbar-link'>Sign Out</Link>
             }
            
        </div>
    </nav>
  )
}

export default Navbar