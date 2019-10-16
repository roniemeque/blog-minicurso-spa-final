export const adaptaBody = obj => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

const USER_ID = 'ronie';

export const apiUrl = `https://api-standalone.roniemeque.now.sh/api/${USER_ID}/posts`