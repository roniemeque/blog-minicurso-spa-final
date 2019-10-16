export const adaptaBody = obj => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

const USER_ID = "ronie2";

export const apiUrl = `https://u6uq3o62kd.execute-api.us-east-1.amazonaws.com/dev/${USER_ID}`;