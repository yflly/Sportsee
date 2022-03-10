/**
 * Get user data from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getUser = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}`);
  return await result.json();
};

/**
 * Get user activity from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getActivity = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/activity`);
  return await result.json();
};

/**
 * Get user average session from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getAverageSession = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/average-sessions`);
  return await result.json();
};

/**
 * Get user today score from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getScore = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/today-score`);
  return await result.json();
};

/**
 * Get user activities from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getActivities = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/activities`);
  return await result.json();
};

/**
 * Get user key-data from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getKeyData = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/key-data`);
  return await result.json();
};

/**
 * Get user performance from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getPerformance = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/performance`);
  return await result.json();
};
