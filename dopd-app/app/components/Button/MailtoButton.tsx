'use client'

import mailTo from "@/app/utils/mailTo";
import { Button } from "@nextui-org/react";

export default function MailtoButton(email: string) {
    return (
        <Button onClick={() => mailTo(email)}></Button>
    )
}