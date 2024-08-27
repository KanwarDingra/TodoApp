import React, {useState} from 'react'
import Todo from './components/Todo';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  const handleInput=(e)=>{
    setInput(e.target.value)
  }

  const showItems=()=>{
    let newItems = [...items, input]
    setItems(newItems)
      setInput("")
      console.log(newItems)
  }
  const handleOnclick=()=>{
  if(input===""){

  } else{return showItems();}

  }

  const handleOndlt=(key)=>{
   const dltItems = [...items]
   console.log(dltItems)
   dltItems.splice(key, 1)
    setItems([...dltItems])
  }

  return (
    <div>
      <Todo handleOnclick={handleOnclick} input={input} handleInput={handleInput}/>
      {items.map((item, index)=>{
        return (<Todolist inputs={item} index={index} key={index} handleOndlt={handleOndlt}/>)
      })}
    </div>
  )
}

export default App;
