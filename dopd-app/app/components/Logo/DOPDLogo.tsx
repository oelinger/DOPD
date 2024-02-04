// 'use client';
import * as StyleX from '@stylexjs/stylex';
import imagePath from '@/app/utils/imagePath';
import DOPDImage from '@/app/components/Image/DOPDImage';

// export const runtime = 'edge';

const style = StyleX.create({
    logo: {
        width: '100%',
        maxWidth: '10rem',
    },
});

export const DOPDLogo = () => {
    return (
        <DOPDImage
            {...StyleX.props(style.logo)}
            alt={'D.O.P.D. - Logo'}
            src={imagePath('DOPD-logo.png')}
            width={140}
            height={45}
        />
    );
};
