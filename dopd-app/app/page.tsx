import MailtoButton from '@/app/components/Button/MailtoButton';
import * as StyleX from '@stylexjs/stylex';
import { Image } from '@nextui-org/image';

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
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        margin: '1rem 0',
        fontWeight: '400',
        lineHeight: '1.5',
    },
    'img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
});

const maintenance: boolean = true;

export default function Home() {
    return (
        <div {...StyleX.props(style.container)}>
            <div {...StyleX.props(style.inner)}>
                <h1 {...StyleX.props(style.headline)}>Willkommen bei D.O.P.D.</h1>
                {maintenance ? (
                    <div {...StyleX.props(style.content)}>
                        <div {...StyleX.props(style.icon)}>&#x1F6A7;</div>
                        <p>Diese Seite befindet sich derzeit im Aufbau. Bitte schaue in Kürze wieder vorbei!</p>
                        <MailtoButton email={'office@oelinger.at'} label={'Schreibe eine E-Mail!'} />
                    </div>
                ) : (
                    <a {...StyleX.props(style.content)} href={'#'}>
                        <Image isZoomed src={'/images/_MG_0682.jpg'} alt={'D.O.P.D. - Logo'} />
                        <p>Nature</p>
                    </a>
                )}
            </div>
        </div>
    );
}
