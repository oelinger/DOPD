import React from 'react';
import * as StyleX from '@stylexjs/stylex';

const style = StyleX.create({
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        fontWeight: '400',
        lineHeight: '1.5',
        flex: '1 1 0',
        minWidth: 'calc(33% - 2rem)',
    },
    clickable: {
        cursor: 'pointer',
    },
});
const Content: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
    return (
        <div {...StyleX.props(style.content, onClick ? style.clickable : null)} onClick={onClick}>
            {children}
        </div>
    );
};

export default Content;
