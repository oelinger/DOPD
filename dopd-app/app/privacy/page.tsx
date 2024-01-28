import * as StyleX from '@stylexjs/stylex';

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
    text: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '1.25rem',
        textAlign: 'left',
    },
});

export default function Imprint() {
    return (
        <div>
            <div {...StyleX.props(style.container)}>
                <div {...StyleX.props(style.inner)}>
                    <div {...StyleX.props(style.content)}>
                        <h1 {...StyleX.props(style.headline)}>Datenschutz</h1>
                        <div {...StyleX.props(style.text)}>
                            <h2>
                                <strong>Wer wir sind</strong>
                            </h2>
                            <p>
                                D.O.P.D. steht für Daniel Oelinger Photography &amp; Design, die Adresse meiner Website
                                ist: https://oelinger.at. Diese Seite dient als Portfolio und Galerie um einen Eindruck
                                zu verschafften, was ich beruflich und künstlerisch geleistet habe.
                            </p>
                            <h2>
                                <strong>Cookies</strong>
                            </h2>
                            <p>
                                Diese Webseite verwendet nur unbedingt erforderliche Cookies die weder akzeptiert noch
                                abgelehnt werden können. Sie gewährleisten lediglich die ordnungsgemäße funktionsweise
                                dieser Website. Du hast jedoch die Möglichkeit, Cookies grundsätzlich im Browser zu
                                deaktivieren.
                            </p>
                            <p>
                                Verwendete Cookies:
                                <br />
                                Der Cookie „__cfduid“ wird von Cloudflare gesetzt und verwendet um vertrauenswürdigen
                                Webverkehr zu identifizieren. Der Zweck dieses Cookies ist rein Funktional, es werden
                                keine Daten gespeichert. Der Cookie hat eine Aufbewahrungsfrist von 30 Tagen.
                            </p>
                            <h2>
                                <strong>Eingebettete Inhalte von anderen Websites</strong>
                            </h2>
                            <p>
                                Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z.&nbsp;B. Videos,
                                Bilder, Beiträge etc.). Eingebettete Inhalte von anderen Websites verhalten sich exakt
                                so, als ob der Besucher die andere Website besucht hätte.
                            </p>
                            <p>
                                Diese Websites können Daten über dich sammeln, Cookies benutzen, zusätzliche
                                Tracking-Dienste von Dritten einbetten und deine Interaktion mit diesem eingebetteten
                                Inhalt aufzeichnen, inklusive deiner Interaktion mit dem eingebetteten Inhalt, falls du
                                ein Konto hast und auf dieser Website angemeldet bist.
                            </p>
                            <h2>
                                <strong>Mit wem wir deine Daten teilen</strong>
                            </h2>
                            <p>
                                Grundsätzlich will D.O.P.D. keine Daten von dir sammeln oder teilen! Jedoch werden auf
                                dieser Website Dienste verwendet um die Sicherheit und Schnelligkeit zu gewährleisten.
                                Bitte entnehme deren Umgang mit Daten direkt aus deren Datenschutzerklärungen.
                            </p>
                            <h3>Cloudflare</h3>
                            <p>
                                Diese Website verwendet Cloudflare der Firma Cloudflare, Inc. (101 Townsend St., San
                                Francisco, CA 94107, USA). Über nachfolgenden Link gelangst du zu ihrer
                                Datenschutzerklärung.
                                <br />
                                https://www.cloudflare.com/de-de/privacypolicy/
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
