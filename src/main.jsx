import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayOut from './components/LayOut'
import Home from './components/Home'
import Books from './components/Books'
import About from './components/About'
import BooksDetails from './components/BooksDetails'
import LoadingSpinner from './components/LoadingSpinner'



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut></LayOut>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader:()=>fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:id',
        element: <BooksDetails></BooksDetails>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: 'about',
        element:<About></About>
      },
     
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

   <RouterProvider router={router}></RouterProvider>

)
