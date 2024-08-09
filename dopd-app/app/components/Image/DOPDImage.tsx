import React from 'react';
import Image, { ImageProps } from '@nextui-org/image';

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
