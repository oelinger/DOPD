export default function imagePath(imageName: string) {
    if (process.env.NODE_ENV === 'development') {
        return `/images/${imageName}`;
    } else {
        return `https://r2.oelinger.at/${imageName}`;
    }
}
