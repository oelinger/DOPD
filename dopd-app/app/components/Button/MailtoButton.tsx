'use client';

import mailTo from '@/app/utils/mailTo';
import { Button } from '@heroui/button';
import { MailIcon } from '@heroui/shared-icons';
import * as StyleX from '@stylexjs/stylex';

const style = StyleX.create({
    base: {
        minHeight: '4rem',
        fontSize: '1.5ch',
        fontWeight: '600',
        ':hover': {
            backgroundColor: 'rgba(0,0,0,0.2)',
            '@media (prefers-color-scheme: dark)': {
                color: '#fff',
                backgroundColor: 'rgba(255,255,255,0.2)',
            },
        },
    },
});

export default function MailtoButton(props: { email: string; label?: string }) {
    return (
        <Button {...StyleX.props(style.base)} onPress={() => mailTo(props.email)} startContent={<MailIcon />}>
            {props.label ?? props.email}
        </Button>
    );
}
