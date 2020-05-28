import React, { useEffect, useCallback } from 'react';

export const useOnScreenResize = (callback : () => void) => {
    callback = useCallback(callback, []);
    useEffect(() => {
        callback();
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    }, []);
} 