// middleware/authMiddleware.ts
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
  
    // Token validation logic here (e.g., using Firebase Admin SDK)
    // For simplicity, assume token is valid if present
    next();
  };
  
  module.exports = authMiddleware;
  