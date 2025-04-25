import express from 'express';
import { registerUser, loginUser, getUserInfo } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerUser);
authRoutes.post('/login', loginUser);
authRoutes.get('/getUser',protect, getUserInfo);


authRoutes.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({message: "No file Uploaded"});
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads${req.file.filename}`;
    res.status(200).json({imageUrl});
})

export default authRoutes;