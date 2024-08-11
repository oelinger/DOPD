import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface DOPDImageProps extends ImageProps {}

export default function DOPDImage(props: DOPDImageProps) {
    const fallbackSrc = '/images/placeholder.jpeg';
    const [src, setSrc] = useState(props.src);

    const handleError = () => {
        setSrc(fallbackSrc);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} src={src} onError={handleError}></Image>;
}
