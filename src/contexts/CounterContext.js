import { createContext, useState } from "react";

export const CounterContext = createContext(); //criando o contexto CounterContext

export function CounterContextProvider({children}){ //função pra retornar o provider
    const [counter, setCounter] = useState(0);

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}