import React from 'react';
import './SlideshowDisplay.scss';

interface ISlideshowDisplayProps{
    currentIdx : number;
    children : React.ReactNode[];
}

const SlideshowDisplay : React.FC<ISlideshowDisplayProps> = props => {
    return (
        <div className={`slideshow-display`}
            style={{
                width : `${props.children.length*100}%`,
                left : `${props.currentIdx*-100}%`
            }}>
            {props.children.map((content, idx) => 
                <div key={`${idx}`} className={`slideshow-display-content`}
                    style={{
                        width : `${100/props.children.length}%`
                    }}>
                    {content}
                </div>
            )}
        </div>
    )
}
export default SlideshowDisplay;