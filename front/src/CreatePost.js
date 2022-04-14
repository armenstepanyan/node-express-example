import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000";

function CreatePost() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        console.log(title, description)
        const data = { title, description };
        fetch(`${API_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                // @todo: check if response is success then navigate
                navigate("/")
            })
    }

    return (
        <div>
            <h3>Create New Post</h3>
            <p>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </p>
            <p>
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </p>
            <p>
                <button onClick={handleSubmit}>Submit</button>
            </p>
        </div>
    )
}

export default CreatePost