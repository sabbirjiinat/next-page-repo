import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }
    const { books } = useLoaderData()
 
    // console.log(books);
    return (
        <div className='m-10'>
            <div className='grid  grid-cols-2 md:grid-cols-4 gap-6 '>
                {books.map(book => <Book
                    key={book.isbn13}
                    book={book}
                ></Book>)}
            </div>
        </div>
    );
};

export default Books;