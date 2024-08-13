import React from 'react';
import * as StyleX from '@stylexjs/stylex';

const style = StyleX.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});
const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div {...StyleX.props(style.container)}>{children}</div>;
};

export default PageContainer;
