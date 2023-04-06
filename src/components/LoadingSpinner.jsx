import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[calc(100vh-63px)]'>
                <p className='text-7xl font-thin'>L</p>
                 <div className='w-10 h-10 mt-5 border-4 border-dashed rounded-full animate-spin  border-blue-400'></div>
                <p className='text-7xl font-thin'>ading</p>
           </div>
        </div>
    );
};

export default LoadingSpinner;