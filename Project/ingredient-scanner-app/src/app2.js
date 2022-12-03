import React, { useState, useEffect } from 'react'
import axios from 'axios'
import photo from './sabino.png'
import FormData from 'form-data'

function App2() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)

            }
        )
    }, []) // <-- empty array means run once

    const handleClick1 = async () => {
        const { data } = await axios({
            method: "post",
            url: "http://127.0.0.1:8000/ingredients",
            //data: bodyFormData,
            data: { 'ingredients': "Peaches" },
            contentType: "application/json"
        })
            .then(function (response) {
                console.log(response)
            })
            .then(function (error) {
                console.log(error)
            });
    }

    const url = 'http://127.0.0.1:8000/scan';
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    const handleClick2 = async () => {
        const response = await axios.get('https://i.imgur.com/8uJcFxW.jpg', { responseType: 'stream' });
        let formData = new FormData();
        formData.append('file', response.data);
        axios.post(url, formData, config)
    }



    return (
        <div>
            <button onClick={handleClick1}>Make ingredients post request</button>
            <button onClick={handleClick2}>Make photo post request</button>
            {(typeof data.members === 'undefined') ? ( // if members is not fetched yet
                <p>loado...</p>
            ) : (
                data.members.map((member, i) => (
                    <p key={i}>{member}</p>
                ))
            )}
        </div>
    )
}

export default App2