// repository/userCollection.ts
const { db } = require('../config/firebaseConfig');

const updateUserData = async (userId, userData) => {
  await db.collection('USERS').doc(userId).update(userData);
};

const fetchUserData = async (userId) => {
  const userDoc = await db.collection('USERS').doc(userId).get();
  if (!userDoc.exists) {
    throw new Error('User not found');
  }
  return userDoc.data();
};

module.exports = { updateUserData, fetchUserData };
