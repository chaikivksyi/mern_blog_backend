import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/userModel.js";

export const register = async (req, res) => {
    try { 
        const { password, login } = req.body;

        if (!(password && login)) {
            res.status(400).send("All input is required");
        }

        const oldUser = await User.findOne({ login });
        console.log(oldUser)

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ login, hashPassword });
        
        const user = await User.create(newUser);

        const token = jwt.sign(
            { user_id: user._id, login },
                process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        user.token = token;

        res.status(201).json(user);
    } catch (err) {
        res.status(500).send('error register user');
    }
}   

export const login = async (req, res) => {

    try {
        const { login, password } = req.body;

        if (!(login && password)) {
            res.status(400).send("All input is required");
        }

        const user = await User.findOne({ login });

        if (user && (await bcrypt.compare(password, user.hashPassword))) {
  
            const token = jwt.sign(
                { user_id: user._id, login },
                process.env.TOKEN_KEY,
                {
                expiresIn: "2h",
                }
            );

            user.token = token;

            return res.status(200).json(user);
        }

        res.status(400).send("Invalid Credentials");
    } catch (err) {
        res.status(500).send('error login user');
    }
}   

export const logout = async (req, res) => {
    res.send('logout');
}   

export const accessToken = async (req, res) => {
    res.send('accessToken');
}   

export const refreshToken = async (req, res) => {
    res.send('refreshToken');
}   

export const getAll = async (req, res) => {
    const users = await User.find();
    res.json(users);
}   

// // accessTokens
// function generateAccessToken(user) {
// return 
// jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"}) 
// }
// // refreshTokens
// let refreshTokens = []
// function generateRefreshToken(user) {
// const refreshToken = 
// jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
// refreshTokens.push(refreshToken)
// return refreshToken
// }