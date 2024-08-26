'use client';
import * as StyleX from '@stylexjs/stylex';
import React from 'react';
import ContentWrap from '@/app/components/ContentWrap/ContentWrap';
import Content from '@/app/components/Content/Content';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';
import Typography from '@mui/material/Typography';
import Hero from '@/app/components/Hero/Hero';

export const runtime = 'edge';

const style = StyleX.create({
    wrapper: {
        width: '100%',
        '@media screen and (min-width: 360px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media screen and (min-width: 768px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10rem',
        borderRadius: '0.5rem',
        background: '#ddd',
        '@media (prefers-color-scheme: dark)': {
            background: '#333',
        },
    },
});

const boxTitles = [
    'Gaszähler',
    'Haushaltszähler',
    'Prodktion Einspeisung Verbrauch',
    'PV-Produktionszähler',
    'Wärmepumpe',
];

const heroContent = (
    <iframe
        style={{
            position: 'absolute',
            zIndex: -1,
            objectFit: 'contain',
            objectPosition: 'center',
            width: '100%',
            maxWidth: '530px',
            minHeight: '540px',
            border: 'none',
        }}
        src={'https://pxxxx-dev01.adregio.net/energiefluss-erweitert/index.html?instance=0'}
    />
);

const boxes = () => {
    return boxTitles.map((title, index) => {
        return (
            <Content key={index} styleX={style.box} onClick={handleContainerClick.bind(this, title)}>
                <Typography variant={'subtitle1'}>{title}</Typography>
            </Content>
        );
    });
};

const handleContainerClick = (title: string) => {
    const query = title.replace(/\s/g, '-').toLowerCase();
    window.location.href = `/code-demo/${query}`;
};

export default function Home() {
    return (
        <PageContainer>
            <Inner>
                <Hero content={heroContent} headline={''} />
                <ContentWrap styleX={style.wrapper}>{boxes()}</ContentWrap>
            </Inner>
        </PageContainer>
    );
}
