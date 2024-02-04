'use client';
import * as StyleX from '@stylexjs/stylex';
import imagePath from '@/app/utils/imagePath';
import { Image } from '@nextui-org/image';

export const runtime = 'edge';

const style = StyleX.create({
    logo: {
        width: '100%',
        maxWidth: '10rem',
    },
});

export const DOPDLogo = () => {
    return (
        <Image
            {...StyleX.props(style.logo)}
            alt={'D.O.P.D. - Logo'}
            src={imagePath('DOPD-logo.png')}
            fallbackSrc={'/images/DOPD-logo.png'}
            width={1048}
        />
    );
};
