import React, { useState } from 'react';
import SlideshowDisplay from './SlideshowDisplay';
import './Slideshow.scss';

export interface ISlideshowController{
    currentIdx : number;
    setCurrentIdx : (currentIdx : number) => void;
    slideshowLength : number;
}

interface ISlideshowProps{
    children : React.ReactNode[];
    Controller : React.FC<ISlideshowController>;
    controllerAfter ?: boolean;
}

const Slideshow : React.FC<ISlideshowProps> = props => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const controller = (
        <props.Controller currentIdx={currentIdx}
                setCurrentIdx={setCurrentIdx}
                slideshowLength={props.children.length}/>
    )
    return (
        <div className={`slideshow`}>
            {props.controllerAfter !== true &&
                controller
            }
            <SlideshowDisplay currentIdx={currentIdx}>
                {props.children}
            </SlideshowDisplay>
            {props.controllerAfter === true &&
                controller
            }
        </div>
    )
}
export default Slideshow;