import { useEffect, useRef } from "react";

export const useDebouncedCallback = <A extends any[]>(
    callback: (...args: A) => void,
    waitTime: number
): ((...args: A) => void) => {
    const argsRef = useRef<A>();
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const cleanTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(cleanTimeout, []);

    const debouncedCallback = (...args: A): any => {
        argsRef.current = args;
        cleanTimeout();

        timeoutRef.current = setTimeout(() => {
            if (argsRef.current) {
                callback(...argsRef.current);
            }
        }, waitTime);
    };

    return debouncedCallback;
};
