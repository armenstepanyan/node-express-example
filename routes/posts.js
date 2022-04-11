const express = require('express');
const router = express.Router();
const Post = require('../models/Posts')


// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)

    } catch (err) {
        res.status(500).json({ message: err })
    }
})

// create new post
router.post('/', async (req, res) => {
    // @todo: validate required fileds
    const { title, description } = req.body;
    const post = new Post({
        title,
        description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.status(500).json({ message: err })
    }

})

// Get post by ID
router.get('/:postId', async (req, res) => {
    const { postId } = req.params
    try {
        const post = await Post.findById(postId)
        res.json(post)
    } catch (err) {
        res.status(500).json({ message: err })
    }

})

// delete post
router.delete('/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await Post.remove({ _id: postId });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

// Update post
router.patch('/:postId', async (req, res) => {
    const { postId } = req.params;
    const { title, description } = req.body;
    try {
        const updatedPost = await Post.updateOne(
            { _id: postId }, 
            { $set: { title,  description  } 
        });
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

module.exports = router;