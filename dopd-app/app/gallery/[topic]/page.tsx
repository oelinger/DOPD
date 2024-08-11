'use client';
import { usePathname } from 'next/navigation';
import Hero, { ImageObject } from '@/app/components/Hero/Hero';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';
import ContentWrap from '@/app/components/ContentWrap/ContentWrap';
import Content from '@/app/components/Content/Content';
import DOPDImage from '@/app/components/Image/DOPDImage';
import imagePath from '@/app/utils/imagePath';

export default function Gallery() {
    const pathname = usePathname();
    const title = pathname.split('/')[2];
    const heroImage: ImageObject = {
        imageName: `${title}.jpg`,
        alt: `${title} - Hero Image`,
        width: 1000,
        height: 500,
    };
    const contentImages: ImageObject[] = [
        {
            imageName: `${title}1.jpg`,
            alt: `${title} - Image 1`,
            width: 500,
            height: 500,
        },
        {
            imageName: `${title}2.jpg`,
            alt: `${title} - Image 2`,
            width: 500,
            height: 500,
        },
        {
            imageName: `${title}3.jpg`,
            alt: `${title} - Image 3`,
            width: 500,
            height: 500,
        },
        {
            imageName: `${title}4.jpg`,
            alt: `${title} - Image 4`,
            width: 500,
            height: 500,
        },
    ];
    return (
        <PageContainer>
            <Hero headline={title.toUpperCase()} image={heroImage} />
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
