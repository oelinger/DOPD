'use client';
import MailtoButton from '@/app/components/Button/MailtoButton';
import * as StyleX from '@stylexjs/stylex';
import { Image } from '@nextui-org/image';
import Typewriter from 'typewriter-effect';
import { Link } from '@nextui-org/link';

export const runtime = 'edge';

const style = StyleX.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
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
        gridTemplateColumns: '1fr 1fr',
        '@media screen and (min-width: 768px)': {
            gridTemplateColumns: '1fr',
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
    hero: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        margin: '1rem 0',
        height: '70vh',
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

export default function Home() {
    return (
        <div {...StyleX.props(style.container)}>
            <div {...StyleX.props(style.inner)}>
                {maintenance ? (
                    <div {...StyleX.props(style.content)}>
                        <h1 {...StyleX.props(style.headline)}>Willkommen bei D.O.P.D.</h1>
                        <div {...StyleX.props(style.icon)}>&#x1F6A7;</div>
                        <p>Diese Seite befindet sich derzeit im Aufbau. Bitte schaue in Kürze wieder vorbei!</p>
                        <MailtoButton email={'office@oelinger.at'} label={'Schreibe eine E-Mail!'} />
                    </div>
                ) : (
                    <div>
                        <div {...StyleX.props(style.hero)}>
                            <h1 {...StyleX.props(style.headline)}>Willkommen bei D.O.P.D.</h1>
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
                            <Link href={'#first'} {...StyleX.props(style.scrollToFirstButton)}>
                                <i className={'bi bi-chevron-down'} />
                            </Link>
                        </div>
                        <div id={'first'} {...StyleX.props(style.contentWrap)}>
                            <a {...StyleX.props(style.content)} href={'#'}>
                                <Image
                                    isZoomed
                                    src={'https://r2.oelinger.at/_MG_6258.jpeg'}
                                    width='500'
                                    height='200'
                                    alt={'D.O.P.D. - Logo'}
                                />
                                <i className={'bi bi-tsunami'} />
                                <p>Nature</p>
                            </a>

                            <a {...StyleX.props(style.content)} href={'#'}>
                                <Image
                                    isZoomed
                                    src={'https://r2.oelinger.at/_MG_6258.jpeg'}
                                    width='500'
                                    height='200'
                                    alt={'D.O.P.D. - Logo'}
                                />
                                <i className={'bi bi-building'} />
                                <p>Urban</p>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
