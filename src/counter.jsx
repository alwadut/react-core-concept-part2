import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0);

    const handleCount=() =>{
        const newCount = count+1;
        setCount(newCount)
    }
    const handleAdd = ()=>{
        const removeCount = count-1;
        setCount(removeCount)
    }
    return(
        <div style={{border:'2px solid'}}>
            <h3>Counter: {count}</h3>
            
            <button onClick={handleCount}>Add</button>
            <button onClick={handleAdd}>Remove</button>
        </div>
    )
}