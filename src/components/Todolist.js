import React from 'react'

export default function Todolist(props) {
  return (
    <div className='main'>
      <li className='list-items'>
       {props.inputs} 
       <button className='dlt' onClick={e=>{props.handleOndlt(props.index)}}>Dlt</button>
      </li>
    </div>
  )
}
