export function HandleCounter({counter, setCounter}){
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