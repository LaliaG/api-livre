import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = ({ match }) => {
  const [book, setBook] = useState(null);
  const id = match.params.olid; // Récupère l'ID depuis les paramètres d'URL

  useEffect(() => {
    // Faites une requête pour récupérer les détails du livre
    axios.get(`/api/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Erreur lors de la récupération des détails du livre :', error));
  }, [id]);

  if (!book) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <>
      <h1>Détails du livre</h1>
      <p>Titre : {BookDetails.title}</p>
      <p>Auteur : {BookDetails.authors && BookDetails.authors[0].name}</p>
      <p>Date de publication : {BookDetails.publish_date}</p>
      <p>Description : {BookDetails.description}</p>
      <img
        src={`https://covers.openlibrary.org/b/id/${BookDetails.cover_id}-L.jpg`}
        alt={`${BookDetails.title} cover`}
      />
    </>
  );
};

export default BookDetails;

// const BookDetails = () => {
  
//   const { olid } = useParams();
//   const [bookDetails, setBookDetails] = useState({});





//   useEffect(() => {
    
//     axios.get(`https://openlibrary.org/works/${olid}.json`)
//         .then(response => {
//          setBookDetails(response.data)   
//         console.log('les détails du livre sont affichés:');
        
//       })

//  }, [olid])

  







  

//   return (
//     <div>
//       <h1>{book.title}</h1>
//       <p>Auteur : {book.author}</p>
//       <p>Description : {book.description}</p>
//       {/* Autres détails du livre */}
//     </div>
//   );
// };

// export default BookDetails;


