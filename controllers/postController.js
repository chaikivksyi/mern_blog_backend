import Post from "../models/postModel.js";

export const getAll = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}   

export const create = async (req, res) => {
    try {
        const { title, body } = req.body;

        const post = await Post.create({title, body})

        res.json(post);
    } catch (error) {
        res.status(500).send('error create psot');
    }
}   


export const getOne = async (req, res) => {
    res.send('get one post');
}   
