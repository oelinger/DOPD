import React from 'react';
import * as StyleX from '@stylexjs/stylex';

const style = StyleX.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6rem',
        textAlign: 'center',
    },
    inner: {
        zIndex: 10,
        maxWidth: '64rem',
        width: '100%',
        margin: 'auto',
        padding: '0 1rem',
        '@media screen and (min-width: 1024px)': {
            padding: '0 1.5rem',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '3ch',
    },
});
const PageContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div {...StyleX.props(style.container)}>{children}</div>;
};

export default PageContainer;
