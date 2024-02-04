import Image from 'next/image';
import React from 'react';

export const runtime = 'edge';

export default function DOPDImage(props: { src: string; alt: string; width: number; height: number }) {
    // @ts-ignore
    return <Image src={props.src} alt={props.alt} width={props.width} height={props.height}></Image>;
}
