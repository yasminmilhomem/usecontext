import { useEffect, useState } from "react";

export function DoubleCounter({counter}){
    const [doubleCounter, setDoubleCounter] = useState(0);

    useEffect(() => {
        setDoubleCounter(counter * 2);
    } , [counter]);

    return(
        <h1>Dobro de counter: {doubleCounter}</h1>
    )
}