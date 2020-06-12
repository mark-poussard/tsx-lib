import React from 'react';
import { ISlideshowController } from './Slideshow';
import {range} from '../../../../lib/business/util/Array';
import './BulletController.scss';

const BulletController : React.FC<ISlideshowController> = props => {
    const onClick = (idx : number) => () => {
        props.setCurrentIdx(idx);
    }
    const bulletClassName = (idx : number) => {
        if(props.currentIdx === idx){
            return "active";
        }
        return "";
    }
    return (
        <footer className={`bullet-controller`}>
            {range(0, props.slideshowLength-1).map(idx =>
                <span className={`bullet-controller-bullet ${bulletClassName(idx)}`}
                    onClick={onClick(idx)}>
                    •
                </span>
            )}
        </footer>
    )
}
export default BulletController;