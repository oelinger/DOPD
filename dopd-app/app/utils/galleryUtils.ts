import { ImageObject } from '@/app/components/Hero/Hero';

export function getAllowedTopics() {
    return ['beauty', 'motorsport', 'nature', 'skate', 'street', 'travel'];
}

export function getCapitalizedTitlePerTopic(topic: string): string {
    return topic.charAt(0).toUpperCase() + topic.slice(1);
}

export function getHeroImagePerTopic(topic: string): ImageObject {
    const capitalizedTitle = getCapitalizedTitlePerTopic(topic);
    return {
        imageName: `${topic}.jpg`,
        alt: `${capitalizedTitle} - Hero Image`,
        width: 1000,
        height: 500,
    };
}

export function getImagesPerTopic(topic: string, count = 6): ImageObject[] {
    const capitalizedTitle = getCapitalizedTitlePerTopic(topic);
    const images: ImageObject[] = [];
    for (let i = 1; i < count; i++) {
        images.push({
            imageName: `${topic}${i}.jpg`,
            alt: `${capitalizedTitle} - Image ${i}`,
            width: 500,
            height: 500,
        });
    }
    images.push({
        imageName: `${topic}.jpg`,
        alt: `${capitalizedTitle} - Image ${count}`,
        width: 500,
        height: 500,
    });
    return images;
}
