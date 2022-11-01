import { useEffect, useState, useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export function DoubleCounter(){
    const [doubleCounter, setDoubleCounter] = useState(0);

    const {counter} = useContext(CounterContext); 

    useEffect(() => {
        setDoubleCounter(counter * 2);
    } , [counter]);

    return(
        <h1>Dobro de counter: {doubleCounter}</h1>
    )
}