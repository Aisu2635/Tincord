import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../control/posts.js';
import { verifyToken } from '../middle/auth.js';

const router = express.Router();

/* READ */
router.get('/feed', verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* Update */
router.patch("/:id/like", verifyToken, likePost);

export default router;