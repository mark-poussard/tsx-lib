import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './VisibleDiv.scss';

export interface IVisibleDivRef{
    view : () => void;
}

interface IVisibleDivProps{
    children ?: React.ReactNode;
}

const VisibleDiv = forwardRef<IVisibleDivRef, IVisibleDivProps>(
    (props, ref) => {
        const divRef = useRef<HTMLDivElement>(null);
        const isVisible = (el : HTMLDivElement) => {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
            );
        }
        const view = () => {
            if(divRef.current != null){
                if(!isVisible(divRef.current)){
                    divRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                      });
                }
            }
        }
        useImperativeHandle(ref, () => ({
            view
        }));
        return (
            <div className={`visible-div`} ref={divRef}>
                {props.children}
            </div>
        )
    }
)
export default VisibleDiv;