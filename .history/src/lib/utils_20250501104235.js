import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
