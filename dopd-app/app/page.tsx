import MailtoButton from '@/app/components/Button/MailtoButton';
import * as StyleX from '@stylexjs/stylex';

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
        aspectRatio: '3/2',
        margin: '1rem 0',
        fontWeight: '400',
        lineHeight: '1.5',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
});

export default function Home() {
    return (
        <div {...StyleX.props(style.container)}>
            <div {...StyleX.props(style.inner)}>
                <div {...StyleX.props(style.content)}>
                    <div {...StyleX.props(style.icon)}>&#x1F6A7;</div>
                    <h1 {...StyleX.props(style.headline)}>Willkommen bei D.O.P.D.</h1>
                    <p>Diese Seite befindet sich derzeit im Aufbau. Bitte schaue in Kürze wieder vorbei!</p>
                    <MailtoButton email={'office@oelinger.at'} label={'Schreibe eine E-Mail!'} />
                </div>
            </div>
        </div>
    );
}
