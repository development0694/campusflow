import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<div>
	<h2> University Management System</h2>
	</div>
     <p>Home page</p>
	 <p> User count : {count}</p>
	 <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default App
