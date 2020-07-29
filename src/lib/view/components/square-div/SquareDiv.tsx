import React from 'react';
import './SquareDiv.scss';

interface ISquareDivProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{

}

const SquareDiv : React.FC<ISquareDivProps> = props => {
    let {className, ...otherProps} = props;
    className = (className != null)?className:"";
    return (
        <div className={`square-div ${className}`} {...otherProps}>
            <div className={`square-div-enforcer`}>
                <div className={`square-div-content`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default SquareDiv;