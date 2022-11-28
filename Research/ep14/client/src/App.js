import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/members", 'no-cors').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []) // <-- empty array means run once

  return (
    <div>

        {(typeof data.members === 'undefined') ? ( // if members is not fetched yet
          <p>loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )}

    </div>
  )
}

export default App