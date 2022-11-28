import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/scanner").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {console.log(data)}
      {(typeof data === "undefined") ? (
        <p>Loading...</p>
      ) : (
        data.map((member, i) => (
          
          <p key = {i}>{member}</p>
        ))
      )}

    </div>
  )
}

export default App