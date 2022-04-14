import React, { useEffect, useState } from 'react';
import Post from './Post';


const API_URL = "http://localhost:5000";

function PostList() {
    const [posts, setPosts] = useState([]);

    const postDeleted = (id) => {
        const newPosts = posts.filter(post => post._id !== id);
        setPosts(newPosts);
    }

    useEffect(() => {

        fetch(`${API_URL}/posts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                setPosts(res || []);
            })

    }, [])

    return (
        <div className="container">
            {posts.map(currentPost => <Post {...currentPost} postDeleted={postDeleted} key={currentPost._id} />)}
        </div>
    );

}

export default PostList