import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book, role}) => {
    const {name, author, imageUrl} = book;
  return (
      <div className="card-items">
          <div className='book-card'>
              <div className="book-details">
                  <h3>Module Name: {name}</h3>
                  <p>Module Leader: {author}</p>
                  <p>Duration : {imageUrl}</p>
              </div>
              {role === "admin" &&
                  <div className="book-actions">
                      <button><Link to={`/book/${book._id}`} className='btn-link'>Edit</Link></button>
                      <button><Link to={`/delete/${book._id}`} className='btn-link'>Delete</Link></button>
                  </div>}
              {
                  role === "student" &&
                  <div className="book-actions">
                      <button><Link to={`/student-courses/${book._id}`} className='btn-link'>Enroll Now</Link></button>

                  </div>
              }


          </div>
      </div>

  )
}

export default BookCard