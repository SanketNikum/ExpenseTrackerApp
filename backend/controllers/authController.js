import User from '../models/User.js';
import generateToken from '../utils/tokenGeneration.js';

// Register User
const registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    // Validate input
    if (!fullName || !email || !password || typeof fullName !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ message: 'All fields must be non-empty strings' });
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create new user
        const user = new User({ fullName, email, password, profileImageUrl });
        await user.save();

        // Generate token
        const token = await generateToken(user._id);

        // Return success response
        res.status(201).json({
            message: 'User registered',
            id: user._id,
            user: {
                fullName: user.fullName,
                email: user.email,
                profileImageUrl: user.profileImageUrl,
            },
            token,
        });
    } catch (error) {
        console.error('Error in RegisterUser:', error.message);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validate input: ensure email and password are non-empty strings
    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ message: 'Email and password must be non-empty strings' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = await generateToken(user._id);

        // Return success response
        res.status(200).json({
            id: user._id,
            user: {
                fullName: user.fullName,
                email: user.email,
                profileImageUrl: user.profileImageUrl,
            },
            token,
        });
    } catch (error) {
        console.error('Error in Login:', error.message);
        res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
};


// Get User Info
const getUserInfo = async (req, res) => {
    try {
        // const user = await User.findOne(req.user.id).select('-password');
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        res.status(200).json(user)
    } catch (error) {
        console.error('Error in GetUser:', error.message);
        res.status(500).json({ message: 'Error logging in user', error: error.message });
    }
}

// Export (assuming this is part of authController.js)
export { loginUser, registerUser, getUserInfo }; // Include registerUser if defined in the same file