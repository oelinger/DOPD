import MailtoButton from "@/app/components/Button/MailtoButton";

export const runtime = 'edge';

export default function Home() {
    return (
            <div style={{height: "100svh"}} className="font-arial flex flex-col items-center justify-center p-8 text-center">
                <div className="z-10 max-w-2xl w-full items-center justify-between text-sm">
                    <div className='text-8xl mb-8'>&#x1F6A7;</div>
                    <h1 className="mb-3 text-3xl font-semibold">Willkommen
                        bei D.O.P.D.</h1>
                    <p className="text-2xl">Diese Seite befindet sich derzeit im Aufbau. Bitte schaue in Kürze wieder
                        vorbei!
                        <br/>
                        <br/>
                        <MailtoButton className="text-sm md:text-md" email={"office@oelinger.at"}
                                      label={"Schreibe eine E-Mail!"}/>
                    </p>
                </div>
            </div>
    )
}
