export const runtime = 'edge';

import MailtoButton from "../components/Button/MailtoButton";

export default function Page() {
    return (
        <main className="font-arial flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-10xl w-full items-center justify-between text-sm lg:flex">
                <h1 className="mb-3 text-3xl font-semibold">Hello</h1>
                <MailtoButton email={"office@oelinger.at"} label={"Click me!"}/>
            </div>
        </main>
    )
}
