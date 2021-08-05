function compile(str, options) {
  templateSettings.interpolate = /{([\s\S]+?)}/g;
  let compiled = template(str);
  return compiled(options);
}

/**
 *
 * @param {T[]} arr Need to be remove duplicated elements
 * @param {string[]} keyStr the key string arr to judge duplicated elements
 * @returns T[] return the remove duplicated result
 */
function removeDuplicate(arr, keyStr) {
  const tempResultMap = new Map();
  arr.forEach((item) => {
    const key = keyStr.reduce((acc, cur) => acc + item[cur], '');
    tempResultMap.set(key, item);
  });
  return [...tempResultMap.values()];
}

/**
 *
 * @param {the Url needed to be parsed} url
 * @returns
 */
function parseUrl(url) {
  const searchStr = ~url.indexOf('?') ? url.slice(url.indexOf('?')) : '';

  const result = {};
  if (!searchStr.length || searchStr.length === 1) return result;
  const paramArr = searchStr.slice(1).split('&');
  paramArr.forEach((paramItem) => {
    const [key, value] = paramItem.split('=');
    result[key] = value;
  });
  return result;
}

module.exports = {
  compile,
  removeDuplicate,
  parseUrl
};
