import axios from 'axios';

const BASE_URL = 'http://localhost:5700/api/user';

const addFriend = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/addFriend`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getFriends = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getFriends`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const areFriends = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/areFriends`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteFromFriends = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/deleteFromFriends`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createWish = async (wishData) => {
  try {
    const response = await axios.post(`${BASE_URL}/createwishe`, wishData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllWishes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allwishes`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getWishById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/onewishe/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateWish = async (id, updatedWishData) => {
  try {
    const response = await axios.put(`${BASE_URL}/updatewishe/${id}`, updatedWishData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteWish = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/deletewishe/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  addFriend,
  getFriends,
  areFriends,
  deleteFromFriends,
  createWish,
  getAllWishes,
  getWishById,
  updateWish,
  deleteWish
};
