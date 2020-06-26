import React, { useRef, useEffect, useCallback } from 'react';
import './DynamicHeightDiv.scss';

interface IDynamicHeightDivProps{
    setHeight : (height : number) => void;
}

const DynamicHeightDiv : React.FC<IDynamicHeightDivProps> = props => {
    const ref = useRef<HTMLDivElement>(null);

    const contentHeightChanged = useCallback(() => {
        if(ref.current != null){
            props.setHeight(ref.current!.clientHeight);
        }
    }, []);

    useEffect(() => {
        contentHeightChanged();
        window.addEventListener("resize", contentHeightChanged);
        return () => window.removeEventListener("resize", contentHeightChanged);
    }, []);
    return (
        <div ref={ref} className={`dynamic-height-div`}>
            {props.children}
        </div>
    )
}
export default DynamicHeightDiv;