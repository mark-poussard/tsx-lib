import React from 'react';
import './LinksController.scss';
import { ISlideshowController } from './Slideshow';

const LinksController : (linkNames : string[]) => React.FC<ISlideshowController> = (linkNames : string[]) => props => {
    const onClick = (idx : number) => () => {
        props.setCurrentIdx(idx);
    }
    return (
        <header className={`links-controller`}>
            {linkNames.map((title, idx) =>
                <a onClick={onClick(idx)}>{title}</a>
            )}
        </header>
    )
}
export default LinksController;