'use client';
import * as StyleX from '@stylexjs/stylex';
import React from 'react';
import ContentWrap from '@/app/components/ContentWrap/ContentWrap';
import Content from '@/app/components/Content/Content';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';
import Typography from '@mui/material/Typography';

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
    'First Section',
    'Second Section',
    'Third Section',
    'Fourth Section',
    'Fifth Section',
    'Sixth Section',
];

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
    alert(title);
};

export default function Home() {
    return (
        <PageContainer>
            <Inner>
                <Typography variant={'h1'}>CODE DEMO</Typography>
                <ContentWrap styleX={style.wrapper}>{boxes()}</ContentWrap>
            </Inner>
        </PageContainer>
    );
}
