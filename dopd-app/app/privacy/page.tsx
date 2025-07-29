import * as StyleX from '@stylexjs/stylex';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';
import Content from '@/app/components/Content/Content';

const style = StyleX.create({
    headline: {
        fontSize: '3.5ch',
        fontWeight: '600',
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
        <PageContainer>
            <Inner>
                <Content>
                    <h1 {...StyleX.props(style.headline)}>Datenschutz</h1>
                    <div {...StyleX.props(style.text)}>
                        <article>
                            <h2>Wer wir sind</h2>
                            D.O.P.D. steht für Daniel Oelinger Photography &amp; Design, die Adresse meiner Website ist:
                            https://oelinger.at. Diese Seite dient als Portfolio und Galerie um einen Eindruck zu
                            verschafften, was ich beruflich und künstlerisch geleistet habe.
                        </article>
                        <article>
                            <h2>Cookies</h2>
                            <p>
                                Diese Webseite verwendet nur unbedingt erforderliche Cookies die weder akzeptiert noch
                                abgelehnt werden können. Sie gewährleisten lediglich die ordnungsgemäße funktionsweise
                                dieser Website. Du hast jedoch die Möglichkeit, Cookies grundsätzlich im Browser zu
                                deaktivieren.
                            </p>
                            <h3>Verwendete Cookies:</h3>
                            <p>
                                Der Cookie „__cfduid“ wird von Cloudflare gesetzt und verwendet um vertrauenswürdigen
                                Webverkehr zu identifizieren. Der Zweck dieses Cookies ist rein Funktional, es werden
                                keine Daten gespeichert. Der Cookie hat eine Aufbewahrungsfrist von 30 Tagen.
                            </p>
                        </article>
                        <article>
                            <h2>Eingebettete Inhalte von anderen Websites</h2>
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
                        </article>
                        <article>
                            <h2>Mit wem wir deine Daten teilen</h2>
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
                            </p>
                            <p>https://www.cloudflare.com/de-de/privacypolicy/</p>
                        </article>
                    </div>
                </Content>
            </Inner>
        </PageContainer>
    );
}
