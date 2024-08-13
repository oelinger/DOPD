import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import * as StyleX from '@stylexjs/stylex';

export interface DOPDImageProps extends ImageProps {}

const style = StyleX.create({
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        '-webkit-object-fit': 'cover',
        objectPosition: 'center',
        '-webkit-object-position': 'center',
    },
});

export default function DOPDImage(props: DOPDImageProps) {
    const fallbackSrc = '/images/placeholder.jpeg';
    const [src, setSrc] = useState(props.src);

    const handleError = () => {
        setSrc(fallbackSrc);
    };

    return <Image {...StyleX.props(style.image)} {...props} src={src} onError={handleError}></Image>;
}
