import React from 'react';
import {  createBrowserRouter } from 'react-router-dom';

import BookDetails from './components/BookDetails';
import BookList from './components/BookList';

const router = createBrowserRouter([
    {
        path: "/",
        element: <BookList/>
    },
    {
        path: "/works/:olid",
        element: <BookDetails/>
    }
]) 

// Extrait l'ID de la route "/works/:olid"
const chemin = "/works/:olid";
const id = chemin.replace("/works/", "");

console.log("ID extrait :", id);


 

export default router;


