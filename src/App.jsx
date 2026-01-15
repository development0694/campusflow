import { useState } from 'react'
import Parent from './Parent.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	<h2> Parent Child Communication </h2>
	<Parent />
    </>
  )
}

export default App
