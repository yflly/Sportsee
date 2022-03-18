/**
 * Get user data from the API
 *
 * @param {string} id
 * @returns {object} result
 */

export const getUser = async (id) => {
  try {
    let data = await fetch("./data.json");
    let result = await data.json();
    let user = result.USER_MAIN_DATA.find((user) => user.id === id);
    if (user) {
      return {
        result: user,
        status: data.status,
      };
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Get user activity from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getActivity = async (id) => {
  try {
    let data = await fetch("./data.json");
    let result = await data.json();
    let user = result.USER_ACTIVITY.find((user) => user.userId === id);
    if (user) {
      return {
        result: user,
        status: data.status,
      };
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Get user average session from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getAverageSession = async (id) => {
  try {
    let data = await fetch("./data.json");
    let result = await data.json();
    let user = result.USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
    if (user) {
      return {
        result: user,
        status: data.status,
      };
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Get user today score from the API
 *
 * @param {string} id
 * @returns {object} result
 */
/*export const getScore = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/today-score`);
  return await result.json();
};*/

export const getScore = async (id) => {
  try {
    let data = await fetch("./data.json");
    let result = await data.json();
    let user = result.USER_MAIN_DATA.find((user) => user.userId === id);
    let userScore = user.score;
    if (user) {
      return {
        result: userScore,
        status: data.status,
      };
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Get user key-data from the API
 *
 * @param {string} id
 * @returns {object} result
 */
/*export const getKeyData = async (id) => {
  let result = await fetch(`http://localhost:3001/user/${id}/key-data`);
  return await result.json();
};*/

export const getKeyData = async (id) => {
  try {
    let data = await fetch("./data.json");
    let result = await data.json();
    let user = result.USER_MAIN_DATA.find((user) => user.userId === id);
    let userKeyData = user.keyData;
    if (user) {
      return {
        result: userKeyData,
        status: data.status,
      };
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Get user performance from the API
 *
 * @param {string} id
 * @returns {object} result
 */
export const getPerformance = async (id) => {
  try {
    let data = await fetch("./data.json");
    let result = await data.json();
    let user = result.USER_PERFORMANCE.find((user) => user.userId === id);
    if (user) {
      return {
        result: user,
        status: data.status,
      };
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.error(err);
  }
};
