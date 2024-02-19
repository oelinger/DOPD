import Image from 'next/image';
import React from 'react';
import * as StyleX from '@stylexjs/stylex';

export const runtime = 'edge';

const style = StyleX.create({
    heroImage: {
        position: 'absolute',
        width: '100%',
    },
});

export default function DOPDImage(props: {
    variant: string | undefined;
    src: string;
    alt: string;
    width: number;
    height: number;
}) {
    // @ts-ignore
    return (
        <div {...StyleX.props(style.heroImage)}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.height}></Image>
        </div>
    );
}
