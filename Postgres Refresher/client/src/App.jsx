import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()

  useEffect(()=>{
    const fetchMethod = async ()=>{
     const res =  await fetch(`http://localhost:8080/api/tutorials`)
     const data = await res.json()
     console.log(data)
     setData(data)
    }
    fetchMethod()
  }, [])


  return (
    <div className="App">
      <div>
      <p className="read-the-docs">
        Return data
        {JSON.stringify(data)}
      </p>
    </div>
    </div>
  )
}

export default App
