// motionVariants.ts
import { Variants } from 'framer-motion';

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            // delay: 0.5,
            staggerChildren: 0.3,
            ease: 'easeOut',
        },
    },
};

export const slideLeftInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

export const slideRightInVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

export const popVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
        },
    },
};

export const plusFloatingVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: [0, -10, 0],
        transition: {
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
};

export const createFloatingVariants = (): Variants => {
    const generateRandomSequence = (count: number, min: number, max: number) => {
        return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    };

    return {
        hidden: { opacity: 0, x: 0, y: 0 },
        visible: {
            opacity: 1,
            x: generateRandomSequence(5, -10, 10),
            y: generateRandomSequence(5, -10, 10),
            transition: {
                duration: 7,
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
