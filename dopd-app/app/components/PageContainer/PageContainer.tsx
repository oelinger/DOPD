import React from 'react';
import './PageContainer.css';

const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className='page-container'>{children}</div>;
};

export default PageContainer;
