import React from 'react';
import './Inner.css';

const Inner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className='inner'>{children}</div>;
};

export default Inner;
