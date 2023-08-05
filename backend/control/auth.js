import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.js';

/* New User Registration */
export const register = async (req, res) => {
    try{
        const{
            F_name,
            L_name,
            email,
            password,
            pic_path,
            friend,
            location,
            occupation,
            bio,
            profile_views,
            impressions,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            F_name,
            L_name,
            email,
            password : hashedPassword,
            pic_path,
            friend,
            location,
            occupation,
            bio,
            profile_views : Math.floor(Math.random() * 69),
            impressions : Math.floor(Math.random() * 69),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Daya Kuch toh Gadbad hai" + error.message });
    }
};

/* User Login */
export const login = async (req, res) => {
    try{
        const{
            email, password
        } = req.body;
        const user = await User.findOne({ email : email });
        if (!user) {
            return res.status(404).json({ message: "Bhai tu Hai kon?!" });
        }
        const correctche = await bcrypt.compare(password, user.password);
        if (!correctche) {
            return res.status(400).json({ message: "Password galat hai" });
        }

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ result: user, token });
    }
    catch (error) {
        res.status(500).json({ message: "Daya Kuch toh Gadbad hai login me" + error.message });
    }
}
