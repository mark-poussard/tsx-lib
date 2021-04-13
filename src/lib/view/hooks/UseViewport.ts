import { useState, useCallback, useEffect } from "react"

const useViewport = (accessor : () => number) => {
    const [viewportValue, setViewportValue] = useState(accessor());
    const resizeCallback = useCallback(() => {
        setViewportValue(accessor())
    }, []);
    useEffect(() => {
        window.addEventListener("resize", resizeCallback);
        return () => window.removeEventListener("resize", resizeCallback);
    }, []);
    return viewportValue;
}

export const useViewportHeight = () => {
    return useViewport(() => window.innerHeight);
}

export const useViewportWidth = () => {
    return useViewport(() => window.innerWidth);
}

export const useViewportMax = () => {
    return useViewport(() => window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight);
}