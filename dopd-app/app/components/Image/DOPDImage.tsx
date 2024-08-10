import Image, { ImageProps } from 'next/image';
import React from 'react';
import * as StyleX from '@stylexjs/stylex';

export const runtime = 'edge';

interface DOPDImageProps extends ImageProps {
    src: string;
    alt: string;
    fallbackSrc?: string;
    variant?: string;
}

const style = StyleX.create({
    heroImage: {
        position: 'absolute',
        width: '100%',
    },
});

interface DOPDImageProps extends ImageProps {
    variant?: string;
    fallbackSrc?: string;
}

export default function DOPDImage(props: DOPDImageProps) {
    // @ts-ignore
    return (
        <div {...StyleX.props(style.heroImage)}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height}></Image>
        </div>
    );
}
