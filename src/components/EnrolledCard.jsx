import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import BookCard from "./BookCard.jsx";

const CourseCardStudent = ({book, role}) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/book/books')
            .then(res => {
                setBooks(res.data)
                console.log(res.data)
            }).catch(err => console.log(err))
    } , [])
    return (
        <div className='book-list'>
            {
                books.map(book => {
                    return <BookCard key={book.id} book = {book} role = {role}></BookCard>
                })
            }
        </div>
    )
}

export default CourseCardStudent