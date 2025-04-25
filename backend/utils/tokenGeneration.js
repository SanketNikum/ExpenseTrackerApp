import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

export default generateToken;