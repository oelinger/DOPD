import * as StyleX from '@stylexjs/stylex';
import Link from 'next/link';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';
import Content from '@/app/components/Content/Content';

export const runtime = 'edge';

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
                    <h1 {...StyleX.props(style.headline)}>Impressum</h1>
                    <div {...StyleX.props(style.text)}>
                        <p>
                            Daniel Oelinger
                            <br />
                            Am Gaisberg 12
                            <br />
                            5310 Mondsee
                            <br />
                            Österreich
                            <br />
                            <br />
                            Mail: <Link href={'mailto:office@oelinger.at'}>office@oelinger.at</Link>
                        </p>
                        <article>
                            <h2>Haftung:</h2>
                            Als Inhaber der Website bin ich bestrebt, die veröffentlichten Informationen stehts aktuell
                            und richtig zu halten. Ich übernehme jedoch keine Verantwortung oder Haftung für die
                            Aktualität und Richtigkeit sowie Vollständigkeit der Inhalte. Insofern kann ich für
                            keinerlei Schäden, die sich aus der Nutzung des Inhalts ergeben können, haftbar gemacht
                            werden.
                        </article>
                        <article>
                            <h2>Copyright:</h2>
                            Sämtliche Texte, Grafiken, Bilder und Dokumente sind urheberrechtlich geschützt. Eine
                            Verwendung jeglicher Art ist nur mit ausdrücklicher Genehmigung von D.O.P.D. zulässig.
                        </article>
                        <article>
                            <h2>Externe Links:</h2>
                            Diese Website enthält Links zu Seiten, die außerhalb dieses Servers im Internet liegen. Für
                            den Inhalt und die Gestaltung der verlinkten Seiten sind ausschließlich deren Betreiber
                            verantwortlich. D.O.P.D. macht sich den Inhalt der verlinkten Seiten nicht zueigen und
                            distanziert sich hiermit ausdrücklich von etwaigen, gegen geltendes Recht verstoßenden
                            Inhalten auf den verlinkten Seiten.
                        </article>
                        <article>
                            <h2>Anbieterkennzeichnung:</h2>
                            Die hier angeführten Informationen enthalten die gesetzlich vorgesehenen Pflichtangaben zur
                            Anbieterkennzeichnung der Internetpräsenz von Daniel Oelinger – Photogarphy &amp; Design
                            (D.O.P.D.). Dieses Impressum gilt ebenso für die Auftritte bei Facebook und anderen sozialen
                            Netzwerken.
                        </article>
                        <article>
                            <h2>Geschlechtsneutrale Formulierung:</h2>
                            Lediglich zur Vereinfachung der Lesbarkeit erfolgt in den Texten dieser Website keine
                            geschlechtsneutrale Differenzierung, sondern wird ausschließlich die männliche Form
                            verwendet. Selbstverständlich ist ihre Ausrichtung in jedem Fall geschlechtsunabhängig.
                        </article>
                        <p>
                            Bei Fragen nehmen Sie gerne Kontakt zu uns auf. Hier können Sie auch direkt Einsicht in
                            unsere&nbsp;
                            <Link href={'/privacy'}>Daten&shy;schutz&shy;bestimmungen</Link>
                            &nbsp;nehmen.
                        </p>
                    </div>
                </Content>
            </Inner>
        </PageContainer>
    );
}
