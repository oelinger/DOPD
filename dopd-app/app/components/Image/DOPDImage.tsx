import React from 'react';
import Image, { ImageProps } from 'next/image';

// export const runtime = 'edge';

interface DOPDImageProps extends ImageProps {
    variant?: string;
    fallbackSrc?: string;
}

export default function DOPDImage(props: DOPDImageProps) {
    return <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />;
}
