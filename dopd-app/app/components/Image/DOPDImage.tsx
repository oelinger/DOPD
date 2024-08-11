import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface DOPDImageProps extends ImageProps {
    variant?: string;
    fallbackSrc?: string | 'images/placeholder.jpeg';
}

export default function DOPDImage(props: DOPDImageProps) {
    const [src, setSrc] = useState(props.src);

    const handleError = () => {
        if (props.fallbackSrc) {
            setSrc(props.fallbackSrc);
        }
    };

    return <Image {...props} alt={props.alt} src={src} onError={handleError}></Image>;
}
