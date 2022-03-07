export const getUser = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}`);
  return await result.json();
};

export const getActivity = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/activity`);
  return await result.json();
};

export const getAverageSession = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/average-sessions`);
  return await result.json();
};

export const getScore = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/today-score`);
  return await result.json();
};

export const getActivities = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/activities`);
  return await result.json();
};

export const getKeyData = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/key-data`);
  return await result.json();
};

export const getPerformance = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/performance`);
  return await result.json();
};

/*module.exports = {
  getUser,
  getActivity,
  getAverageSession,
  getScore,
  getActivities,
  getKeyData,
};*/
