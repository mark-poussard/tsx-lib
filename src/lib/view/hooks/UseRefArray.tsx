import React, { useState, useEffect, createRef, useRef } from 'react';

export const useRefArray = <R, T>(array : T[]) => {
    // const [refArray, setRefArray] = useState<React.RefObject<R>[]>([]);
    const refArray = useRef<(R | null)[]>([])
    useEffect(() => {
        // setRefArray(refArray => 
        //     new Array(array.length)
        //         .fill(undefined)
        //         .map((_, idx) => refArray[idx] || createRef<R>())
        // )
        refArray.current = new Array(array.length)
            .fill(undefined)
            .map((_, idx) => refArray.current[idx] || null)
    }, [array.length]);
    return refArray;
}