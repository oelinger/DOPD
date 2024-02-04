'use client';

import React from 'react';
import * as StyleX from '@stylexjs/stylex';
import DOPDImage from '@/app/components/Image/DOPDImage';
import imagePath from '@/app/utils/imagePath';

export const runtime = 'edge';

export interface ImageObject {
    imageName: string;
    alt: string;
    width: number;
    height: number;
}

const style = StyleX.create({
    hero: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        width: '100%',
        overflow: 'hidden',
    },
    headline: {
        fontSize: '3.5ch',
        fontWeight: '600',
    },
    image: {
        position: 'absolute',
        width: '100%',
        objectFit: 'cover',
    },
});

export default function Hero(props: { image: ImageObject; content: React.JSX.Element; headline: string }) {
    return (
        <div {...StyleX.props(style.hero)}>
            <h1 {...StyleX.props(style.headline)}>{props.headline}</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>D.O.P.D. steht für&nbsp;</div>
            {props.content}
            <DOPDImage
                variant='hero'
                src={imagePath(props.image.imageName)}
                alt={props.image.alt}
                width={props.image.width}
                height={props.image.height}
            />
        </div>
    );
}
