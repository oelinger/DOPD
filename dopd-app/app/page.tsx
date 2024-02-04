'use client';
import MailtoButton from '@/app/components/Button/MailtoButton';
import * as StyleX from '@stylexjs/stylex';
import DOPDImage from '@/app/components/Image/DOPDImage';
import Typewriter from 'typewriter-effect';
import imagePath from '@/app/utils/imagePath';
import React from 'react';
import Hero, { ImageObject } from '@/app/components/Hero/Hero';

export const runtime = 'edge';

const style = StyleX.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    inner: {
        zIndex: 10,
        maxWidth: '64rem',
        width: '100%',
        margin: 'auto',
        padding: '0 1rem',
        '@media screen and (min-width: 1024px)': {
            padding: '0 1.5rem',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '3ch',
    },
    icon: {
        fontSize: '8ch',
        marginBottom: '0.5rem',
    },
    headline: {
        fontSize: '3.5ch',
        fontWeight: '600',
    },
    contentWrap: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        '@media screen and (min-width: 768px)': {
            gridTemplateColumns: '1fr 1fr',
        },
        gap: '1rem',
        margin: '1rem 0',
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        margin: '1rem 0',
        fontWeight: '400',
        lineHeight: '1.5',
    },
    scrollToFirstButton: {
        position: 'absolute',
        zIndex: 1000,
        bottom: '3rem',
        left: '50%',
        fontSize: '2rem',
        color: '#000',
        cursor: 'pointer',
    },
});

const maintenance: boolean = process.env.NODE_ENV === 'production';
// const maintenance: boolean = true;

const heroImage: ImageObject = {
    imageName: 'placeholder.jpeg',
    alt: 'D.O.P.D. - Hero Image',
    width: 1000,
    height: 500,
};

export default function Home() {
    return (
        <div>
            {maintenance ? (
                <div {...StyleX.props(style.container)}>
                    <div {...StyleX.props(style.inner)}>
                        <div {...StyleX.props(style.content)}>
                            <h1 {...StyleX.props(style.headline)}>Willkommen bei D.O.P.D.</h1>
                            <div {...StyleX.props(style.icon)}>&#x1F6A7;</div>
                            <p>Diese Seite befindet sich derzeit im Aufbau. Bitte schaue in Kürze wieder vorbei!</p>
                            <MailtoButton email={'office@oelinger.at'} label={'Schreibe eine E-Mail!'} />
                        </div>
                    </div>
                </div>
            ) : (
                <div {...StyleX.props(style.container)}>
                    <Hero
                        image={heroImage}
                        headline='Willkommen bei D.O.P.D.'
                        content={
                            <Typewriter
                                options={{
                                    strings: ['Photographie', 'UX - Design', 'Web - Design', 'Grafik - Design'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    deleteSpeed: 50,
                                }}
                            />
                        }
                    />
                    <div {...StyleX.props(style.inner)}>
                        <div>
                            <div {...StyleX.props(style.contentWrap)}>
                                <a {...StyleX.props(style.content)} href={'#'}>
                                    <DOPDImage
                                        fallbackSrc={'placeholder.jpeg'}
                                        src={imagePath('motorsport.jpg')}
                                        width={500}
                                        height={200}
                                        alt={'D.O.P.D. - Logo'}
                                    />
                                    <i className={'bi bi-tsunami'} />
                                    <p>Nature</p>
                                </a>

                                <a {...StyleX.props(style.content)} href={'#'}>
                                    <DOPDImage
                                        fallbackSrc={'placeholder.jpeg'}
                                        src={imagePath('placeholder.jpeg')}
                                        width='500'
                                        height='200'
                                        alt={'D.O.P.D. - Logo'}
                                    />
                                    <i className={'bi bi-building'} />
                                    <p>Urban</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
