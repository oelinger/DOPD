import React from 'react';
import * as StyleX from '@stylexjs/stylex';
import DOPDImage, { DOPDImageProps } from '@/app/components/Image/DOPDImage';

const style = StyleX.create({
    dialog: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1000,
    },
    image: {
        maxWidth: '90%',
        maxHeight: '90%',
    },
    closeButton: {
        position: 'absolute',
        top: '0',
        right: '1rem',
        fontSize: '3rem',
        color: '#fff',
        cursor: 'pointer',
    },
});

interface ImageDialogProps {
    isOpen: boolean;
    image: DOPDImageProps;
    onClose: () => void;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ isOpen, image, onClose }) => {
    if (!isOpen) return null;

    return (
        <div {...StyleX.props(style.dialog)} onClick={onClose}>
            <span {...StyleX.props(style.closeButton)} onClick={onClose}>
                &times;
            </span>
            <DOPDImage {...StyleX.props(style.image)} {...image} />
        </div>
    );
};

export default ImageDialog;
