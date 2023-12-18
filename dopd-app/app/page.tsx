import MailtoButton from "@/app/components/Button/MailtoButton";
import Header from "@/app/components/Header/Header";
import * as StyleX from '@stylexjs/stylex';

export const runtime = 'edge';

const style = StyleX.create({
    container: {
        display: 'flex',
        minHeight: '100svh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        textAlign: 'center',
    },
    inner: {
        zIndex: 10,
        maxWidth: '50rem',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '3ch',
    },
    icon: {
        fontSize: '8ch',
        marginBottom: '1rem',
    },
    headline: {
        marginBottom: '1rem',
        fontSize: '3ch',
        fontWeight: '600',
    }
});

export default function Home() {
    return (
        <div {...StyleX.props(style.container)}>
            <Header/>
            <div {...StyleX.props(style.inner)}>
                <div {...StyleX.props(style.icon)}>&#x1F6A7;</div>
                <h1 {...StyleX.props(style.headline)}>Willkommen
                    bei D.O.P.D.</h1>
                <p>Diese Seite befindet sich derzeit im Aufbau. Bitte schaue in Kürze wieder
                    vorbei!
                    <br/>
                    <br/>
                    <MailtoButton email={"office@oelinger.at"} label={"Schreibe eine E-Mail!"}/>
                </p>
            </div>
        </div>
    )
}
