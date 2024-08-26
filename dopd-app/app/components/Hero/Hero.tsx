'use client';

import React, { CSSProperties } from 'react';
import * as StyleX from '@stylexjs/stylex';
import DOPDImage from '@/app/components/Image/DOPDImage';
import imagePath from '@/app/utils/imagePath';
import Backdrop from '@/app/components/Backdrop/Backdrop';

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
        fontSize: '3.75ch',
        fontWeight: '700',
        letterSpacing: '0.1rem',
    },
    content: {
        zIndex: 10,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        width: '100%',
        padding: '1rem',
        fontSize: '3.5ch',
        color: '#fff',
        fontWeight: '600',
    },
    background: {
        position: 'absolute',
        width: '100vw',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
    },
});

export default function Hero(props: {
    headline: string;
    image?: ImageObject;
    content?: React.JSX.Element;
    style?: CSSProperties | undefined;
}) {
    return (
        <div style={props.style} {...StyleX.props(style.hero)}>
            <div {...StyleX.props(style.content)}>
                <h1 {...StyleX.props(style.headline)}>{props.headline}</h1>
                {props.content}
            </div>
            {props.image && (
                <>
                    <DOPDImage
                        {...StyleX.props(style.background)}
                        src={imagePath(props.image.imageName)}
                        alt={props.image.alt}
                        width={props.image.width}
                        height={props.image.height}
                    />
                    <Backdrop />
                </>
            )}
        </div>
    );
}
