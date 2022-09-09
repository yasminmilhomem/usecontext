import { useState } from 'react';
import { HandleCounter } from './components/handleCounter';
import { DoubleCounter } from './components/doubleCounter';

function App () {
  const [counter, setCounter] = useState(0);
  return(
    <div>
      <HandleCounter counter={counter} setCounter={setCounter}/>
      <DoubleCounter counter={counter}/>
    </div>
  );
}

export default App;