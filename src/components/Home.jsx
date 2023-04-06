import React from 'react';
import Lottie from "lottie-react";
import education from '../../public/education.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='m-10 md:flex items-center '>
            <div className='max-sm:mb-10'>
                <p className='bg-yellow-500 w-fit rounded-lg text-xs font-semibold px-1 mb-2'>On Sale!</p>  
                <h2 className='text-3xl font-bold mb-2'> A reader lives a <br/>thousand lives <span className='text-blue-600'>before he dies</span></h2>
                <p className=' mb-2'>  Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
                    who does not read good books is no better than the man who can’t.</p>
                <div className='inline-flex gap-5 mb-2'>
                    <Link to='books' className='inline-flex bg-blue-500 py-1 px-1 rounded-sm font-semibold text-white items-center transition duration-200 hover:bg-blue-700 gap-3'>
                        <button className=''>Visit Store</button>
                        <FontAwesomeIcon icon={faShoppingCart} />
               </Link>
                <p className='font-bold'>Learn More</p>
                </div>
            </div>
            <div className=''>
            <Lottie animationData={education} loop={true} />;

            </div>
        </div>
    );
};

export default Home;