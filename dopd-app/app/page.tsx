'use client';
import MailtoButton from '@/app/components/Button/MailtoButton';
import * as StyleX from '@stylexjs/stylex';
import DOPDImage from '@/app/components/Image/DOPDImage';
import Typewriter from 'typewriter-effect';
import imagePath from '@/app/utils/imagePath';
import React from 'react';
import Hero, { ImageObject } from '@/app/components/Hero/Hero';
import ContentWrap from '@/app/components/ContentWrap/ContentWrap';
import Content from '@/app/components/Content/Content';
import { useRouter } from 'next/navigation';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';

export const runtime = 'edge';

const style = StyleX.create({
    icon: {
        fontSize: '8ch',
        marginBottom: '0.5rem',
    },
    headline: {
        fontSize: '3.5ch',
        fontWeight: '600',
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

// const maintenance: boolean = process.env.NODE_ENV === 'production';
const maintenance: boolean = false;

const heroImage: ImageObject = {
    imageName: 'placeholder.jpeg',
    alt: 'D.O.P.D. - Hero Image',
    width: 1000,
    height: 500,
};

export default function Home() {
    const router = useRouter();

    return (
        <div>
            {maintenance ? (
                <PageContainer>
                    <Inner>
                        <Content>
                            <h1 {...StyleX.props(style.headline)}>Willkommen bei D.O.P.D.</h1>
                            <div {...StyleX.props(style.icon)}>&#x1F6A7;</div>
                            <p>Diese Seite befindet sich derzeit im Aufbau. Bitte schaue in Kürze wieder vorbei!</p>
                            <MailtoButton email={'office@oelinger.at'} label={'Schreibe eine E-Mail!'} />
                        </Content>
                    </Inner>
                </PageContainer>
            ) : (
                <PageContainer>
                    <Hero
                        image={heroImage}
                        headline='Willkommen bei D.O.P.D.'
                        content={
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                D.O.P.D. steht für&nbsp;
                                <Typewriter
                                    options={{
                                        strings: ['Photographie', 'UX - Design', 'Web - Design', 'Grafik - Design'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                        deleteSpeed: 50,
                                    }}
                                />
                            </div>
                        }
                    />
                    <Inner>
                        <div>
                            <ContentWrap>
                                <Content onClick={() => router.push('/gallery/motorsport')}>
                                    <DOPDImage
                                        src={imagePath('motorsport.jpg')}
                                        width={500}
                                        height={200}
                                        alt={'Motorsport Gallery'}
                                    />
                                    <i className={'bi bi-tsunami'} />
                                    <p>Nature</p>
                                </Content>
                                <Content onClick={() => router.push('/gallery/architecture')}>
                                    <DOPDImage
                                        src={imagePath('architecture.jpeg')}
                                        width='500'
                                        height='200'
                                        alt={'Architecture Gallery'}
                                    />
                                    <i className={'bi bi-building'} />
                                    <p>Urban</p>
                                </Content>
                            </ContentWrap>
                        </div>
                    </Inner>
                </PageContainer>
            )}
        </div>
    );
}
