// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

// function Button({children, onClick}){
//     return (
//       <button onClick={() => onClick(Math.random())}>{children}</button>
//     )
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Button  onClick = {(number) => { console.log("number: ", number)}}>Click me!</Button>
//       </header>
//     </div>
//   );
// }


function App() {
  const [counter, setCounter] = useState(1);
  function onClickHandle(){
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClickHandle}>Increase</button>
    </div>
  )
}

export default App;
