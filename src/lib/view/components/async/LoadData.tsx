import React, { useState, useEffect } from 'react';

interface ILoadComponentProps<T>{
    promise : Promise<T>;
    children : (value : T) => React.ReactNode;
}

const PROMISE_UNRESOLVED = {};
type PROMISE_UNRESOLVED_TYPE = {};

const LoadData = <T extends unknown> (props : ILoadComponentProps<T>) => {
    const [promiseValue, setPromiseValue] = useState<T | PROMISE_UNRESOLVED_TYPE>(PROMISE_UNRESOLVED);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        setPromiseValue(PROMISE_UNRESOLVED)
        setError(null);
        props.promise.then(value => {
            setPromiseValue(value);
        })
        .catch(setError);
    }, [props.promise]);
    if(error != null){
        return (
            <div>
                <h1>An Error Was Encountered</h1>
                {error.message}
            </div>
        )
    }
    if(promiseValue === PROMISE_UNRESOLVED){
        return (
            <div>Loading...</div>
        )
    }
    return (
        <>
            {props.children(promiseValue as T)}
        </>
    );
}
export default LoadData;