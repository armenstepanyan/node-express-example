
import React from 'react';
import './App.css'
import PostList from './PostList';
import CreatePost from './CreatePost';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


function App() {

  return (
    <Router>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create New Post</Link>
        </li>
      </ul>

      <Routes >
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />

      </Routes >

    </Router>

  )
}

export default App;
