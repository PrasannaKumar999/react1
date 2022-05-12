
import './App.css';
import FunctionalComponent from './src1/classcomp';
import ClassComponent from './src1/functionalcomponent';
import './src1/sty.css'
import { useState } from 'react';
function App() {
  const[name1,setName1]=useState(false);
  const[name2,setName2]=useState(false);

    return (
    <div className="App">
      <h1 style={{fontSize:"3vw"}}>Style Using Function Component and Class Component</h1>
      <div className="hid">
      <header1>  
      <button onClick={()=>{name1?setName1(false):setName1(true)}}>To Style with Functional Component</button>
      {name1&&<FunctionalComponent />}
      </header1>

      <header2>
      <button onClick={()=>{name2?setName2(false):setName2(true)}} >To Style with Class Component</button>
      {name2&&<ClassComponent />}
      </header2>
      </div>
    </div>
  );
}

export default App;