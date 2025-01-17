import React, { useEffect, useState } from 'react'
import '../css/Dashboard.css'
import axios from 'axios'

const Dashboard = () => {
  const [students, setStudents] = useState(0)
  const [admin, setAdmin] = useState(0)
  const [books, setBooks] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8080/dashboard')
    .then(res => {
      if(res.data.ok) {
        setStudents(res.data.student)
        setAdmin(res.data.admin)
        setBooks(res.data.book)
      }
    }).catch(err => console.log(err))
  } , [])
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Books</h2> <br />
        <p>{books}</p>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2> <br />
        <p>{students}</p>
      </div>
      <div className="dashboard-box">
        <h2>Total Admins</h2> <br />
        <p>{admin}</p>
      </div>
    </div>
  )
}

export default Dashboard