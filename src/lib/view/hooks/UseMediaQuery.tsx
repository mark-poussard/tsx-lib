import React, { useState, useEffect, useRef, useCallback } from 'react';

export const useMediaQuery = (query : string) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    const updateMatches = useCallback(() => {
        setMatches(window.matchMedia(query).matches);
    }, []);
    useEffect(() => {
        const mediaMatcher = window.matchMedia(query);
        setMatches(mediaMatcher.matches);
        mediaMatcher.addListener(updateMatches);
        return () => mediaMatcher.removeListener(updateMatches)
    }, [query]);
    return matches;
}

export const isMobile = () => {
    return useMediaQuery("screen and (max-width: 600px)");
}