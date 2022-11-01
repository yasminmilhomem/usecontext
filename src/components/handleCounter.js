import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export function HandleCounter(){
    //utiliza-se chaves, pois ele disponibiliza um objeto
    const {counter, setCounter} = useContext(CounterContext)

    function increaseCounter(){
        setCounter(counter + 1);
    }
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increaseCounter}>AUMENTAR</button>
        </div>
    )
}