import { useState } from "react"

export default function Team(){
    const teamStyle ={
            border: '2px solid red',
            margin:'13px',
            padding:'12px',
            borderRadius:'13px'
         }
    const [player,setPlayer]= useState(0)

    
       const handlePlater =()=>
       {
        const newPlayer= player+1;
        setPlayer(newPlayer);
         }
       const handleRemovePlayer =()=>
       {
        const newPlayer= player-1;
        setPlayer(newPlayer);
         }
    return(
        <div style={teamStyle}>
            <h3>Players:{player} </h3>
        <button onClick={handlePlater}>Add Player</button>
        <button onClick={handleRemovePlayer}>remove Player</button>
        </div>
    )
}