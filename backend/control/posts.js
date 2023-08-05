import Post from '../model/Post.js';
import User from '../model/user.js';

/* Create */
export const createPost = async (req, res) => {
    try{
        const { userId, desc, picture_path } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            F_name: user.F_name,
            L_name: user.L_name,
            location: user.location,
            desc,
            picture_path,
            userPicture_path: user.picture_path,
            likes: {},
            comments: [],
        });
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

/* READ */
export const getFeedPosts = async (req, res) => {
    try{
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message + "Post nahi mile"});
    }
}

export const getUserPosts = async (req, res) => {
    try{
        const { userId} = req.params;
        const posts = await Post.find({ userId });
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message+ "Nahi Bhetla"});
    }
}

/* Update */
export const likePost = async (req, res) => {
    try{
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const Likekela = post.likes.get(userId);
        if (Likekela) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id, 
            { likes: post.likes }, 
            { new: true });

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(404).json({ message: error.message+ "Nahi Bhetla"});
    }
};