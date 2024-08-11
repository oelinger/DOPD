import React from 'react';
import * as StyleX from '@stylexjs/stylex';

const style = StyleX.create({
    contentWrap: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        '@media screen and (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr',
        },
        gap: '1rem',
        margin: '1rem 0',
    },
});
const ContentWrap: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div {...StyleX.props(style.contentWrap)}>{children}</div>;
};

export default ContentWrap;
