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

const orders = [200,300,400,500];

// function App() {
//   // const [counter, setCounter] = useState(orders.reduce((total, value) => total + value));
//   const [info, setInfo]= useState({
//     name : "Khoa",
//     email: "khoa.nguyen@codegym.vn",
//     gender : true
//   })
//   function onClickHandle(){
//     // setCounter(counter + 1);
//     // setCounter(preCounter => preCounter + 1)
//     // setCounter(preCounter => preCounter + 1)
//     // setCounter(preCounter => preCounter + 1)
//     // setInfo({
//     //   ...info,
//     //   phone: '34534554'
//     // })
//     setInfo(preInfo => ({
//       ...preInfo,
//       phone: '34534554'
//     }))
//   }
//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={onClickHandle}>Increase</button>
//     </div>
//   )
// }
// const gifts = [
//   "CPU i9",
//   "RAM 32GB RGB",
//   "RGB Keyboard"
// ]
// function App(){
//   const [gift, setGift] = useState()
//   const handleGetGift = () => {
//     const index = Math.floor(Math.random()*gifts.length);
//     setGift(gifts[index])
//   }
//   return (
//     <div style={{padding: 32}}>
//       <h1>{gift || "Chưa có phần thưởng"} </h1>
//       <button onClick={handleGetGift}>Lấy thưởng</button>
//     </div>
//   )
// }
// function App(){
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const handleSubmit = () => {
//     console.log({
//       name,
//       email
//     })
//   }
//   return (
//     <div style= {{padding: 20}}>
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <br/>
//       <input value={email} onChange={e => setEmail(e.target.value)} />
//       <br/>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// const courses = [
//   {
//     id: 1,
//     name: "HTML, CSS"
//   },
//   {
//     id: 2,
//     name: "JavaScript"
//   },
//   {
//     id: 3,
//     name: "ReactJS"
//   }
// ]
// function App(){
//   const [checked, setChecked] = useState(1)
//   const handleSubmit = () => {
//     console.log({
//       id: checked
//     })
//   }
//   return (
//     <div style={{padding:20}}>
//       { courses.map(course => (
//         <div key={course.id}>
//           <input type="radio" 
//             onChange={() => setChecked(course.id)}
//             checked = {course.id === checked}
//           />         
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   )
// }

// function App(){
//   const [list, setList] = useState([])
//   const handleChange = (id) => {
//     setList(prev => {
//       const ischecked = list.includes(id)
//       if(ischecked){
//         return list.filter(item => item !== id);
//       }
//       else{
//         return [...prev, id];
//       }
//     })
//   }

//   const handleSubmit = ()=>{
//     console.log({
//       checked: list
//     })
//   }
//   return (
//     <div style = {{padding: 20}}>
//       {
//         courses.map(course => (
//           <div key={course.id}>
//             <input 
//               type="checkbox"
//               onChange={() => handleChange(course.id)}
//               checked = {list.includes(course.id)}
//             />
//             {course.name}
//           </div>
//         ))
//       }
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

function App(){
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs")) ?? [])
  const [job, setJob] = useState("")
  const handleAdd = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    })
    setJob("")
  }
  const handleRemove = (index) => {
    jobs.splice(index, 1)
    localStorage.setItem("jobs", JSON.stringify(jobs));
    setJobs([...jobs]);
  }
  return (
    <div style={{padding: 32}}>
        <input value={job} onChange={(e) => setJob(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <ul>
          {
            jobs.map(
                (item, index) => <li key={index}>{item} <button onClick={() => handleRemove(index)}>&times;</button></li>
            )
          }      
        </ul>
    </div>
  )
}
export default App;
