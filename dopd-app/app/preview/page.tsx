import MailtoButton from "../components/Button/MailtoButton";
import DisplayRoutResponse from "@/app/components/DisplayRoutResponse/DisplayRoutResponse";


export const runtime = 'edge';

export default function Page() {
    return (
            <main className="font-arial flex min-h-screen flex-col items-center justify-between p-24 text-center">
                <section className="z-10 max-w-10xl w-full items-center justify-between text-sm lg:flex">
                    <h1 className="mb-3 text-3xl font-semibold">Hello</h1>
                    <MailtoButton email={"office@oelinger.at"} label={"Click me!"}/>
                    <DisplayRoutResponse/>
                </section>
            </main>
    )
}
