import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)


  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)

    }
  }



  const removeValue = () => {
     if (counter > 0) {
      setCounter(counter - 1)

    }
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Basic Counter</h1>
      <h2>{counter}</h2>
      <button className="addvalue buttons1" onClick={addValue}>Add Value {counter}</button>
      <button className="Removevalue buttons2" onClick={removeValue}>Remove Value {counter}</button>
      <button className="Reset buttons3" onClick={resetValue}>Reset {counter}</button>
    </>
  )
}

export default App