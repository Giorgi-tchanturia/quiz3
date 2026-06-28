import { use, useState } from 'react';
import './App.css'
import ToDoApp from './component/ToDoApp';

function App() {

  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const [userInput, setUserInput]=useState();



  const increasCount= () => {
    // setCount(count+1);
    setCount((prev) => prev +1);
  }


  return (
    <>
      <h2>{count}</h2>
      <button onClick={increasCount}>Increase Count</button>
      {isShow && <div className='div-new'>{userInput}</div>}
     {/* {isShow ? <div className='div-new'></div>: null} */}
      <button onClick={ () => setIsShow(!isShow)} className='button-new'>Show/Hide</button>
      <div>
        <input type="text" 
        placeholder='Enter Text'
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        />
      </div>
      <ToDoApp></ToDoApp>
    </>
  )
}

export default App
