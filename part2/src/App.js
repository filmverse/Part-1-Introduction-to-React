import { useState } from "react";

const App = () => {

  const [ counter, setCounter ] = useState(0)

  console.log(counter)

  const increaseByOne = () => setCounter(counter + 1)

  const decreaseByOne = () => setCounter(counter - 1)

  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={decreaseByOne}>
        minus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App;

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   console.log(counter)
//   // const handleClick = () => {
//   //   console.log('clicked')
//   // }
//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>
//       <button onClick={() => setCounter(0)}>
//         zero
//       </button>
//     </div>
//   )
// }

// export default App;


// import { useState } from "react";

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//   console.log('rendering...', counter)
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App;

// const App = () => {
//   const [count, setCount] = useState(0);
//   console.log(count)
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default App;