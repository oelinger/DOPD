'use client'

import mailTo from "@/app/utils/mailTo";
import {Button} from "@nextui-org/button";
import {MailIcon} from "@nextui-org/shared-icons";
import * as StyleX from "@stylexjs/stylex";

const style = StyleX.create({
    base: {
        fontSize: '1.25ch',
        fontWeight: '600',
        ':hover': {
            backgroundColor: 'rgba(0,0,0,0.2)',
        }
    }
});

export default function MailtoButton(props: { email: string, label?: string }) {
    return (
            <Button {...StyleX.props(style.base)}
                    onClick={() => mailTo(props.email)}
                    startContent={<MailIcon/>}
            >
                {props.label ?? props.email}
            </Button>
    )
}
