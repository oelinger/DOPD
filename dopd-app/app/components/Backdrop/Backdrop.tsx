import React from 'react';
import * as StyleX from '@stylexjs/stylex';

const style = StyleX.create({
    backdrop: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        backdropFilter: 'brightness(0.75) blur(1px)',
    },
});
const Backdrop = () => {
    return <div {...StyleX.props(style.backdrop)}></div>;
};

export default Backdrop;
