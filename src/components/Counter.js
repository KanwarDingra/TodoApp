import React,{useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

        const handleOnclick=()=>{
            setCount(count+1)
        }

        const handleOnreset=()=>{
            setCount(0)
        }

        const handleOnstart=()=>{
          let number;
          let guess;
          do {
             number = prompt("Enter your number")
            number = Number.parseInt(number)
             guess = Math.floor(Math.random() * 10) + 1

            if (number === guess) {
                alert("You have guessed the right number");
            } else if (number < guess) {
                alert("You have guessed the smaller number");
            } else {
                alert("Oops! Try a greater number");
            }
    } while (number !== guess);
}

  return (
    <div>
      <p className='para'>Start the count</p>
      <div className='btns'>
      <button className='btn' onClick={handleOnclick}>{count}</button>
      <button className='btn2' onClick={handleOnreset}>Reset</button>
      </div>
      <p className='para'>The count is {count}</p>
      <p className="para">Guess the Number Game?</p>
      <p className="para">Start guessing the right number</p>
      <button className='btn2' onClick={handleOnstart}>Start</button>
    </div>
  )
}

export default Counter
