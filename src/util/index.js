const IMG_BASE = 'http://img.goalwisdom.net/';

export const getImgPath = (url) => {
  return url.indexOf('http') == 0 ? url : (IMG_BASE + url);
};
