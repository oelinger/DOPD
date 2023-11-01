'use client'

import mailTo from "@/app/utils/mailTo";
import {Button} from "@nextui-org/button";
import {MailIcon} from "@nextui-org/shared-icons";

export default function MailtoButton(props: { email: string, label?: string, className?: string }) {
    return (
            <Button onClick={() => mailTo(props.email)} className={props.className}
                    startContent={<MailIcon/>}>{props.label ?? props.email}</Button>
    )
}
