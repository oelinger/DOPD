export const runtime = 'edge';

export default function Home() {
    return (
        <main className="font-arial flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-8xl w-full items-center justify-between text-sm lg:flex">
                <div className='text-8xl mb-8'>&#x1F6A7;</div>
                <h1 className="mb-3 text-3xl font-semibold">Willkommen
                    bei D.O.P.D.</h1>
                <p className="text-2xl">Diese Seite befindet sich derzeit im Aufbau. Bitte schauen Sie in Kürze wieder
                    vorbei!
                    <br/>
                    <br/>
                    <a className="bg-darkgrey-500 hover:bg-darkgrey-700 text-white py-2 px-4 rounded"
                       href='mailto:office@oelinger.com'>Schreibe eine Mail 📧</a>
                </p>
            </div>
        </main>
    )
}
