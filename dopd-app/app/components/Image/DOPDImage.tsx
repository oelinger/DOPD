import Image, { ImageProps } from 'next/image';
import React from 'react';

export const runtime = 'edge';

interface DOPDImageProps extends ImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
}

export default function DOPDImage(props: DOPDImageProps) {
    // @ts-ignore
    return <Image src={props.src} alt={props.alt} width={props.width} height={props.height}></Image>;
}
