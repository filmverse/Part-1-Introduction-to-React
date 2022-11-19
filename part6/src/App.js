import { useState } from "react";

const App = () => {

  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
      console.log('Value now', newValue)
      setValue(newValue)
    }


  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>thousand</button>
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increase</button>
    </div>
  )
}

// const App = () => {

//   const [ value, setValue ] = useState(10)

//   console.log(value)

//   const handleClick = () => {
//     console.log('Clicked the button');
//     setValue(0)
//   }

//   console.log(value)

//   return (
//     <div>
//     {value}
//       <button onClick={handleClick}>reset to zero</button>
//     </div>
//   )
// }

export default App;