'use client';
import { notFound, usePathname } from 'next/navigation';
import Hero, { ImageObject } from '@/app/components/Hero/Hero';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';
import ContentWrap from '@/app/components/ContentWrap/ContentWrap';
import Content from '@/app/components/Content/Content';
import DOPDImage from '@/app/components/Image/DOPDImage';
import imagePath from '@/app/utils/imagePath';

export default function Gallery() {
    const allowedPath = ['beauty', 'motorsport', 'nature', 'skate', 'street'];
    const pathname = usePathname();
    const titleLowercase = pathname.split('/')[2];
    const titleCapitalized = titleLowercase.charAt(0).toUpperCase() + titleLowercase.slice(1);

    if (!allowedPath.includes(titleLowercase)) {
        notFound();
    }

    const heroImage: ImageObject = {
        imageName: `${titleLowercase}.jpg`,
        alt: `${titleLowercase} - Hero Image`,
        width: 1000,
        height: 500,
    };
    const contentImages: ImageObject[] = [
        {
            imageName: `${titleLowercase}1.jpg`,
            alt: `${titleCapitalized} - Image 1`,
            width: 500,
            height: 500,
        },
        {
            imageName: `${titleLowercase}2.jpg`,
            alt: `${titleCapitalized} - Image 2`,
            width: 500,
            height: 500,
        },
        {
            imageName: `${titleLowercase}3.jpg`,
            alt: `${titleCapitalized} - Image 3`,
            width: 500,
            height: 500,
        },
        {
            imageName: `${titleLowercase}4.jpg`,
            alt: `${titleCapitalized} - Image 4`,
            width: 500,
            height: 500,
        },
    ];
    return (
        <PageContainer>
            <Hero headline={titleCapitalized} image={heroImage} />
            <Inner>
                <ContentWrap>
                    {contentImages.map((image, index) => (
                        <Content key={index}>
                            <DOPDImage
                                src={imagePath(image.imageName)}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                            />
                        </Content>
                    ))}
                </ContentWrap>
            </Inner>
        </PageContainer>
    );
}
