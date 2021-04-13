import React, { useEffect, useCallback } from 'react';

export const useOnScreenResize = (callback : () => (() => void | void), deps?: React.DependencyList | undefined) => {
    deps = deps != null ? deps : [];
    callback = useCallback(callback, deps);
    useEffect(() => {
        const clearCallback = callback();
        window.addEventListener("resize", callback);
        return () => {
            window.removeEventListener("resize", callback);
            if(clearCallback != null){
                clearCallback();
            }
        };
    }, deps);
} 