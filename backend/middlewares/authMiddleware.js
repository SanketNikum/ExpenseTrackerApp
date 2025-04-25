import jwt from 'jsonwebtoken';
import User from "../models/User.js";

const protect = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({message : "Not authorized, no token"});
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findOne({_id : decoded.id}).select('-password');
        next();
    } catch (error) {
        console.log('Error : ', error);
        res.status(401).json({message : "Not authorized, no token"});
    }
}
export { protect };