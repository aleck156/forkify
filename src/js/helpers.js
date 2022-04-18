import { async } from 'regenerator-runtime';
import { TIMEOUT_SECONDS } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
    const resJSON = await res.json();
    if (!res.ok) {
      throw new Error(`${resJSON.message}`);
    }

    return resJSON;
  } catch (error) {
    throw error;
  }
};
