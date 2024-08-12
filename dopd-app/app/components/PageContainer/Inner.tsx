import React from 'react';
import * as StyleX from '@stylexjs/stylex';

const style = StyleX.create({
    inner: {
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
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
        gap: '4rem',
    },
});
const Inner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div {...StyleX.props(style.inner)}>{children}</div>;
};

export default Inner;
