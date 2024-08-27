import React from 'react'

export default function Todo(props) {
  return (
    <div className='container'>
        <h2 className='heading'>Todo App</h2>
        <div className="container2">
            <input type="text" placeholder="Enter your todo" value={props.input} onChange={props.handleInput}/>
            <button className='btn' onClick={props.handleOnclick}>Add</button>
        </div>
    </div>
  )
}
