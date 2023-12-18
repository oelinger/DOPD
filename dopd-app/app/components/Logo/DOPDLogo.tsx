'use client'
import * as StyleX from "@stylexjs/stylex";

export const runtime = 'edge';

const style = StyleX.create({
    logo: {
        width: '100%',
        maxWidth: '10rem',
    },
});

export const DOPDLogo() => {
    return <img {...StyleX.props(style.logo)} alt={"D.O.P.D. - Logo"} src={"/images/DOPD-logo.png"} width={1048}/>;
}
