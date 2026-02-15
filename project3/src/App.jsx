import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className="text-4xl bgfont-bold text-blue-500 ">
  Tailwind Working 🚀
</h1>
<Card/>
<Card/>
<Card/>
    </>
  )
}

export default App
