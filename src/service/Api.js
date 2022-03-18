import { getUser as getUserMock } from "./ApiMock";
import { getUser as getUserServer } from "./ApiServer";

import { getActivity as getActivityMock } from "./ApiMock";
import { getActivity as getActivityServer } from "./ApiServer";

import { getAverageSession as getAverageSessionMock } from "./ApiMock";
import { getAverageSession as getAverageSessionServer } from "./ApiServer";

import { getScore as getScoreMock } from "./ApiMock";
import { getScore as getScoreServer } from "./ApiServer";

import { getKeyData as getKeyDataMock } from "./ApiMock";
import { getKeyData as getKeyDataServer } from "./ApiServer";

import { getPerformance as getPerformanceMock } from "./ApiMock";
import { getPerformance as getPerformanceServer } from "./ApiServer";

/**
 * Get user data from the API
 *
 * @param {string} id
 * @returns {object} result
 */

export const getUser = async (id) => {
  try {
    return await getUserServer(id);
  } catch {
    try {
      return await getUserMock(id);
    } catch (error) {
      console.error(error);
    }
  }
};

export const getActivity = async (id) => {
  try {
    return await getActivityServer(id);
  } catch {
    try {
      return await getActivityMock(id);
    } catch (error) {
      console.error(error);
    }
  }
};

export const getAverageSession = async (id) => {
  try {
    return await getAverageSessionServer(id);
  } catch {
    try {
      return await getAverageSessionMock(id);
    } catch (error) {
      console.error(error);
    }
  }
};

export const getScore = async (id) => {
  try {
    return await getScoreServer(id);
  } catch {
    try {
      return await getScoreMock(id);
    } catch (error) {
      console.error(error);
    }
  }
};

export const getKeyData = async (id) => {
  try {
    return await getKeyDataServer(id);
  } catch {
    try {
      return await getKeyDataMock(id);
    } catch (error) {
      console.error(error);
    }
  }
};

export const getPerformance = async (id) => {
  try {
    return await getPerformanceServer(id);
  } catch {
    try {
      return await getPerformanceMock(id);
    } catch (error) {
      console.error(error);
    }
  }
};
