import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/members").then(
      res=>res.json()
    ).then(
      data=>{
        setData(data)
        console.log(data)
        
      }
    )
  }, []) // <-- empty array means run once

  return (
    <div>
      {console.log("Looking for members")}
      {/* {(typeof data.members === 'undefined') ? (console.log("No members")) : (console.log("Members found"))} */}

      {(typeof data.members === 'undefined') ? ( // if members is not fetched yet
        <p>loado...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
      {console.log("end")}
    </div>
  )
}

export default App