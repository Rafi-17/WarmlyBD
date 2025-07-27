import React from 'react';

const CommonButton = ({children}) => {
    return (
        <button className='bg-sky-600 px-3 py-1 rounded-sm text-white font-semibold'>{children}</button>
    );
};

export default CommonButton;