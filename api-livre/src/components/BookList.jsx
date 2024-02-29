import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

const BookList = () => {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    axios.get('https://openlibrary.org/subjects/science_fiction.json?limit=100')
      .then(response => {
        setBooks(response.data.works)
        
      })
  }, [])

 
  

  return (
    <div className='d-flex flex-wrap flex-column' >
    
     
  <h1 className='text-center my-5'>Liste des livres</h1>
  <div className='d-flex justify-content-center flex-wrap gap-5'>
  
    {books.map((book) => (
      <div key={book.id} className='d-flex text-center card align-items-center p-3 border border-dark w-25 my-3'>
        <Link to={`/works/${book.id}`}> 
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
            alt={`${book.title} cover`}
            className='w-25 my-4'
          />
         <h2 className='card-title'> {book.title}</h2>
        </Link>
      </div>
    ))}
  </div>
  </div>
  
);
};

