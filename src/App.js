import { useState } from 'react';
import { HandleCounter } from './components/handleCounter';
import { DoubleCounter } from './components/doubleCounter';
import { CounterContextProvider } from './contexts/CounterContext';


function App () {
  return(
    //como o CounterContext é um componente pai do HandleCounter e do DoubleCounter
    //ele pode armazenar um estado que será compartilhado entre eles
    //a função do contexto é armazenar estados e outras coisas que serão compartilhadas entre os componentes
    //e isso não é função de um componente!

    <CounterContextProvider>
      <div>
        <HandleCounter />
        <DoubleCounter />
      </div>
    </CounterContextProvider>
  );
}

export default App;