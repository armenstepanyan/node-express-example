import React from 'react'
const API_URL = "http://localhost:5000";

function Post({ title, description, date, _id, postDeleted }) {

    const handleDelete = () => {
        console.log(_id);
        // eslint-disable-next-line
        if(!confirm("Are you sure ?")) {
            return;
        }

        
        fetch(`${API_URL}/posts/${_id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(res => {
            console.log(res, "deleted");
            // emit event
            postDeleted(_id);
          })

    }
  return (
    <div className="item">
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
            Created at: <b>{date}</b>
        </div>
        <p className="btn-container">
            <button>
                Edit
            </button>
            <button onClick={handleDelete}>
                Delete
            </button>
        </p>
    </div>
  )
}

export default Post