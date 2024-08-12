'use client';
import { notFound, usePathname } from 'next/navigation';
import Hero, { ImageObject } from '@/app/components/Hero/Hero';
import PageContainer from '@/app/components/PageContainer/PageContainer';
import Inner from '@/app/components/PageContainer/Inner';
import ContentWrap from '@/app/components/ContentWrap/ContentWrap';
import Content from '@/app/components/Content/Content';
import DOPDImage from '@/app/components/Image/DOPDImage';
import imagePath from '@/app/utils/imagePath';
import {
    getAllowedTopics,
    getCapitalizedTitlePerTopic,
    getHeroImagePerTopic,
    getImagesPerTopic,
} from '@/app/utils/galleryUtils';
import ImageDialog from '@/app/components/ImageDialog/ImageDialog';
import { useEffect, useState } from 'react';
import { isMobile } from '@/app/utils/isMobile';

export default function Gallery() {
    const allowedTopics = getAllowedTopics();
    const pathname = usePathname();
    const topic = pathname.split('/')[2];

    if (!allowedTopics.includes(topic)) {
        notFound();
    }

    const capitalizedTopic = getCapitalizedTitlePerTopic(topic);
    const heroImage: ImageObject = getHeroImagePerTopic(topic);
    const contentImages: ImageObject[] = getImagesPerTopic(topic);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const selectedImage = selectedImageIndex !== null ? contentImages[selectedImageIndex] : null;

    const openImageInDialog = (index: number) => {
        if (!isMobile()) {
            setSelectedImageIndex(index);
            setIsDialogOpen(true);
            document.body.classList.add('no-scroll');
        }
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedImageIndex(null);
        document.body.classList.remove('no-scroll');
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (isDialogOpen && selectedImageIndex !== null) {
                if (event.key === 'ArrowRight') {
                    setSelectedImageIndex((prevIndex) =>
                        prevIndex !== null ? (prevIndex + 1) % contentImages.length : 0,
                    );
                } else if (event.key === 'ArrowLeft') {
                    setSelectedImageIndex((prevIndex) =>
                        prevIndex !== null ? (prevIndex - 1 + contentImages.length) % contentImages.length : 0,
                    );
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isDialogOpen, selectedImageIndex, contentImages.length]);

    return (
        <PageContainer>
            <Hero headline={capitalizedTopic} image={heroImage} />
            <Inner>
                <ContentWrap>
                    {contentImages.map((image, index) => (
                        <Content key={index} onClick={() => openImageInDialog(index)}>
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
            {selectedImage && !isMobile() && (
                <ImageDialog
                    isOpen={isDialogOpen}
                    image={{
                        src: imagePath(selectedImage.imageName),
                        alt: selectedImage.alt,
                        width: selectedImage.width * 2,
                        height: selectedImage.height * 2,
                    }}
                    onClose={closeDialog}
                />
            )}
        </PageContainer>
    );
}
