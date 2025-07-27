import React from 'react';

const CommonButton = ({children}) => {
    return (
        <button className='bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-500 hover:to-blue-500 px-3 py-1 rounded-sm text-white font-semibold shadow-md transition duration-300'>{children}</button>
    );
};

export default CommonButton;