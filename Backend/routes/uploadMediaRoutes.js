const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const Post = mongoose.model("Post");
require('dotenv').config();

router.post('/setProfilePic', (req, res) => {
  const { email, profilePic } = req.body;
    User.findOne({ email: email })
        .then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Credentials" })
            }
            savedUser.profilePic = profilePic;
            savedUser.save
                .then(user => {
                    res.json({ message: "Profile picture updated successfully" })
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
})

router.post('/addBookPost', async (req, res) => {
  const { email, post, postDescription } = req.body;
  try {
    // Find the user with the given email
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }
    // Create a new post
    const newPost = await new Post({
      user: user._id,
      image: post,
      caption: postDescription,
    }).save;

    // Add the post to the user's posts array
      user.posts.push({ postId: newPost._id, post: post, postDescription: postDescription });

    // Save the user
    await user.save();

    res.json({ message: "Post added successfully" });
  } catch (err) {
    console.log(err);
    res.json({ error: "Error adding post" });
  }
});

router.post('/addMoviePost', async (req, res) => {
  const { email, post, postDescription } = req.body;

  try {
    // Find the user with the given email
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ error: "Invalid Credentials" });
    }

    // Create a new post
    const newPost = await new Post({
      user: user._id,
      image: post,
      caption: postDescription,
    }).save;

    // Add the post to the user's posts array
      user.posts.push({ postId: newPost._id, post: post, postDescription: postDescription });

    // Save the user
    await user.save();

    res.json({ message: "Post added successfully" });
  } catch (err) {
    console.log(err);
    res.json({ error: "Error adding post" });
  }
});

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('user', ['profilePic', 'username'])
      .sort({ createdAt: 'desc' });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
