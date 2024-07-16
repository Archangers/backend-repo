// controller/api.ts
const { db } = require('../config/firebaseConfig');

const updateUserData = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userData = req.body;

    await db.collection('USERS').doc(userId).update(userData);
    res.status(200).send('User data updated successfully');
  } catch (error) {
    next(error);
  }
};

const fetchUserData = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const userDoc = await db.collection('USERS').doc(userId).get();
    if (!userDoc.exists) {
      throw new ApiError(404, 'User not found');
    }

    res.status(200).send(userDoc.data());
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUserData, fetchUserData };
