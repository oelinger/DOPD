import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
            <div className="container p-4 text-center">
                <div className="construction-icon text-6xl mb-4">&#x1F6A7;</div>
                <h1 className="text-2xl font-bold mb-4">Willkommen bei D.O.P.D.</h1>
                <p className="text-lg">Diese Seite befindet sich derzeit im Aufbau. Bitte schauen Sie in Kürze wieder
                    vorbei!</p>
            </div>
        </main>
    )
}
