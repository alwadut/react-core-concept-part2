
import './App.css'
import Counter  from './counter';
import Team from './team';
import Users from './users';
import Friends from './friends';




function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 =() => {
    alert('button 2 clicked ')
  }
const AddToFive = (num)=>{
    alert(num+5);
  }
  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click me </button>

      <button onClick={handleClick2}> clickd 2
      </button>

      <button onClick={()=> {alert('third button clicked')}}>third</button>

      {/* <button onClick={AddToFive(3)}>four</button>
      this is worng sway to send perameter */}


    {/* right way to send perameter  */}
      <button onClick={()=>AddToFive(4)}>Four</button>



    </>
  )
}

export default App
