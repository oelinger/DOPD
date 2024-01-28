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
                        <h1 {...StyleX.props(style.headline)}>Impressum</h1>
                        <div {...StyleX.props(style.text)}>
                            <p>Daniel Oelinger</p>
                            <p>
                                Am Gaisberg 12
                                <br />
                                5310 Mondsee
                                <br />
                                Österreich
                            </p>
                            <p>
                                Mail: <a href='mailto:office@oelinger.at'>office@oelinger.at</a>
                            </p>
                            <h2>
                                <strong>Haftung:</strong>
                            </h2>
                            <p>
                                Als Inhaber der Website bin ich bestrebt, die veröffentlichten Informationen stehts
                                aktuell und richtig zu halten. Ich übernehme jedoch keine Verantwortung oder Haftung für
                                die Aktualität und Richtigkeit sowie Vollständigkeit der Inhalte. Insofern kann ich für
                                keinerlei Schäden, die sich aus der Nutzung des Inhalts ergeben können, haftbar gemacht
                                werden.
                            </p>
                            <h2>
                                <strong>Copyright:</strong>
                            </h2>
                            <p>
                                Sämtliche Texte, Grafiken, Bilder und Dokumente sind urheberrechtlich geschützt. Eine
                                Verwendung jeglicher Art ist nur mit ausdrücklicher Genehmigung von D.O.P.D. zulässig.
                            </p>
                            <h2>
                                <strong>Externe Links:</strong>
                            </h2>
                            <p>
                                Diese Website enthält Links zu Seiten, die außerhalb dieses Servers im Internet liegen.
                                Für den Inhalt und die Gestaltung der verlinkten Seiten sind ausschließlich deren
                                Betreiber verantwortlich. D.O.P.D. macht sich den Inhalt der verlinkten Seiten nicht
                                zueigen und distanziert sich hiermit ausdrücklich von etwaigen, gegen geltendes Recht
                                verstoßenden Inhalten auf den verlinkten Seiten.
                            </p>
                            <h2>
                                <strong>
                                    <label>Anbieterkennzeichnung:</label>
                                </strong>
                            </h2>
                            <p>
                                Die hier angeführten Informationen enthalten die gesetzlich vorgesehenen Pflichtangaben
                                zur Anbieterkennzeichnung der Internetpräsenz von Daniel Oelinger – Photogarphy &amp;
                                Design (D.O.P.D.). Dieses Impressum gilt ebenso für die Auftritte bei Facebook und
                                anderen sozialen Netzwerken.
                            </p>
                            <h2>
                                <strong>Geschlechtsneutrale Formulierung:</strong>
                            </h2>
                            <p>
                                Lediglich zur Vereinfachung der Lesbarkeit erfolgt in den Texten dieser Website keine
                                geschlechtsneutrale Differenzierung, sondern wird ausschließlich die männliche Form
                                verwendet. Selbstverständlich ist ihre Ausrichtung in jedem Fall geschlechtsunabhängig.
                            </p>
                            <p>
                                Bei Fragen nehmen Sie gerne Kontakt zu uns auf. Hier können Sie auch direkt Einsicht in
                                unsere&nbsp;
                                <a href='/privacy'>Datenschutzbestimmungen</a>
                                &nbsp;nehmen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
